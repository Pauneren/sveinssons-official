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
  const socialImage = icelandic
    ? "/images/hero-devices-is-aligned.png"
    : "/images/hero-devices-en.png";
  const socialImageAlt = icelandic
    ? "Vefsíða Sveinssons sýnd á fartölvu og snjallsíma"
    : "Sveinssons website shown on a laptop and smartphone";

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
      images: [{ url: socialImage, alt: socialImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [socialImage],
    },
  };
}

export const servicePageHreflang = {
  is: "/vefsidugerd/",
  en: "/en/website-development/",
  "x-default": "/en/website-development/",
} as const;

export function createPageMetadata({
  lang,
  path,
  title,
  description,
  languages,
  image,
  imageAlt,
}: {
  lang: PublicLanguage;
  path: string;
  title: string;
  description: string;
  languages: { is: string; en: string; "x-default": string };
  image?: string;
  imageAlt?: string;
}): Metadata {
  const icelandic = lang === "is";
  const socialImage =
    image ??
    (icelandic ? "/images/hero-devices-is-aligned.png" : "/images/hero-devices-en.png");
  const socialImageAlt =
    imageAlt ??
    (icelandic
      ? "Vefsíða Sveinssons sýnd á fartölvu og snjallsíma"
      : "Sveinssons website shown on a laptop and smartphone");

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      locale: icelandic ? "is_IS" : "en_US",
      alternateLocale: icelandic ? ["en_US"] : ["is_IS"],
      images: [{ url: socialImage, alt: socialImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
