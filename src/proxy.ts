import { NextResponse, type NextRequest } from "next/server";

import { languageFromPathname, LOCALE_HEADER } from "@/lib/language";

export function proxy(request: NextRequest) {
  const locale = languageFromPathname(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
