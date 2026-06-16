"use client";

import { useEffect, useState } from "react";

import { LogoMark } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import type { Translations } from "@/lib/translations";

const navItemsConfig: { key: keyof Translations["nav"]; href: string; active?: boolean }[] = [
  { key: "home", href: "#", active: true },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "work", href: "#work" },
  { key: "pricing", href: "#pricing" },
  { key: "contact", href: "#contact" },
];

const barBase =
  "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const navItems = navItemsConfig.map((item) => ({ ...item, label: t.nav[item.key] }));

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#050508]/80 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="relative z-10 flex shrink-0 items-center gap-3">
          <LogoMark className="h-10 w-10" />
          <span className="text-lg font-bold tracking-tight">Sveinssons</span>
        </a>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={
                item.active
                  ? "text-sm font-medium text-[#a78bfa]"
                  : "text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-3">
          <div className="hidden xl:block">
            <LanguageToggle />
          </div>
          <div className="hidden xl:block">
            <Button href="#contact" showArrow>
              {t.nav.cta}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 text-zinc-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] xl:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden className="relative block h-4 w-5">
              <span
                className={`${barBase} ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`${barBase} top-1/2 -translate-y-1/2 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`${barBase} ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`overflow-hidden border-t backdrop-blur-md transition-all duration-300 ease-out motion-reduce:transition-none xl:hidden ${
          open
            ? "visible max-h-112 translate-y-0 border-white/6 bg-[#050508]/95 opacity-100"
            : "invisible max-h-0 -translate-y-1 border-transparent bg-[#050508]/95 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={
                item.active
                  ? "rounded-lg px-3 py-3 text-base font-medium text-[#a78bfa] transition-colors hover:bg-white/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
                  : "rounded-lg px-3 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
              }
            >
              {item.label}
            </a>
          ))}
          <div className="px-3 py-3">
            <LanguageToggle />
          </div>
          <Button
            href="#contact"
            showArrow
            onClick={() => setOpen(false)}
            className="mt-3 w-full"
          >
            {t.nav.cta}
          </Button>
        </nav>
      </div>
    </header>
  );
}
