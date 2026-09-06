import {
  RedisNonceStore,
  RedisRateLimitStore,
  type RedisStoreClient,
} from "@sveinssons-dev/form-kit-redis";
import {
  loadServerSecurityConfig,
  MemoryNonceStore,
  MemoryRateLimitStore,
  type Clock,
  type EnvSource,
  type IdGenerator,
  type RestrictedLogger,
  type SubmissionDelivery,
} from "@sveinssons-dev/form-kit-server";
import {
  createVercelFormHandler,
  readVercelSocketNetworkContext,
  type ResolveVercelNetworkContext,
  type VercelFormHandler,
} from "@sveinssons-dev/form-kit-vercel";

import { publicFormConfig } from "./public-config";
import { getSharedRedisStoreClient, loadProductionRedisNamespace, loadProductionRedisUrl } from "./redis";
import {
  createRestrictedLogger,
  createSmtpDelivery,
  isProductionCompositionEnabled,
} from "./server";

export { CONTACT_ENDPOINT, publicFormConfig } from "./public-config";
export { isProductionCompositionEnabled, productionCompositionMode } from "./server";

/**
 * Socket-peer identity from @sveinssons-dev/form-kit-vercel.
 * Does not read X-Forwarded-For or X-Real-IP. On Vercel the peer is typically
 * the platform proxy, not a unique visitor, so per-visitor rate limiting is
 * not claimed. Keep FORM_TRUST_PROXY unset/0.
 */
export function createVercelResolveNetworkContext(): ResolveVercelNetworkContext {
  return readVercelSocketNetworkContext;
}

type HandlerOptions = {
  env?: EnvSource;
  redis?: RedisStoreClient;
  delivery?: SubmissionDelivery;
  logger?: RestrictedLogger;
  clock?: Clock;
  idGenerator?: IdGenerator;
  resolveNetworkContext?: ResolveVercelNetworkContext;
};

function createMemoryHandler(options: {
  env: EnvSource;
  delivery: SubmissionDelivery;
  logger?: RestrictedLogger;
  clock?: Clock;
  idGenerator?: IdGenerator;
  resolveNetworkContext?: ResolveVercelNetworkContext;
}): VercelFormHandler {
  const config = loadServerSecurityConfig(options.env);
  return createVercelFormHandler({
    config,
    form: publicFormConfig,
    rateLimitStore: new MemoryRateLimitStore(config.maxRateLimitEntries),
    nonceStore: new MemoryNonceStore(config.maxNonceEntries, options.clock),
    delivery: options.delivery,
    logger: options.logger ?? createRestrictedLogger(),
    resolveNetworkContext:
      options.resolveNetworkContext ?? createVercelResolveNetworkContext(),
    ...(options.clock === undefined ? {} : { clock: options.clock }),
    ...(options.idGenerator === undefined ? {} : { idGenerator: options.idGenerator }),
  });
}

async function createRedisHandler(options: {
  env: EnvSource;
  redis: RedisStoreClient;
  delivery: SubmissionDelivery;
  logger?: RestrictedLogger;
  clock?: Clock;
  idGenerator?: IdGenerator;
  resolveNetworkContext?: ResolveVercelNetworkContext;
}): Promise<VercelFormHandler> {
  const config = loadServerSecurityConfig(options.env);
  const namespace = loadProductionRedisNamespace(options.env);
  return createVercelFormHandler({
    config,
    form: publicFormConfig,
    rateLimitStore: new RedisRateLimitStore(options.redis, { namespace }),
    nonceStore: new RedisNonceStore(options.redis, {
      namespace,
      ...(options.clock === undefined ? {} : { clock: options.clock }),
    }),
    delivery: options.delivery,
    logger: options.logger ?? createRestrictedLogger(),
    resolveNetworkContext:
      options.resolveNetworkContext ?? createVercelResolveNetworkContext(),
    ...(options.clock === undefined ? {} : { clock: options.clock }),
    ...(options.idGenerator === undefined ? {} : { idGenerator: options.idGenerator }),
  });
}

/**
 * Request-time composition only. Do not import this module from App Router
 * pages or layouts — public routes must stay static.
 *
 * FORM_PRODUCTION_COMPOSITION=1 → Redis nonce/rate-limit stores.
 * FORM_PRODUCTION_COMPOSITION=0 → memory stores (local/test).
 * Unset/invalid fails closed when NODE_ENV=production.
 */
export async function createLiveVercelContactHandler(
  options: HandlerOptions = {},
): Promise<VercelFormHandler> {
  const env = options.env ?? process.env;
  const delivery = options.delivery ?? createSmtpDelivery(env);

  if (isProductionCompositionEnabled(env)) {
    const redis =
      options.redis ?? (await getSharedRedisStoreClient(loadProductionRedisUrl(env)));
    return createRedisHandler({
      env,
      redis,
      delivery,
      ...(options.logger === undefined ? {} : { logger: options.logger }),
      ...(options.clock === undefined ? {} : { clock: options.clock }),
      ...(options.idGenerator === undefined ? {} : { idGenerator: options.idGenerator }),
      ...(options.resolveNetworkContext === undefined
        ? {}
        : { resolveNetworkContext: options.resolveNetworkContext }),
    });
  }

  return createMemoryHandler({
    env,
    delivery,
    ...(options.logger === undefined ? {} : { logger: options.logger }),
    ...(options.clock === undefined ? {} : { clock: options.clock }),
    ...(options.idGenerator === undefined ? {} : { idGenerator: options.idGenerator }),
    ...(options.resolveNetworkContext === undefined
      ? {}
      : { resolveNetworkContext: options.resolveNetworkContext }),
  });
}
