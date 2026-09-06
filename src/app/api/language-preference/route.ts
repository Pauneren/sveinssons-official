import { NextResponse } from "next/server";

import { languageFromCountryCode, VERCEL_IP_COUNTRY_HEADER } from "@/lib/language";

export function GET(request: Request) {
  const preferredLanguage =
    languageFromCountryCode(request.headers.get(VERCEL_IP_COUNTRY_HEADER)) ?? null;

  return NextResponse.json(
    { preferredLanguage },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
