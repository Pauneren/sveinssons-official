"use client";

import { EyebrowBadge } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const stepNumbers = ["01", "02", "03", "04"] as const;

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="scroll-mt-24 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <EyebrowBadge>{t.process.eyebrow}</EyebrowBadge>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {t.process.titleLine1}
            <br />
            <span className="text-gradient">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.process.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <li
              key={stepNumbers[index]}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7"
            >
              <span className="inline-flex w-fit rounded-full border border-[#7c3aed]/35 bg-[#7c3aed]/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[#a78bfa]">
                {stepNumbers[index]}
              </span>
              <h3 className="text-lg font-semibold text-zinc-100">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
