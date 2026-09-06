import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button, EyebrowBadge } from "@/components/ui/Button";
import { LanguageSuggestion } from "@/components/ui/LanguageSuggestion";
import { localeHref, SERVICE_PAGE_PATH } from "@/lib/language";
import { siteConfig, siteUrl } from "@/lib/site";
import { translations } from "@/lib/translations";
import type { ServicePageCopy } from "@/lib/website-development";
import { websiteDevelopmentSeo } from "@/lib/website-development";

const stepNumbers = ["01", "02", "03", "04"] as const;

export function WebsiteDevelopmentPage({ copy }: { copy: ServicePageCopy }) {
  const { lang } = copy;
  const processSteps = translations[lang].process.steps;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: websiteDevelopmentSeo[lang].title.replace(" | Sveinssons", ""),
    description: websiteDevelopmentSeo[lang].description,
    url: `${siteUrl.replace(/\/+$/, "")}${SERVICE_PAGE_PATH[lang]}`,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteUrl,
    },
  };

  return (
    <div className="page-atmosphere min-h-screen">
      <Header />
      <LanguageSuggestion />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="mx-auto max-w-7xl px-6 pt-12 pb-8 lg:px-8 lg:pt-20 lg:pb-12">
          <div className="flex max-w-3xl flex-col gap-6">
            <EyebrowBadge>{copy.eyebrow}</EyebrowBadge>
            <h1 className="text-[2.25rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {copy.h1}
            </h1>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-[1.05rem]">
              {copy.intro}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={localeHref(lang, "#contact")} showArrow>
                {copy.ctaPrimary}
              </Button>
              <Button href={localeHref(lang, "#pricing")} variant="secondary">
                {copy.ctaSecondary}
              </Button>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.customTitle}</h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {copy.customBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.combinedTitle}</h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {copy.combinedBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="py-10 lg:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.typesTitle}</h2>
              <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {copy.typesIntro}
              </p>
            </div>
            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {copy.types.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6"
                >
                  <h3 className="text-lg font-semibold text-zinc-100">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.qualityTitle}</h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {copy.qualityBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
            {copy.qualityItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b5cf6]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-10 lg:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.processTitle}</h2>
              <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {copy.processIntro}{" "}
                <a
                  href={localeHref(lang, "#process")}
                  className="font-medium text-[#a78bfa] transition-colors hover:text-white"
                >
                  {lang === "is" ? "Skoða ferlið" : "See the process"}
                </a>
                .
              </p>
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6"
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

        <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.geographyTitle}</h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {copy.geographyBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <a
              href={localeHref(lang, "#work")}
              className="text-[#a78bfa] transition-colors hover:text-white"
            >
              {lang === "is" ? "Verk" : "Work"}
            </a>
            <a
              href={localeHref(lang, "#process")}
              className="text-[#a78bfa] transition-colors hover:text-white"
            >
              {lang === "is" ? "Ferli" : "Process"}
            </a>
            <a
              href={localeHref(lang, "#pricing")}
              className="text-[#a78bfa] transition-colors hover:text-white"
            >
              {lang === "is" ? "Verð" : "Pricing"}
            </a>
            <a
              href={localeHref(lang, "#contact")}
              className="text-[#a78bfa] transition-colors hover:text-white"
            >
              {lang === "is" ? "Hafa samband" : "Contact"}
            </a>
          </p>
        </section>

        <section className="py-10 lg:py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.faqTitle}</h2>
            <dl className="mt-8 flex flex-col gap-4">
              {copy.faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6"
                >
                  <dt className="text-lg font-semibold text-zinc-100">{item.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-zinc-400">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-8">
              <h2 className="text-2xl font-bold tracking-tight">{copy.closeTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {copy.closeBody}
              </p>
              <div className="mt-6">
                <Button href={localeHref(lang, "#contact")} showArrow>
                  {copy.ctaPrimary}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
