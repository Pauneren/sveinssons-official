"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { localeHref, type PublicLanguage, writeLanguageCookie } from "@/lib/language";

const options: { value: PublicLanguage; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "is", label: "IS" },
];

export function LanguageToggle() {
  const { lang } = useLanguage();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <div className="inline-flex items-center gap-1" role="group" aria-label="Language">
      {options.map(({ value, label }) => {
        const active = lang === value;
        return (
          <a
            key={value}
            href={localeHref(value, hash)}
            aria-current={active ? "true" : undefined}
            onClick={(event) => {
              writeLanguageCookie(value);
              if (active) event.preventDefault();
            }}
            className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] ${
              active
                ? "border-[#7c3aed] bg-[#7c3aed] text-white"
                : "border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}
