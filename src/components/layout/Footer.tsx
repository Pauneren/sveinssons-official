"use client";

import { LogoMark } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#050508]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <a href="#" className="flex items-center gap-3">
              <LogoMark className="h-9 w-9" />
              <span className="text-lg font-bold tracking-tight">Sveinssons</span>
            </a>
            <p className="text-sm leading-relaxed text-zinc-400">{t.footer.description}</p>
            <a
              href="#contact"
              className="text-sm font-medium text-[#a78bfa] transition-colors hover:text-[#c4b5fd]"
            >
              {t.nav.contact}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              {t.footer.quickLinks}
            </span>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-6">
          <p className="text-xs text-white/45">
            © {year} Sveinssons. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
