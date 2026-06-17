"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

import {
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
  initialLanguage = "en",
}: {
  children: React.ReactNode;
  initialLanguage?: PublicLanguage;
}) {
  const [lang, setLangState] = useState<PublicLanguage>(initialLanguage);

  const setLang = useCallback((next: PublicLanguage) => {
    setLangState(next);
    writeLanguageCookie(next);
    document.documentElement.lang = next;
  }, []);

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
