import { headers } from "next/headers";

import {
  COUNTRY_PREF_HEADER,
  isPublicLanguage,
  LOCALE_HEADER,
  type PublicLanguage,
} from "@/lib/language";

export async function getRequestLanguage(): Promise<PublicLanguage> {
  const headerList = await headers();
  const value = headerList.get(LOCALE_HEADER) ?? undefined;
  return isPublicLanguage(value) ? value : "is";
}

export async function getRequestCountryPreference(): Promise<PublicLanguage | null> {
  const headerList = await headers();
  const value = headerList.get(COUNTRY_PREF_HEADER) ?? undefined;
  return isPublicLanguage(value) ? value : null;
}
