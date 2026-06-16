"use client";

import { LayoutIcon, LightningIcon, SmartphoneIcon } from "@/components/icons";
import { HeroDeviceMockup } from "@/components/sections/HeroDeviceMockup";
import { Button, EyebrowBadge } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const featureIcons = [LightningIcon, LayoutIcon, SmartphoneIcon];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-x-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 py-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)] xl:items-end xl:gap-5 xl:px-8 xl:py-16">
        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-7 xl:mx-0 xl:max-w-none xl:pb-[4.5rem] xl:pt-2">
          <EyebrowBadge>{t.hero.eyebrow}</EyebrowBadge>

          <h1 className="text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {t.hero.titleLine1}
            <br />
            <span className="text-gradient">{t.hero.titleHighlight}</span>
            {t.hero.titleSuffix}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-[1.05rem]">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" showArrow>
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#work" variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <ul className="mt-2 flex flex-col gap-5 sm:flex-row sm:gap-10 lg:gap-12">
            {t.hero.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <li key={feature.title} className="flex flex-col gap-1.5">
                  <Icon className="h-5 w-5 text-[#8b5cf6]" />
                  <span className="text-sm font-semibold text-zinc-100">{feature.title}</span>
                  <span className="text-xs text-white/55">{feature.subtitle}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden min-w-0 xl:block">
          <HeroDeviceMockup />
        </div>
      </div>
    </section>
  );
}
