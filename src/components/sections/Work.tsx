"use client";

import Image from "next/image";

import { EyebrowBadge } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const placeholderCount = 3;

export function Work() {
  const { t } = useLanguage();
  const comingSoonCount = Math.max(0, placeholderCount - t.work.projects.length);

  return (
    <section id="work" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <EyebrowBadge>{t.work.eyebrow}</EyebrowBadge>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {t.work.titleLine1}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.work.description}
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {t.work.projects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#050508]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{project.description}</p>
              {project.tags ? (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-medium text-[#a78bfa] transition-colors hover:text-[#c4b5fd]"
                >
                  {t.work.liveSiteLabel}
                </a>
              ) : null}
            </li>
          ))}

          {Array.from({ length: comingSoonCount }).map((_, index) => (
            <li
              key={`coming-soon-${index}`}
              className="flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7"
            >
              <div className="aspect-video w-full rounded-xl border border-white/[0.06] bg-[#050508]" />
              <h3 className="text-lg font-semibold text-zinc-100">{t.work.cardTitle}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {t.work.cardDescription}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
