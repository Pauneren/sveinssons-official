"use client";

import { EyebrowBadge } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-[#8b5cf6]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-5">
            <EyebrowBadge>{t.about.eyebrow}</EyebrowBadge>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.about.titleLead}
              <span className="text-gradient">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              {t.about.body}
            </p>
          </div>

          <ul className="flex flex-col gap-4 lg:pt-2">
            {t.about.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-5 lg:p-6"
              >
                <CheckIcon />
                <span className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
