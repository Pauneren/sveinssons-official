"use client";

import { BagIcon, HexagonIcon, LayoutIcon } from "@/components/icons";
import { EyebrowBadge } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const serviceIcons = [LayoutIcon, HexagonIcon, BagIcon];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 lg:items-start">
          <div className="flex flex-col gap-5">
            <EyebrowBadge>{t.services.eyebrow}</EyebrowBadge>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.services.titleLine1}
              {t.services.titleLine2Prefix ? (
                <>
                  <br />
                  {t.services.titleLine2Prefix}
                </>
              ) : (
                " "
              )}
              <span className="text-gradient">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              {t.services.description}
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-3">
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <li
                  key={service.title}
                  className="flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7"
                >
                  <Icon className="h-6 w-6 text-[#8b5cf6]" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{service.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
