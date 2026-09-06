import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

const origin = siteUrl.replace(/\/+$/, "");

const icelandicUrl = `${origin}/`;
const englishUrl = `${origin}/en/`;
const icelandicServiceUrl = `${origin}/vefsidugerd/`;
const englishServiceUrl = `${origin}/en/website-development/`;
const icelandicJulietaUrl = `${origin}/verk/julieta-banco/`;
const englishJulietaUrl = `${origin}/en/work/julieta-banco/`;
const icelandicNicolasUrl = `${origin}/verk/nicolas-capdevila/`;
const englishNicolasUrl = `${origin}/en/work/nicolas-capdevila/`;

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

const julietaLanguages = {
  is: icelandicJulietaUrl,
  en: englishJulietaUrl,
  "x-default": englishJulietaUrl,
};

const nicolasLanguages = {
  is: icelandicNicolasUrl,
  en: englishNicolasUrl,
  "x-default": englishNicolasUrl,
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
    {
      url: icelandicJulietaUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: julietaLanguages },
    },
    {
      url: englishJulietaUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: julietaLanguages },
    },
    {
      url: icelandicNicolasUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: nicolasLanguages },
    },
    {
      url: englishNicolasUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: nicolasLanguages },
    },
  ];
}
