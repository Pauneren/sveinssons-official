"use client";

import { Button, EyebrowBadge } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import type { Translations } from "@/lib/translations";

type PricingPlan = Translations["pricing"]["plans"][number];

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

function PricingCard({ plan, ctaLabel }: { plan: PricingPlan; ctaLabel: string }) {
  const cardBody = (
    <div className="flex h-full flex-col gap-5 p-6 lg:p-7">
      {plan.badge ? (
        <span className="inline-flex w-fit rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/15 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#c4b5fd] uppercase">
          {plan.badge}
        </span>
      ) : (
        <span className="h-[26px]" aria-hidden />
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-zinc-100">{plan.title}</h3>
        <p className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-[1.65rem]">
          {plan.price}
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">{plan.description}</p>
      </div>
      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <CheckIcon />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      <Button href="#contact" className="mt-auto w-full">
        {ctaLabel}
      </Button>
    </div>
  );

  if (plan.featured) {
    return (
      <li className="md:col-span-2 lg:col-span-1">
        <div className="h-full rounded-2xl bg-gradient-to-br from-[#7c3aed]/70 via-[#6366f1]/50 to-[#3b82f6]/70 p-px shadow-[0_0_36px_rgba(124,58,237,0.18)]">
          <div className="h-full rounded-[calc(1rem-1px)] bg-[#0a0a0f]">{cardBody}</div>
        </div>
      </li>
    );
  }

  return (
    <li className="h-full rounded-2xl border border-white/[0.06] bg-[#0a0a0f]">
      {cardBody}
    </li>
  );
}

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <EyebrowBadge>{t.pricing.eyebrow}</EyebrowBadge>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {t.pricing.titleLine1}
            <br />
            <span className="text-gradient">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.pricing.description}
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {t.pricing.plans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} ctaLabel={t.pricing.cardCta} />
          ))}
        </ul>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/[0.06] bg-[#0a0a0f]/80 px-6 py-8 text-center lg:mt-16 lg:px-10">
          <h3 className="text-lg font-semibold text-zinc-100">{t.pricing.tailoredTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.pricing.tailoredDescription}
          </p>
          <Button href="#contact" variant="secondary" className="mt-6">
            {t.pricing.tailoredCta}
          </Button>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-white/50 sm:text-sm">
          {t.pricing.footnote}
        </p>
      </div>
    </section>
  );
}
