import {
  createSmtpSubmissionDelivery,
  createSmtpTransport,
  loadEmailConfig,
  type MailTransport,
} from "@sveinssons-dev/form-kit-email";
import type {
  EnvSource,
  RestrictedLogger,
  SubmissionDelivery,
} from "@sveinssons-dev/form-kit-server";

export type { EnvSource };

export class ProductionConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProductionConfigError";
  }
}

export const PRODUCTION_COMPOSITION_ENV = "FORM_PRODUCTION_COMPOSITION";

export type ProductionCompositionMode = "memory" | "redis";

/**
 * Redis stores require FORM_PRODUCTION_COMPOSITION=1.
 * Memory stores require an explicit 0, or unset outside NODE_ENV=production.
 * Missing/invalid composition fails closed in production.
 */
export function productionCompositionMode(env: EnvSource): ProductionCompositionMode {
  const raw = env[PRODUCTION_COMPOSITION_ENV];
  if (raw === "1") {
    return "redis";
  }
  if (raw === "0") {
    return "memory";
  }
  if (raw === undefined && env.NODE_ENV !== "production") {
    return "memory";
  }
  if (raw === undefined) {
    throw new ProductionConfigError(
      "FORM_PRODUCTION_COMPOSITION is required when NODE_ENV=production",
    );
  }
  throw new ProductionConfigError("FORM_PRODUCTION_COMPOSITION must be 0 or 1");
}

export function isProductionCompositionEnabled(env: EnvSource): boolean {
  return productionCompositionMode(env) === "redis";
}

export function createRestrictedLogger(): RestrictedLogger {
  return {
    log(event) {
      const payload: {
        requestId: string;
        code: string;
        durationMs: number;
        deliveryOutcome?: string;
      } = {
        requestId: event.requestId,
        code: event.code,
        durationMs: event.durationMs,
      };
      if (event.deliveryOutcome !== undefined) {
        payload.deliveryOutcome = event.deliveryOutcome;
      }
      console.info(JSON.stringify(payload));
    },
  };
}

/**
 * Provider-neutral SMTP delivery from Form Kit env names only.
 * loadEmailConfig reads FORM_SMTP_HOST, FORM_SMTP_PORT, FORM_SMTP_USER,
 * FORM_SMTP_PASS, FORM_FROM_EMAIL, FORM_FROM_NAME, FORM_TO_EMAIL, FORM_SUBJECT.
 */
export function createSmtpDelivery(
  env: EnvSource,
  transport?: MailTransport,
): SubmissionDelivery {
  const email = loadEmailConfig(env);
  return createSmtpSubmissionDelivery(email, transport ?? createSmtpTransport(email));
}
