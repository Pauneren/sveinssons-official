import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button, EyebrowBadge } from "@/components/ui/Button";
import { LanguageSuggestion } from "@/components/ui/LanguageSuggestion";
import { localeHref, PROJECT_PAGE_PATH, SERVICE_PAGE_PATH } from "@/lib/language";
import type { ProjectCaseStudyCopy } from "@/lib/projects";
import { projectSeo } from "@/lib/projects";
import { siteConfig, siteUrl } from "@/lib/site";

export function ProjectCaseStudyPage({ copy }: { copy: ProjectCaseStudyCopy }) {
  const { lang, slug } = copy;
  const origin = siteUrl.replace(/\/+$/, "");
  const pageUrl = `${origin}${PROJECT_PAGE_PATH[slug][lang]}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: copy.h1,
    description: projectSeo[slug][lang].description,
    url: pageUrl,
    image: `${origin}${copy.image}`,
    creator: {
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
              <Button href={copy.liveUrl} showArrow>
                {copy.liveLabel}
              </Button>
              <Button href={localeHref(lang, "#work")} variant="secondary">
                {copy.backToWork}
              </Button>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.projectTitle}</h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {copy.projectBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.designTitle}</h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {copy.designBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.developmentTitle}</h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {copy.developmentBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="py-10 lg:py-12">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.resultTitle}</h2>
            <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {copy.resultBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0f]">
              <Image
                src={copy.image}
                alt={copy.imageAlt}
                fill
                sizes="(min-width: 768px) 48rem, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5">
              <a
                href={copy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#a78bfa] transition-colors hover:text-white"
              >
                {copy.liveLabel}
              </a>
            </p>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-8">
              <h2 className="text-2xl font-bold tracking-tight">{copy.closeTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {copy.closeBody}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button href={localeHref(lang, "#contact")} showArrow>
                  {copy.ctaPrimary}
                </Button>
                <Button href={SERVICE_PAGE_PATH[lang]} variant="secondary">
                  {copy.serviceLabel}
                </Button>
              </div>
              <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                <a
                  href={localeHref(lang, "#work")}
                  className="text-[#a78bfa] transition-colors hover:text-white"
                >
                  {copy.backToWork}
                </a>
                <a
                  href={localeHref(lang, "#pricing")}
                  className="text-[#a78bfa] transition-colors hover:text-white"
                >
                  {copy.pricingLabel}
                </a>
                <a
                  href={localeHref(lang, "#contact")}
                  className="text-[#a78bfa] transition-colors hover:text-white"
                >
                  {copy.contactLabel}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
