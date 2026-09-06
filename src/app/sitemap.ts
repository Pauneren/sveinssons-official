import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

const origin = siteUrl.replace(/\/+$/, "");

const icelandicUrl = `${origin}/`;
const englishUrl = `${origin}/en/`;
const icelandicServiceUrl = `${origin}/vefsidugerd/`;
const englishServiceUrl = `${origin}/en/website-development/`;

const homepageLanguages = {
  is: icelandicUrl,
  en: englishUrl,
  "x-default": englishUrl,
};

const serviceLanguages = {
  is: icelandicServiceUrl,
  en: englishServiceUrl,
  "x-default": englishServiceUrl,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: icelandicUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: homepageLanguages },
    },
    {
      url: englishUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: homepageLanguages },
    },
    {
      url: icelandicServiceUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: serviceLanguages },
    },
    {
      url: englishServiceUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: serviceLanguages },
    },
  ];
}
