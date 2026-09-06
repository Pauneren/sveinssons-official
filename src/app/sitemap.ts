import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

const origin = siteUrl.replace(/\/+$/, "");

const icelandicUrl = `${origin}/`;
const englishUrl = `${origin}/en/`;

const languages = {
  is: icelandicUrl,
  en: englishUrl,
  "x-default": englishUrl,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: icelandicUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: englishUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
  ];
}
