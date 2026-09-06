export const LANGUAGE_COOKIE = "sveinssons-language";
export const LOCALE_HEADER = "x-sveinssons-locale";

export type PublicLanguage = "en" | "is";

const PUBLIC_LANGUAGES: PublicLanguage[] = ["en", "is"];

export function isPublicLanguage(value: string | undefined): value is PublicLanguage {
  return PUBLIC_LANGUAGES.includes(value as PublicLanguage);
}

export function parseLanguageCookie(value: string | undefined): PublicLanguage {
  return isPublicLanguage(value) ? value : "is";
}

export function languageFromPathname(pathname: string): PublicLanguage {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return normalized === "/en" || normalized.startsWith("/en/") ? "en" : "is";
}

export function localePath(lang: PublicLanguage): "/" | "/en/" {
  return lang === "en" ? "/en/" : "/";
}

export function localeHref(lang: PublicLanguage, hash = ""): string {
  const path = localePath(lang);
  if (!hash || hash === "#") return path;
  return `${path}${hash.startsWith("#") ? hash : `#${hash}`}`;
}

export function languageCookieMaxAge() {
  return 60 * 60 * 24 * 365;
}

export function writeLanguageCookie(lang: PublicLanguage) {
  document.cookie = `${LANGUAGE_COOKIE}=${lang}; path=/; max-age=${languageCookieMaxAge()}; samesite=lax`;
}
