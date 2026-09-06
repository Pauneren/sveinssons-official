"use client";

import { createContext, useCallback, useContext, useMemo } from "react";

import {
  localeAlternateHref,
  type PublicLanguage,
  writeLanguageCookie,
} from "@/lib/language";
import { translations, type Translations } from "@/lib/translations";

type LanguageContextValue = {
  lang: PublicLanguage;
  setLang: (lang: PublicLanguage) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLanguage = "is",
}: {
  children: React.ReactNode;
  initialLanguage?: PublicLanguage;
}) {
  const lang = initialLanguage;

  const setLang = useCallback(
    (next: PublicLanguage) => {
      writeLanguageCookie(next);
      if (next === lang) return;
      window.location.assign(
        localeAlternateHref(next, window.location.pathname, window.location.hash),
      );
    },
    [lang],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
