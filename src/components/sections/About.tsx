"use client";

import { EyebrowBadge } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-5">
            <EyebrowBadge>{t.about.eyebrow}</EyebrowBadge>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.about.titleLine1}{" "}
              <span className="text-gradient">{t.about.titleHighlight}</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base lg:pt-2">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
