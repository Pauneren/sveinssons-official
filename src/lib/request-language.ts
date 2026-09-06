import { headers } from "next/headers";

import { isPublicLanguage, LOCALE_HEADER, type PublicLanguage } from "@/lib/language";

export async function getRequestLanguage(): Promise<PublicLanguage> {
  const headerList = await headers();
  const value = headerList.get(LOCALE_HEADER) ?? undefined;
  return isPublicLanguage(value) ? value : "is";
}
