"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ServiceStrip() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-white/[0.04] py-10 lg:py-11">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-7 text-center text-[11px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
          {t.serviceStrip.heading}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between md:gap-x-6">
          {t.serviceStrip.items.map((name) => (
            <li
              key={name}
              className="text-xs font-semibold tracking-[0.12em] text-white/55 uppercase sm:text-sm"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
