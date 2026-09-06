"use client";

import { useState, useSyncExternalStore } from "react";

import { useLanguage } from "@/context/LanguageContext";
import {
  localeHref,
  type PublicLanguage,
  readLanguageCookie,
  writeLanguageCookie,
} from "@/lib/language";

const HINT_STORAGE_KEY = "sveinssons-language-hint-dismissed";

const copy: Record<
  PublicLanguage,
  { message: string; action: string; dismiss: string }
> = {
  en: {
    message: "View this site in English?",
    action: "English",
    dismiss: "Not now",
  },
  is: {
    message: "Skoða þessa síðu á íslensku?",
    action: "Íslenska",
    dismiss: "Ekki núna",
  },
};

function browserLanguagePreference(): PublicLanguage {
  const preferred = (navigator.language || navigator.languages?.[0] || "").toLowerCase();
  return preferred.startsWith("is") ? "is" : "en";
}

function preferredLanguage(countryPreference: PublicLanguage | null): PublicLanguage {
  if (countryPreference) return countryPreference;
  if (typeof navigator === "undefined") return "en";
  return browserLanguagePreference();
}

function subscribeHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

export function LanguageSuggestion({
  countryPreference,
}: {
  countryPreference: PublicLanguage | null;
}) {
  const { lang } = useLanguage();
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const hash = useSyncExternalStore(subscribeHash, () => window.location.hash, () => "");
  const [dismissed, setDismissed] = useState(false);

  let target: PublicLanguage | null = null;
  if (isClient && !dismissed && !readLanguageCookie()) {
    const preferred = preferredLanguage(countryPreference);
    const next = preferred === lang ? null : preferred;
    if (next && !sessionStorage.getItem(`${HINT_STORAGE_KEY}:${next}`)) {
      target = next;
    }
  }

  if (!target) return null;

  const text = copy[target];

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-4"
      role="region"
      aria-label={text.message}
      aria-live="polite"
    >
      <div className="pointer-events-auto flex max-w-[min(28rem,calc(100vw-2rem))] flex-wrap items-center justify-end gap-2 rounded-2xl border border-white/10 bg-[#050508]/95 px-4 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:flex-nowrap sm:rounded-full sm:py-2">
        <p className="mr-auto min-w-0 text-sm text-zinc-200">{text.message}</p>
        <a
          href={localeHref(target, hash)}
          onClick={() => writeLanguageCookie(target)}
          className="shrink-0 rounded-full bg-[#7c3aed] px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-[#6d28d9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
        >
          {text.action}
        </a>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem(`${HINT_STORAGE_KEY}:${target}`, "1");
            setDismissed(true);
          }}
          className="shrink-0 rounded-full px-2 py-1 text-xs font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
        >
          {text.dismiss}
        </button>
      </div>
    </div>
  );
}
