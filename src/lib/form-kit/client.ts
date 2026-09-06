/** Trailing slash matches next.config.ts trailingSlash: true. */
const CONTACT_ENDPOINT = "/api/contact/";

export type ContactPublicError = "invalid" | "rate_limited" | "unavailable";

export type ContactPayload = {
  token: string;
  companyWebsite: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectType: string;
  language: string;
  timeline: string;
  budgetRange: string;
  projectDetails: string;
  privacy: boolean;
};

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; error: ContactPublicError };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readPublicError(value: unknown): ContactPublicError {
  if (
    isRecord(value) &&
    (value.error === "invalid" ||
      value.error === "rate_limited" ||
      value.error === "unavailable")
  ) {
    return value.error;
  }
  return "unavailable";
}

export async function fetchContactToken(): Promise<string | null> {
  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }

    const data: unknown = await response.json();
    if (isRecord(data) && typeof data.token === "string" && data.token.length > 0) {
      return data.token;
    }
    return null;
  } catch {
    return null;
  }
}

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactSubmitResult> {
  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    const data: unknown = await response.json().catch(() => null);
    if (response.ok && isRecord(data) && data.ok === true) {
      return { ok: true };
    }
    return { ok: false, error: readPublicError(data) };
  } catch {
    return { ok: false, error: "unavailable" };
  }
}
