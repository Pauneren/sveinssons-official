import type { VercelFormHandler } from "@sveinssons-dev/form-kit-vercel";
import type { NextApiRequest, NextApiResponse } from "next";

import { createLiveVercelContactHandler } from "@/lib/form-kit/vercel";

/**
 * Next parses JSON by default on Pages API routes. Form Kit must read the
 * raw stream; a pre-parsed `req.body` object is treated as unusable (503).
 *
 * Export a plain object literal. Next 16 Turbopack statically parses this
 * `config` from the AST and rejects TypeScript const assertions on the export.
 */
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

let pending: Promise<VercelFormHandler> | undefined;

function liveHandler(): Promise<VercelFormHandler> {
  if (pending === undefined) {
    const attempt = createLiveVercelContactHandler();
    pending = attempt;
    void attempt.catch(() => {
      if (pending === attempt) {
        pending = undefined;
      }
    });
  }
  return pending;
}

function writeUnavailable(response: NextApiResponse): void {
  if (response.headersSent) {
    return;
  }
  console.error(JSON.stringify({ code: "contact_handler_unavailable" }));
  response.statusCode = 503;
  response.setHeader("cache-control", "no-store");
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.end(JSON.stringify({ ok: false, error: "unavailable" }));
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
    const vercelHandler = await liveHandler();
    await vercelHandler(request, response);
  } catch {
    writeUnavailable(response);
  }
}
