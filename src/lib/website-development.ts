import type { PublicLanguage } from "@/lib/language";
import { SERVICE_PAGE_PATH } from "@/lib/language";
import { createPageMetadata, servicePageHreflang } from "@/lib/seo";

export const websiteDevelopmentSeo = {
  is: {
    title: "Vefsíðugerð á Íslandi | Sveinssons",
    description:
      "Sveinssons hannar og þróar sérsniðnar vefsíður fyrir fyrirtæki á Íslandi. Vefhönnun, vefforritun, hraði, SEO og veflausnir byggðar að þínum þörfum.",
  },
  en: {
    title: "Website Development in Iceland | Sveinssons",
    description:
      "Sveinssons designs and develops custom websites for businesses and professionals in Iceland and abroad. Clear web design, reliable development, performance, and SEO — built around your needs.",
  },
} as const;

export function createWebsiteDevelopmentMetadata(lang: PublicLanguage) {
  return createPageMetadata({
    lang,
    path: SERVICE_PAGE_PATH[lang],
    title: websiteDevelopmentSeo[lang].title,
    description: websiteDevelopmentSeo[lang].description,
    languages: servicePageHreflang,
  });
}

export type ServicePageCopy = {
  lang: PublicLanguage;
  eyebrow: string;
  h1: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  customTitle: string;
  customBody: string[];
  combinedTitle: string;
  combinedBody: string[];
  typesTitle: string;
  typesIntro: string;
  types: { title: string; body: string }[];
  qualityTitle: string;
  qualityBody: string[];
  qualityItems: string[];
  processTitle: string;
  processIntro: string;
  geographyTitle: string;
  geographyBody: string[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  closeTitle: string;
  closeBody: string;
};

export const websiteDevelopmentCopy: Record<PublicLanguage, ServicePageCopy> = {
  is: {
    lang: "is",
    eyebrow: "Vefsíðugerð",
    h1: "Vefsíðugerð fyrir fyrirtæki á Íslandi",
    intro:
      "Sveinssons hannar og þróar sérsniðnar vefsíður fyrir fyrirtæki og fagfólk. Við byggjum síður sem styðja vörumerkið þitt, útskýra þjónustuna skýrt og auðvelda fólki að hafa samband — hvort sem þú þarft fyrirtækjavef, lendingarsíðu, vefverslun eða aðra veflausn.",
    ctaPrimary: "Fáðu ókeypis tilboð",
    ctaSecondary: "Skoða verð",
    customTitle: "Sérsniðin vefsíðugerð sem styður fyrirtækið þitt",
    customBody: [
      "Mörg fyrirtæki byrja á tilbúnu sniðmáti og reyna svo að laga það að eigin þörfum. Það getur dugað um stund, en uppbygging, útlit og flæði passa sjaldan alveg við fyrirtækið á bak við síðuna.",
      "Sveinssons vinnur öfugt. Við byrjum á fyrirtækinu þínu: hver þú ert, hverjum þú þjónar og hvað vefsíðan á að gera. Síðan hönnum við og þróum síðuna utan um það. Þú færð ekki almenna heimasíðugerð sem hundruð annarra nota, heldur vef sem er smíðaður fyrir þitt fyrirtæki.",
    ],
    combinedTitle: "Vefhönnun og vefforritun á einum stað",
    combinedBody: [
      "Góð vefsíða þarf bæði skýra hönnun og trausta smíði. Vefhönnun snýst um útlit, merki, lesanleika og hvernig fólk ratar um síðuna. Vefforritun og vefþróun snúast um að byggja síðuna þannig að hún sé hröð, örugg og auðveld í notkun — á síma jafnt sem tölvu.",
      "Ef þú ert að leita að vefhönnuði eða vefforritara á Íslandi er þetta oft sama þörfin: einhver sem getur bæði hannað og smíðað. Sveinssons sameinar vefhönnun og vefforritun í einu ferli, svo útlit, notagildi og tækni þróast saman frá upphafi.",
    ],
    typesTitle: "Hvaða vefsíður byggjum við?",
    typesIntro:
      "Við smíðum vefsíður fyrir fyrirtæki og fagfólk sem þurfa skýra viðveru á netinu — frá einni markvissri síðu upp í stærri veflausn.",
    types: [
      {
        title: "Fyrirtækjavefsíður",
        body: "Faglegar síður sem kynna fyrirtækið, þjónustuna og næsta skref, með skýru flæði í fyrirspurn eða samband.",
      },
      {
        title: "Lendingarsíður",
        body: "Ein markviss síða fyrir þjónustu, herferð eða tilboð — hönnuð til að kynna eitt atriði vel og leiða gestinn áfram.",
      },
      {
        title: "Verkefna- og faglegar síður",
        body: "Portfolio og vefsíður fyrir fagfólk sem þurfa að sýna vinnu, sérþekkingu og traust á skýran hátt.",
      },
      {
        title: "Netverslanir",
        body: "Sérhannaðar vefverslanir með vörum, körfu, afgreiðslu og greiðsluuppsetningu — smíðaðar utan um vörurnar þínar, ekki settar inn í almennt sniðmát.",
      },
      {
        title: "Sérsniðnar veflausnir",
        body: "Tvítyngdar síður, bókun, samþættingar og önnur sérverkefni eru metin eftir umfangi þegar við skilgreinum þarfirnar saman.",
      },
    ],
    qualityTitle: "Hraði, SEO og góð notendaupplifun",
    qualityBody: [
      "Tæknileg gæði eru hluti af vefsíðugerðinni frá byrjun, ekki viðbót sem er sett inn áður en síðan er birt. Það þýðir skýra uppbyggingu, hraða hleðslu og síðu sem er auðveldari að nota — og auðveldari fyrir leitarvélar að lesa.",
      "Við lofum ekki ákveðinni stöðu á Google. Það sem við gerum er að byggja vefinn þannig að hann sé tilbúinn til að vera fundinn, skilinn og notaður.",
    ],
    qualityItems: [
      "Svörunarhæf hönnun sem virkar vel í síma",
      "Hraði og létt uppbygging",
      "Merkingarbær uppbygging sem leitarvélar geta lesið",
      "Grunnuppsetning á lýsigögnum",
      "Aðgengi og skýrt flæði um síðuna",
    ],
    processTitle: "Frá hugmynd að tilbúinni vefsíðu",
    processIntro:
      "Sama ferli og á forsíðunni: við byrjum á að skilja fyrirtækið, hönnum stefnuna, þróum síðuna og hjálpum þér við birtingu.",
    geographyTitle: "Vefsíðugerð á Íslandi — og fyrir viðskiptavini erlendis",
    geographyBody: [
      "Sveinssons er staðsett á Íslandi og vinnur á íslensku og ensku. Við smíðum vefsíður fyrir fyrirtæki á Íslandi og fyrir viðskiptavini erlendis.",
      "Ef þú vilt sjá dæmi um vinnu, kynna þér ferlið eða byrja samtal er næsta skref einfalt: skoðaðu verkin, ferlið og verðin, eða sendu stutta fyrirspurn.",
    ],
    faqTitle: "Algengar spurningar",
    faqs: [
      {
        question: "Hvað kostar vefsíðugerð?",
        answer:
          "Byrjunarverð fer eftir tegund verkefnis. Lendingarsíður byrja á 149.000 kr., fyrirtækjavefsíður á 289.000 kr. og netverslanir á 489.000 kr. Lokaverð fer alltaf eftir umfangi og er staðfest eftir að við skilgreinum þarfirnar saman.",
      },
      {
        question: "Hvað tekur langan tíma að gera vefsíðu?",
        answer:
          "Lendingarsíða tekur yfirleitt 1–2 vikur. Fyrirtækjavefsíða er venjulega 3–5 vikur. Netverslun getur tekið 4–8 vikur eftir flækjustigi. Tímalínan hefst þegar við höfum efnið þitt og fyrstu lýsinguna í höndunum.",
      },
      {
        question: "Hver er munurinn á vefhönnuði og vefforritara?",
        answer:
          "Vefhönnuður vinnur að útliti, merki og notendaupplifun. Vefforritari smíðar síðuna, sér um virkni, hraða og tæknilega uppbyggingu. Sveinssons sameinar hvort tveggja: hönnun og þróun í einu ferli, svo þú þurfir ekki að leita að hvoru tveggja sér.",
      },
      {
        question: "Get ég fengið vefsíðuna bæði á íslensku og ensku?",
        answer:
          "Já. Tvítyngdar vefsíður eru í boði, með eðlilegu tungumálavali. Þetta er hluti af umfangi verkefnisins og verðlagt eftir því.",
      },
      {
        question: "Getur Sveinssons séð um vefverslun?",
        answer:
          "Já. Við hönnum og smíðum sérsniðnar netverslanir með vörulistum, körfu, afgreiðslu og greiðsluuppsetningu. Verslunin er byggð utan um vörurnar þínar og vörumerkið, ekki sett inn í almennt sniðmát.",
      },
      {
        question: "Vinnið þið bara með fyrirtækjum á Íslandi?",
        answer:
          "Nei. Sveinssons er staðsett á Íslandi og vinnur á íslensku og ensku, en við vinnum jafnt með fyrirtækjum hér heima og viðskiptavinum erlendis.",
      },
    ],
    closeTitle: "Viltu ræða vefsíðuna?",
    closeBody:
      "Sendu stutta lýsingu á fyrirtækinu og því sem þú vilt byggja. Við hjálpum til við að skýra umfangið áður en lokatilboð er gefið.",
  },
  en: {
    lang: "en",
    eyebrow: "Website development",
    h1: "Website development for businesses in Iceland",
    intro:
      "Sveinssons designs and develops custom websites for businesses and professionals. We build sites that support your brand, explain what you do clearly, and make it easy for people to get in touch — whether you need a business website, landing page, online store, or another web solution.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "See pricing",
    customTitle: "Custom website development that supports your business",
    customBody: [
      "Many businesses start with a ready-made template and then try to force it around their own needs. That can work for a while, but the structure, look, and flow rarely fit the company behind the site.",
      "Sveinssons works the other way around. We start with your business: who you are, who you serve, and what the website needs to do. Then we design and develop the site around that. You don’t get a generic layout used by hundreds of other companies. You get a website built for yours.",
    ],
    combinedTitle: "Web design and development in one place",
    combinedBody: [
      "A useful website needs both clear design and solid engineering. Design covers look, brand, readability, and how people move through the pages. Development is how the site is built: speed, reliability, and a layout that works on a phone as well as a desktop.",
      "If you are looking for a web designer or a web developer in Iceland, that is often the same need: someone who can shape the experience and then actually build it. Sveinssons combines design and development in one process, so the visual direction and the technical build move forward together.",
    ],
    typesTitle: "What kinds of websites do we build?",
    typesIntro:
      "We build websites for businesses and professionals who need a clear presence online — from a focused one-page site to a larger custom solution.",
    types: [
      {
        title: "Business websites",
        body: "Professional sites that introduce the company, explain the offer, and guide visitors toward an enquiry or conversation.",
      },
      {
        title: "Landing pages",
        body: "A focused custom page for a service, campaign, or offer — designed to present one thing clearly and lead the visitor to the next step.",
      },
      {
        title: "Portfolio and professional sites",
        body: "Sites for specialists and studios that need to show their work, expertise, and credibility without clutter.",
      },
      {
        title: "Online stores",
        body: "Custom storefronts with products, cart, checkout, and payment setup — built around your catalogue, not dropped into a generic theme.",
      },
      {
        title: "Custom web solutions",
        body: "Bilingual sites, booking, integrations, and larger projects are quoted according to scope once we understand what you need.",
      },
    ],
    qualityTitle: "Speed, SEO, and a clear user experience",
    qualityBody: [
      "Technical quality is part of the build from the start, not a last-minute add-on. That means a clear structure, fast loading, and a site that is easier to use — and easier for search engines to understand.",
      "We do not promise a specific Google ranking. What we do is build the site so it is ready to be found, understood, and used.",
    ],
    qualityItems: [
      "Responsive design that works well on mobile",
      "Performance and a lightweight build",
      "Semantic structure that search engines can read",
      "Crawlability and a basic metadata setup",
      "Accessibility and clear navigation",
    ],
    processTitle: "From idea to a finished website",
    processIntro:
      "The same process as on the homepage: we learn the business, design the direction, develop the site, and help you launch.",
    geographyTitle: "Website development in Iceland — and for clients abroad",
    geographyBody: [
      "Sveinssons is based in Iceland and works in Icelandic and English. We build websites for businesses in Iceland and for clients abroad.",
      "If you want to see recent work, understand the process, or start a conversation, the next step is simple: look through the work, process, and pricing, or send a short enquiry.",
    ],
    faqTitle: "Common questions",
    faqs: [
      {
        question: "How much does website development cost?",
        answer:
          "Starting prices depend on the type of project. Landing pages start from 149,000 ISK, business websites from 289,000 ISK, and online stores from 489,000 ISK. The final price always depends on scope and is confirmed after we define the project together.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A landing page typically takes 1–2 weeks. A business website is usually 3–5 weeks. Online stores can take 4–8 weeks depending on complexity. Timelines start once we have your content and initial brief.",
      },
      {
        question: "What’s the difference between a web designer and a web developer?",
        answer:
          "A web designer works on look, brand, and user experience. A web developer builds the site — the functionality, performance, and technical structure. Sveinssons combines both: design and development in one process, so you do not have to hire each role separately.",
      },
      {
        question: "Can I have the website in both Icelandic and English?",
        answer:
          "Yes. Bilingual websites are available, with a language toggle that feels natural. This is part of the project scope and quoted accordingly.",
      },
      {
        question: "Can Sveinssons build an online store?",
        answer:
          "Yes. We design and build custom storefronts with product listings, cart, checkout, and payment setup. Each store is built for your products and brand, not placed inside a generic template.",
      },
      {
        question: "Do you only work with businesses in Iceland?",
        answer:
          "No. Sveinssons is based in Iceland and works in Icelandic and English, with clients in Iceland and abroad.",
      },
    ],
    closeTitle: "Want to talk about your website?",
    closeBody:
      "Send a short note about your business and what you want to build. We’ll help clarify the scope before giving a final quote.",
  },
};
