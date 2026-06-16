"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/lib/translations";

const options: { value: Language; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "is", label: "IS" },
];

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1" role="group" aria-label="Language">
      {options.map(({ value, label }) => {
        const active = lang === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setLang(value)}
            aria-pressed={active}
            className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] ${
              active
                ? "border-[#7c3aed] bg-[#7c3aed] text-white"
                : "border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
