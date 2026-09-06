import {
  parseRedisNamespace,
  RedisStoreConfigError,
  type RedisStoreClient,
} from "@sveinssons-dev/form-kit-redis";
import { createClient } from "redis";

import { ProductionConfigError, type EnvSource } from "./server";

type NodeRedisDriver = {
  set(
    key: string,
    value: string,
    options: { PX: number; NX: boolean },
  ): Promise<string | null>;
  eval(
    script: string,
    options: { keys: string[]; arguments: string[] },
  ): Promise<unknown>;
};

type NodeRedisManagedClient = NodeRedisDriver & {
  on(event: "error", listener: (error: unknown) => void): unknown;
  connect(): Promise<unknown>;
  close(): Promise<unknown>;
  destroy(): void;
};

type SharedRedisConnection = {
  storeClient: RedisStoreClient;
};

let shared: Promise<SharedRedisConnection> | undefined;

export function loadProductionRedisNamespace(env: EnvSource): string {
  const raw = env.FORM_REDIS_NAMESPACE;
  if (raw === undefined || raw.length === 0) {
    throw new ProductionConfigError("FORM_REDIS_NAMESPACE is required");
  }
  try {
    return parseRedisNamespace(raw);
  } catch (error) {
    if (error instanceof RedisStoreConfigError) {
      throw new ProductionConfigError("FORM_REDIS_NAMESPACE is invalid");
    }
    throw error;
  }
}

export function loadProductionRedisUrl(env: EnvSource): string {
  const raw = env.REDIS_URL;
  if (raw === undefined || raw.length === 0) {
    throw new ProductionConfigError("REDIS_URL is required");
  }
  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    throw new ProductionConfigError("REDIS_URL is malformed");
  }
  if (parsed.protocol !== "redis:" && parsed.protocol !== "rediss:") {
    throw new ProductionConfigError("REDIS_URL must use redis:// or rediss://");
  }
  return raw;
}

export function wrapNodeRedisClient(driver: NodeRedisDriver): RedisStoreClient {
  return {
    async setNxPx(key, value, ttlMs) {
      const reply = await driver.set(key, value, { PX: ttlMs, NX: true });
      return reply === "OK" ? "OK" : null;
    },
    eval(script, keys, argv) {
      return driver.eval(script, {
        keys: [...keys],
        arguments: [...argv],
      });
    },
  };
}

/**
 * One Redis connection per warm Node isolate. A rejected first connect is
 * not cached, so a later request can retry. Connects only when called —
 * never at import time or during `next build`.
 */
export function getSharedRedisStoreClient(url: string): Promise<RedisStoreClient> {
  if (shared === undefined) {
    const attempt = connectShared(url);
    shared = attempt;
    void attempt.catch(() => {
      if (shared === attempt) {
        shared = undefined;
      }
    });
  }
  return shared.then((connection) => connection.storeClient);
}

async function connectShared(url: string): Promise<SharedRedisConnection> {
  const driver = createClient({ url }) as NodeRedisManagedClient;
  driver.on("error", () => {
    console.error(JSON.stringify({ code: "redis_client_error" }));
  });
  try {
    await driver.connect();
  } catch (error) {
    try {
      driver.destroy();
    } catch {
      // Keep the original connect failure.
    }
    throw error;
  }
  return { storeClient: wrapNodeRedisClient(driver) };
}
