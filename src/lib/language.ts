export const LANGUAGE_COOKIE = "sveinssons-language";

export type PublicLanguage = "en" | "is";

const PUBLIC_LANGUAGES: PublicLanguage[] = ["en", "is"];

export function isPublicLanguage(value: string | undefined): value is PublicLanguage {
  return PUBLIC_LANGUAGES.includes(value as PublicLanguage);
}

export function parseLanguageCookie(value: string | undefined): PublicLanguage {
  return isPublicLanguage(value) ? value : "en";
}

export function languageCookieMaxAge() {
  return 60 * 60 * 24 * 365;
}

export function writeLanguageCookie(lang: PublicLanguage) {
  document.cookie = `${LANGUAGE_COOKIE}=${lang}; path=/; max-age=${languageCookieMaxAge()}; samesite=lax`;
}
