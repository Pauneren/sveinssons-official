import type { Metadata } from "next";

import { localePath, type PublicLanguage } from "@/lib/language";
import { localeSeo, siteConfig, siteUrl } from "@/lib/site";

export const hreflangLanguages = {
  is: "/",
  en: "/en/",
  "x-default": "/en/",
} as const;

export function createLocaleMetadata(lang: PublicLanguage): Metadata {
  const path = localePath(lang);
  const copy = localeSeo[lang];
  const icelandic = lang === "is";

  return {
    metadataBase: new URL(siteUrl),
    title: icelandic
      ? {
          default: copy.title,
          template: "%s | Sveinssons",
        }
      : { absolute: copy.title },
    description: copy.description,
    keywords: [
      "web design Iceland",
      "web development Iceland",
      "custom websites",
      "e-commerce",
      "online store",
      "landing pages",
      "portfolio websites",
      "website maintenance",
      "SEO",
      "Sveinssons",
    ],
    alternates: {
      canonical: path,
      languages: hreflangLanguages,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: copy.title,
      description: copy.description,
      url: path,
      locale: icelandic ? "is_IS" : "en_US",
      alternateLocale: icelandic ? ["en_US"] : ["is_IS"],
      images: [{ url: "/images/hero-devices.png", alt: "Sveinssons custom websites" }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/images/hero-devices.png"],
    },
  };
}
