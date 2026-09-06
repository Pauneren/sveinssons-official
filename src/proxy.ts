import { NextResponse, type NextRequest } from "next/server";

import {
  COUNTRY_PREF_HEADER,
  languageFromCountryCode,
  languageFromPathname,
  LOCALE_HEADER,
  VERCEL_IP_COUNTRY_HEADER,
} from "@/lib/language";

export function proxy(request: NextRequest) {
  const locale = languageFromPathname(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  const countryPreference = languageFromCountryCode(request.headers.get(VERCEL_IP_COUNTRY_HEADER));
  if (countryPreference) {
    requestHeaders.set(COUNTRY_PREF_HEADER, countryPreference);
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
