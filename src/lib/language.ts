export const LANGUAGE_COOKIE = "sveinssons-language";
export const VERCEL_IP_COUNTRY_HEADER = "x-vercel-ip-country";

export type PublicLanguage = "en" | "is";

const PUBLIC_LANGUAGES: PublicLanguage[] = ["en", "is"];

export function isPublicLanguage(value: string | undefined): value is PublicLanguage {
  return PUBLIC_LANGUAGES.includes(value as PublicLanguage);
}

export function parseLanguageCookie(value: string | undefined): PublicLanguage {
  return isPublicLanguage(value) ? value : "is";
}

export function languageFromCountryCode(country: string | undefined | null): PublicLanguage | undefined {
  if (!country) return undefined;

  const code = country.trim().toUpperCase();
  if (code === "IS") return "is";
  if (!/^[A-Z]{2}$/.test(code) || code === "XX") return undefined;
  return "en";
}

export function languageFromPathname(pathname: string): PublicLanguage {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return normalized === "/en" || normalized.startsWith("/en/") ? "en" : "is";
}

export const SERVICE_PAGE_PATH = {
  is: "/vefsidugerd/",
  en: "/en/website-development/",
} as const;

const PATH_ALTERNATES: Record<string, Record<PublicLanguage, string>> = {
  "/": { is: "/", en: "/en/" },
  "/en": { is: "/", en: "/en/" },
  "/vefsidugerd": { is: SERVICE_PAGE_PATH.is, en: SERVICE_PAGE_PATH.en },
  "/en/website-development": { is: SERVICE_PAGE_PATH.is, en: SERVICE_PAGE_PATH.en },
};

export function localePath(lang: PublicLanguage): "/" | "/en/" {
  return lang === "en" ? "/en/" : "/";
}

export function localeHref(lang: PublicLanguage, hash = ""): string {
  const path = localePath(lang);
  if (!hash || hash === "#") return path;
  return `${path}${hash.startsWith("#") ? hash : `#${hash}`}`;
}

export function localeAlternateHref(lang: PublicLanguage, pathname: string, hash = ""): string {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const path = PATH_ALTERNATES[normalized]?.[lang] ?? localePath(lang);
  if (!hash || hash === "#") return path;
  return `${path}${hash.startsWith("#") ? hash : `#${hash}`}`;
}

export function languageCookieMaxAge() {
  return 60 * 60 * 24 * 365;
}

export function readLanguageCookie(): PublicLanguage | undefined {
  if (typeof document === "undefined") return undefined;

  const value = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${LANGUAGE_COOKIE}=`))
    ?.slice(LANGUAGE_COOKIE.length + 1);

  return isPublicLanguage(value) ? value : undefined;
}

export function writeLanguageCookie(lang: PublicLanguage) {
  document.cookie = `${LANGUAGE_COOKIE}=${lang}; path=/; max-age=${languageCookieMaxAge()}; samesite=lax`;
}
