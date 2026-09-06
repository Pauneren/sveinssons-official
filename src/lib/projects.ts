import type { ProjectSlug, PublicLanguage } from "@/lib/language";
import { PROJECT_PAGE_PATH } from "@/lib/language";
import { createPageMetadata } from "@/lib/seo";

export type ProjectCaseStudyCopy = {
  slug: ProjectSlug;
  lang: PublicLanguage;
  eyebrow: string;
  h1: string;
  intro: string;
  projectTitle: string;
  projectBody: string[];
  designTitle: string;
  designBody: string[];
  developmentTitle: string;
  developmentBody: string[];
  resultTitle: string;
  resultBody: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  liveLabel: string;
  backToWork: string;
  serviceLabel: string;
  pricingLabel: string;
  contactLabel: string;
  closeTitle: string;
  closeBody: string;
  ctaPrimary: string;
};

export const projectFacts = {
  "julieta-banco": {
    title: "Julieta Banco — Psicología",
    liveUrl: "https://travesiainternapsicologia.com",
    image: "/images/website1.png",
  },
  "nicolas-capdevila": {
    title: "Dr. Nicolás Capdevila",
    liveUrl: "https://drnicolascapdevila.netlify.app/",
    image: "/images/website2.png",
  },
} as const;

export const projectSeo = {
  "julieta-banco": {
    is: {
      title: "Vefsíðugerð fyrir Julieta Banco — Psicología | Sveinssons",
      description:
        "Sérsniðin vefsíða fyrir sálfræðistofu Julieta Banco. Vefhönnun og vefþróun á spænsku, með skýrri kynningu á þjónustu fyrir unglinga, fullorðna og pör.",
      imageAlt: "Skjáskot af vefsíðunni Julieta Banco — Psicología",
    },
    en: {
      title: "Website for Julieta Banco — Psicología | Sveinssons",
      description:
        "A custom website for the Julieta Banco psychology practice. Designed and developed in Spanish, presenting services for adolescents, adults, and couples — in person and online.",
      imageAlt: "Screenshot of the Julieta Banco — Psicología website",
    },
  },
  "nicolas-capdevila": {
    is: {
      title: "Vefsíðugerð fyrir Dr. Nicolás Capdevila | Sveinssons",
      description:
        "Sérsniðin vefsíða fyrir Dr. Nicolás Capdevila. Vefhönnun og vefþróun fyrir lækni í samþættri læknisfræði og verkjameðferð, með skýrri leið að fyrirspurn um tíma.",
      imageAlt: "Skjáskot af vefsíðunni Dr. Nicolás Capdevila",
    },
    en: {
      title: "Website for Dr. Nicolás Capdevila | Sveinssons",
      description:
        "A custom website for Dr. Nicolás Capdevila. Designed to present integrative medicine and pain-management services clearly and guide visitors toward an appointment enquiry.",
      imageAlt: "Screenshot of the Dr. Nicolás Capdevila website",
    },
  },
} as const;

export function createProjectMetadata(slug: ProjectSlug, lang: PublicLanguage) {
  const seo = projectSeo[slug][lang];
  const path = PROJECT_PAGE_PATH[slug][lang];

  return createPageMetadata({
    lang,
    path,
    title: seo.title,
    description: seo.description,
    languages: {
      is: PROJECT_PAGE_PATH[slug].is,
      en: PROJECT_PAGE_PATH[slug].en,
      "x-default": PROJECT_PAGE_PATH[slug].en,
    },
    image: projectFacts[slug].image,
    imageAlt: seo.imageAlt,
  });
}

const sharedUi = {
  is: {
    eyebrow: "Verk",
    projectTitle: "Verkefnið",
    designTitle: "Hönnun og upplifun",
    developmentTitle: "Vefþróun",
    resultTitle: "Afraksturinn",
    liveLabel: "Skoða lifandi síðu",
    backToWork: "Til baka í verk",
    serviceLabel: "Vefsíðugerð",
    pricingLabel: "Verð",
    contactLabel: "Hafa samband",
    closeTitle: "Viltu svipaða vefsíðu?",
    closeBody:
      "Sveinssons hannar og þróar sérsniðnar vefsíður. Sendu stutta fyrirspurn og við ræðum næsta skref.",
    ctaPrimary: "Fáðu ókeypis tilboð",
  },
  en: {
    eyebrow: "Work",
    projectTitle: "The project",
    designTitle: "Design and experience",
    developmentTitle: "Development",
    resultTitle: "The result",
    liveLabel: "View live site",
    backToWork: "Back to work",
    serviceLabel: "Website development",
    pricingLabel: "Pricing",
    contactLabel: "Contact",
    closeTitle: "Want a similar website?",
    closeBody:
      "Sveinssons designs and develops custom websites. Send a short enquiry and we’ll discuss the next step.",
    ctaPrimary: "Get a Free Quote",
  },
} as const;

