// Production URL comes from NEXT_PUBLIC_SITE_URL. The localhost fallback is for
// local development only — no production domain is hardcoded here.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Sveinssons",
  title: "Sveinssons | Custom Websites. Powerful Results.",
  description:
    "Sveinssons builds modern websites, e-commerce sites, portfolios, landing pages, maintenance plans, and SEO improvements for small businesses and professionals.",
} as const;

export const localeSeo = {
  is: {
    title: "Vefsíðugerð og vefhönnun á Íslandi | Sveinssons",
    description:
      "Sveinssons býður vefsíðugerð, vefhönnun og vefforritun á Íslandi fyrir fyrirtæki og fagfólk. Sérsniðnar, hraðar og SEO-vænar vefsíður og vefverslanir.",
  },
  en: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
} as const;