export const projectCopy: Record<ProjectSlug, Record<PublicLanguage, ProjectCaseStudyCopy>> = {
  "julieta-banco": {
    is: {
      slug: "julieta-banco",
      lang: "is",
      ...sharedUi.is,
      h1: "Julieta Banco — Psicología",
      intro:
        "Vefsíða fyrir sálfræðistofu Julieta Banco. Síðan er á spænsku og kynnir þjónustu fyrir unglinga, fullorðna og pör, bæði í eigin persónu og á netinu.",
      projectBody: [
        "Sveinssons hannaði og þróaði sérsniðna vefsíðu fyrir stofuna. Verkefnið gekk út á að kynna þjónustuna skýrt og gefa gestum einfaldan aðgang að því sem stofan býður.",
        "Þetta er dæmi um vefsíðugerð fyrir fagfólk: ein síða, eitt vörumerki, og uppbygging sem styður raunverulega þjónustu fremur en almennt sniðmát.",
      ],
      designBody: [
        "Vefhönnunin notar hlýja litaskiptahönnun og skýra, faglega framsetningu. Efnið er á spænsku og uppbyggingin leiðir lesandann frá kynningu á stofunni yfir í þjónustu og samband.",
        "Síðan er skalanleg, þannig að hún virkar á síma jafnt sem tölvu. Áherslan er á læsileika, rólegt yfirbragð og skýrt flæði — án þess að yfirhlaða síðuna.",
      ],
      developmentBody: [
        "Vefþróunin fólst í að smíða sérsniðna, svörunarhæfa vefsíðu sem heldur utan um hönnunina, tungumálið og efnisflæðið.",
      ],
      resultBody: [
        "Fullunnin vefsíða er aðgengileg á netinu. Hún kynnir stofuna, þjónustuna og hvernig hægt er að hafa samband — á spænsku, með hlýju sjónrænu yfirbragði.",
      ],
      image: projectFacts["julieta-banco"].image,
      imageAlt: projectSeo["julieta-banco"].is.imageAlt,
      liveUrl: projectFacts["julieta-banco"].liveUrl,
    },
    en: {
      slug: "julieta-banco",
      lang: "en",
      ...sharedUi.en,
      h1: "Julieta Banco — Psicología",
      intro:
        "A website for the Julieta Banco psychology practice. The site is in Spanish and presents services for adolescents, adults, and couples, both in person and online.",
      projectBody: [
        "Sveinssons designed and developed a custom website for the practice. The work was to present the offer clearly and give visitors a simple way to understand the services.",
        "This is custom website design for a professional practice: one brand, one structure, built around the real service rather than a generic template.",
      ],
      designBody: [
        "The design uses a warm gradient and a calm, professional presentation. The content is in Spanish, and the layout moves from the introduction of the practice to the services and a way to get in touch.",
        "The site is responsive, so it works on a phone as well as a desktop. The emphasis is on readability, a quiet visual tone, and a clear path through the page.",
      ],
      developmentBody: [
        "Development meant building a custom, responsive website that carries the design, the language, and the content structure.",
      ],
      resultBody: [
        "The finished website is live. It presents the practice, the services, and how to get in touch — in Spanish, with a warm visual treatment.",
      ],
      image: projectFacts["julieta-banco"].image,
      imageAlt: projectSeo["julieta-banco"].en.imageAlt,
      liveUrl: projectFacts["julieta-banco"].liveUrl,
    },
  },
  "nicolas-capdevila": {
    is: {
      slug: "nicolas-capdevila",
      lang: "is",
      ...sharedUi.is,
      h1: "Dr. Nicolás Capdevila",
      intro:
        "Vefsíða fyrir Dr. Nicolás Capdevila, lækni í samþættri læknisfræði og verkjameðferð. Síðan er á spænsku og hönnuð til að kynna þjónustu skýrt.",
      projectBody: [
        "Sveinssons hannaði og þróaði sérsniðna vefsíðu fyrir læknastofuna. Verkefnið gekk út á að setja þjónustuna fram á skýran hátt og leiða gesti að fyrirspurn um tíma.",
        "Þetta er vefsíðugerð fyrir faglega læknisþjónustu: róleg framsetning, skýr uppbygging og einföld leið áfram.",
      ],
      designBody: [
        "Vefhönnunin er fagleg og læsileg, með skýrri uppbyggingu sem heldur athyglinni á þjónustunni og næsta skrefi. Efnið er á spænsku.",
        "Síðan er skalanleg og hönnuð til að virka vel á síma jafnt sem tölvu. Áherslan er á skýrleika og traust yfirbragð, ekki á flókin áhrif.",
      ],
      developmentBody: [
        "Vefþróunin fólst í að smíða sérsniðna, svörunarhæfa vefsíðu sem styður hönnunina og leiðir gestinn að fyrirspurn.",
      ],
      resultBody: [
        "Fullunnin vefsíða er aðgengileg á netinu. Hún kynnir þjónustuna skýrt og gefur gestum leið að fyrirspurn um tíma.",
      ],
      image: projectFacts["nicolas-capdevila"].image,
      imageAlt: projectSeo["nicolas-capdevila"].is.imageAlt,
      liveUrl: projectFacts["nicolas-capdevila"].liveUrl,
    },
    en: {
      slug: "nicolas-capdevila",
      lang: "en",
      ...sharedUi.en,
      h1: "Dr. Nicolás Capdevila",
      intro:
        "A website for Dr. Nicolás Capdevila, a doctor in integrative medicine and pain management. The site is in Spanish and was designed to present the services clearly.",
      projectBody: [
        "Sveinssons designed and developed a custom website for the practice. The work was to present the services clearly and guide visitors toward an appointment enquiry.",
        "This is custom website design for a medical practice: a calm presentation, a clear structure, and a simple next step.",
      ],
      designBody: [
        "The design is professional and easy to read, with a structure that keeps attention on the services and the enquiry path. The content is in Spanish.",
        "The site is responsive and built to work on a phone as well as a desktop. The emphasis is on clarity and a trustworthy presentation, not on decorative complexity.",
      ],
      developmentBody: [
        "Development meant building a custom, responsive website that supports the design and leads the visitor toward an enquiry.",
      ],
      resultBody: [
        "The finished website is live. It presents the services clearly and gives visitors a path to an appointment enquiry.",
      ],
      image: projectFacts["nicolas-capdevila"].image,
      imageAlt: projectSeo["nicolas-capdevila"].en.imageAlt,
      liveUrl: projectFacts["nicolas-capdevila"].liveUrl,
    },
  },
};
