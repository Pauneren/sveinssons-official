export type Language = "en" | "es" | "is";

// English is the canonical shape. Spanish and Icelandic must match it.
// Brand names (Sveinssons), prices (ISK amounts), and example values
// (you@example.com, +354 ...) are intentionally left untranslated.
const en = {
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    process: "Process",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Get a Free Quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "We build digital experiences",
    titleLine1: "Custom Websites.",
    titleHighlight: "Powerful",
    titleSuffix: " Results.",
    description:
      "Sveinssons designs and develops custom websites and online stores built around your business — never generic, one-size-fits-all templates.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "View Our Work",
    features: [
      { title: "Fast Delivery", subtitle: "Clear timelines and reliable delivery" },
      { title: "Custom Built", subtitle: "Designed specifically for your brand" },
      { title: "Mobile First", subtitle: "Looks perfect anywhere" },
    ],
  },
  serviceStrip: {
    heading: "DIGITAL SERVICES FOR MODERN BUSINESSES",
    items: ["CUSTOM WEBSITES", "ONLINE STORES", "PORTFOLIOS", "LANDING PAGES", "MAINTENANCE"],
  },
  services: {
    eyebrow: "Our services",
    titleLine1: "Complete Web Solutions",
    titleLine2Prefix: "for ",
    titleHighlight: "Your Business",
    description:
      "Every website is thoughtfully designed and developed for the individual business, with a unique structure, visual identity, and user experience.",
    items: [
      {
        title: "Custom Website Design",
        description: "Beautiful, modern designs tailored to your brand.",
      },
      {
        title: "Website Development",
        description:
          "Fast, secure, and scalable websites built with the latest technologies.",
      },
      {
        title: "E-Commerce Solutions",
        description: "Online stores that convert visitors into loyal customers.",
      },
    ],
  },
  work: {
    eyebrow: "Our work",
    titleLine1: "Recent Work,",
    titleHighlight: "Crafted with Care",
    description:
      "A selection of projects is on the way. Check back soon to see what we've been building.",
    cardTitle: "Coming Soon",
    cardDescription: "Project details coming soon.",
    liveSiteLabel: "View live site",
    projects: [
      {
        title: "Julieta Banco — Psicología",
        description:
          "Psychology practice website. Warm gradient design, Spanish language, services for adolescents, adults and couples, in-person and online.",
        liveUrl: "https://travesiainternapsicologia.com",
      },
    ],
  },
  process: {
    eyebrow: "Our process",
    titleLine1: "From Idea to Launch,",
    titleHighlight: "Built Around You",
    description:
      "Every project begins with understanding your business. We design and develop a digital experience tailored to your goals, your customers, and your brand.",
    steps: [
      {
        title: "Discover",
        description:
          "We learn about your business, audience, goals, and what your website needs to achieve.",
      },
      {
        title: "Design",
        description:
          "We create a tailored visual direction and user experience that reflects your brand.",
      },
      {
        title: "Develop",
        description:
          "We build a fast, responsive website or online store with clean, reliable technology.",
      },
      {
        title: "Launch & Support",
        description:
          "We prepare your site for launch and help you keep it updated, secure, and effective.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    titleLine1: "Flexible Packages for",
    titleHighlight: "Custom-Built Websites",
    description:
      "Every website is tailored to the business behind it. These starting prices give you a clear idea of investment before we define the final scope together.",
    badgePopular: "MOST POPULAR",
    cardCta: "Request a Quote",
    plans: [
      {
        title: "Landing Page",
        description:
          "A focused custom page designed to introduce your business, service, or campaign clearly and professionally.",
        features: [
          "Custom one-page design",
          "Responsive mobile-first build",
          "Contact or enquiry call-to-action",
          "Basic SEO setup",
          "One revision round",
          "Launch support",
        ],
      },
      {
        title: "Business Website",
        description:
          "A professional custom website for a business that needs a strong online presence and clear enquiry flow.",
        features: [
          "Up to 5 core pages",
          "Custom design for your brand",
          "Responsive development",
          "Contact/enquiry form setup",
          "Basic technical SEO",
          "Two revision rounds",
          "Launch support",
        ],
      },
      {
        title: "Online Store",
        description:
          "A custom-designed storefront built with trusted commerce and payment technology for selling products online.",
        features: [
          "Custom storefront design",
          "Product and category structure",
          "Cart and checkout setup",
          "Payment setup support",
          "Responsive testing",
          "Basic SEO structure",
          "Up to 10 initial products",
        ],
      },
    ],
    tailoredTitle: "Need something more tailored?",
    tailoredDescription:
      "Portfolios, bilingual websites, booking features, integrations, maintenance plans, and larger custom projects are quoted according to scope.",
    tailoredCta: "Discuss Your Project",
    footnote:
      "Prices shown are starting prices in ISK. VAT is added where applicable. Final pricing depends on project scope and requirements.",
  },
  faq: {
    eyebrow: "FAQ",
    titleLine1: "Common Questions,",
    titleHighlight: "Straightforward Answers",
    description: "Everything you need to know before we start working together.",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "Starting prices depend on the type of project. Landing pages start from 149,000 ISK, business websites from 289,000 ISK, and online stores from 489,000 ISK. The final price is always confirmed after we define the scope together — no surprises.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A landing page typically takes 1–2 weeks. A full business website is usually 3–5 weeks. Online stores can take 4–8 weeks depending on complexity. Timelines start once we have your content and initial brief in hand.",
      },
      {
        question: "Do you build online stores?",
        answer:
          "Yes. We design and build custom storefronts with product listings, cart, checkout, and payment setup. Every store is built specifically for your products and brand — not dropped into a generic template.",
      },
      {
        question: "Can the website be in Icelandic and English?",
        answer:
          "Yes, bilingual websites are available. We can build your site to support both languages cleanly, with a language toggle that feels natural. This is quoted as part of the project scope.",
      },
      {
        question: "Do you use templates?",
        answer:
          "No. Every Sveinssons website is designed and developed from scratch for that specific business. You get a site that fits your brand, not a generic layout that hundreds of other companies use.",
      },
      {
        question: "Can you maintain the website after launch?",
        answer:
          "Yes. We offer maintenance and update services after launch — content changes, design adjustments, technical upkeep. This is arranged separately and tailored to how much ongoing support you need.",
      },
    ],
  },
  contact: {
    eyebrow: "Start a project",
    titleLine1: "Tell Us About",
    titleHighlight: "Your Website",
    description:
      "Ready to build a custom website, online store, or digital experience? Send a short message and we'll discuss the best next step for your project.",
    leftTitle: "Let's build something custom.",
    leftDescription:
      "Share what you want to create, what your business needs, and any timeline you have in mind. We'll help clarify the scope before giving a final quote.",
    services: [
      "Custom websites",
      "Online stores",
      "Portfolios",
      "Landing pages",
      "Maintenance and updates",
    ],
    leftFootnote:
      "Based in Iceland. Available for small businesses, professionals, and growing brands.",
    rightTitle: "Request a quote",
    rightDescription:
      "Fill out the form and we'll review your project details before suggesting the best next step.",
    rightFootnote: "Your information is used only to respond to your project request.",
  },
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    businessNameLabel: "Business name",
    optionalPlaceholder: "Optional",
    projectTypeLabel: "Project type",
    projectTypePlaceholder: "Select a project type",
    languageLabel: "Language",
    timelineLabel: "Timeline",
    budgetRangeLabel: "Budget range",
    projectDetailsLabel: "Project details",
    projectDetailsPlaceholder:
      "Tell us about your business, goals, and what you want to build.",
    companyWebsiteLabel: "Company website",
    submit: "Send project request",
    submitting: "Sending...",
    genericError: "Something went wrong. Please try again.",
    networkError: "Unable to send your message right now. Please try again shortly.",
    successTitle: "Message sent",
    successBody: "Thank you. We received your project request and will be in touch soon.",
    sendAnother: "Send another message",
    consent:
      "By sending this message, you agree that Sveinssons may contact you about your enquiry.",
    // value = canonical English (what the API validates against); label = displayed text.
    projectTypes: [
      { value: "Custom website", label: "Custom website" },
      { value: "Online store", label: "Online store" },
      { value: "Portfolio", label: "Portfolio" },
      { value: "Landing page", label: "Landing page" },
      { value: "Maintenance", label: "Maintenance" },
      { value: "Not sure yet", label: "Not sure yet" },
    ],
    languages: [
      { value: "Icelandic", label: "Icelandic" },
      { value: "English", label: "English" },
      { value: "Both", label: "Both" },
      { value: "Not sure yet", label: "Not sure yet" },
    ],
    timelines: [
      { value: "As soon as possible", label: "As soon as possible" },
      { value: "Within 1 month", label: "Within 1 month" },
      { value: "1–3 months", label: "1–3 months" },
      { value: "No fixed deadline", label: "No fixed deadline" },
    ],
    budgetRanges: [
      { value: "Under 150,000 ISK", label: "Under 150,000 ISK" },
      { value: "150,000–300,000 ISK", label: "150,000–300,000 ISK" },
      { value: "300,000–500,000 ISK", label: "300,000–500,000 ISK" },
      { value: "500,000+ ISK", label: "500,000+ ISK" },
      { value: "Not sure yet", label: "Not sure yet" },
    ],
  },
};

export type Translations = typeof en;

const es: Translations = {
  nav: {
    home: "Inicio",
    services: "Servicios",
    work: "Proyectos",
    about: "Nosotros",
    process: "Proceso",
    pricing: "Precios",
    faq: "Preguntas",
    cta: "Pide presupuesto gratis",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Creamos experiencias digitales",
    titleLine1: "Sitios Web a Medida.",
    titleHighlight: "Resultados",
    titleSuffix: " Potentes.",
    description:
      "Sveinssons diseña y desarrolla sitios web y tiendas en línea a medida, creados en torno a tu negocio — nunca plantillas genéricas de talla única.",
    ctaPrimary: "Pide presupuesto gratis",
    ctaSecondary: "Mira nuestro trabajo",
    features: [
      { title: "Entrega Rápida", subtitle: "Plazos claros y entrega fiable" },
      { title: "Hecho a Medida", subtitle: "Diseñado específicamente para tu marca" },
      { title: "Adaptado al Móvil", subtitle: "Se ve perfecto en cualquier pantalla" },
    ],
  },
  serviceStrip: {
    heading: "SERVICIOS DIGITALES PARA NEGOCIOS MODERNOS",
    items: [
      "SITIOS WEB A MEDIDA",
      "TIENDAS EN LÍNEA",
      "PORTAFOLIOS",
      "PÁGINAS DE ATERRIZAJE",
      "MANTENIMIENTO",
    ],
  },
  services: {
    eyebrow: "Nuestros servicios",
    titleLine1: "Soluciones Web Completas",
    titleLine2Prefix: "para ",
    titleHighlight: "Tu Negocio",
    description:
      "Cada sitio web se diseña y desarrolla cuidadosamente para cada negocio, con una estructura, identidad visual y experiencia de usuario únicas.",
    items: [
      {
        title: "Diseño Web a Medida",
        description: "Diseños hermosos y modernos adaptados a tu marca.",
      },
      {
        title: "Desarrollo Web",
        description:
          "Sitios web rápidos, seguros y escalables creados con las últimas tecnologías.",
      },
      {
        title: "Soluciones de E-Commerce",
        description: "Tiendas en línea que convierten visitantes en clientes fieles.",
      },
    ],
  },
  work: {
    eyebrow: "Nuestro trabajo",
    titleLine1: "Trabajo Reciente,",
    titleHighlight: "Hecho con Cuidado",
    description:
      "Una selección de proyectos está en camino. Vuelve pronto para ver lo que hemos estado construyendo.",
    cardTitle: "Próximamente",
    cardDescription: "Detalles del proyecto próximamente.",
    liveSiteLabel: "Ver sitio en vivo",
    projects: [
      {
        title: "Julieta Banco — Psicología",
        description:
          "Sitio web de consulta de psicología. Diseño con degradado cálido, en español, servicios para adolescentes, adultos y parejas, presenciales y en línea.",
        liveUrl: "https://travesiainternapsicologia.com",
      },
    ],
  },
  process: {
    eyebrow: "Nuestro proceso",
    titleLine1: "De la Idea al Lanzamiento,",
    titleHighlight: "Pensado para Ti",
    description:
      "Cada proyecto comienza por entender tu negocio. Diseñamos y desarrollamos una experiencia digital adaptada a tus objetivos, tus clientes y tu marca.",
    steps: [
      {
        title: "Descubrir",
        description:
          "Conocemos tu negocio, tu público, tus objetivos y qué debe lograr tu sitio web.",
      },
      {
        title: "Diseñar",
        description:
          "Creamos una dirección visual y una experiencia de usuario a medida que reflejan tu marca.",
      },
      {
        title: "Desarrollar",
        description:
          "Construimos un sitio web o tienda en línea rápido y responsivo con tecnología limpia y fiable.",
      },
      {
        title: "Lanzamiento y Soporte",
        description:
          "Preparamos tu sitio para el lanzamiento y te ayudamos a mantenerlo actualizado, seguro y efectivo.",
      },
    ],
  },
  pricing: {
    eyebrow: "Precios",
    titleLine1: "Paquetes Flexibles para",
    titleHighlight: "Sitios Web a Medida",
    description:
      "Cada sitio web se adapta al negocio que lo respalda. Estos precios iniciales te dan una idea clara de la inversión antes de definir juntos el alcance final.",
    badgePopular: "MÁS POPULAR",
    cardCta: "Pedir presupuesto",
    plans: [
      {
        title: "Página de Aterrizaje (pagina unica)",
        description:
          "Una página a medida y enfocada, diseñada para presentar tu negocio, servicio o campaña de forma clara y profesional.",
        features: [
          "Diseño a medida de una página",
          "Desarrollo responsivo mobile-first",
          "Llamada a la acción de contacto o consulta",
          "Configuración básica de SEO",
          "Una ronda de revisiones",
          "Soporte de lanzamiento",
        ],
      },
      {
        title: "Website para empresa",
        description:
          "Un sitio web a medida y profesional para un negocio que necesita una presencia sólida en línea y un flujo de consultas claro.",
        features: [
          "Hasta 5 páginas principales",
          "Diseño a medida para tu marca",
          "Desarrollo responsivo",
          "Configuración de formulario de contacto/consulta",
          "SEO técnico básico",
          "Dos rondas de revisiones",
          "Soporte de lanzamiento",
        ],
      },
      {
        title: "Tienda en Línea",
        description:
          "Un escaparate diseñado a medida y construido con tecnología de comercio y pago de confianza para vender productos en línea.",
        features: [
          "Diseño de escaparate a medida",
          "Estructura de productos y categorías",
          "Configuración de carrito y pago",
          "Soporte de configuración de pagos",
          "Pruebas responsivas",
          "Estructura básica de SEO",
          "Hasta 10 productos iniciales",
        ],
      },
    ],
    tailoredTitle: "¿Necesitas algo más a medida?",
    tailoredDescription:
      "Portafolios, sitios web bilingües, funciones de reservas, integraciones, planes de mantenimiento y proyectos a medida más grandes se presupuestan según el alcance.",
    tailoredCta: "Habla de tu proyecto",
    footnote:
      "Los precios mostrados son precios iniciales en ISK. Se añade el IVA cuando corresponde. El precio final depende del alcance y los requisitos del proyecto.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    titleLine1: "Preguntas Comunes,",
    titleHighlight: "Respuestas Claras",
    description: "Todo lo que necesitas saber antes de empezar a trabajar juntos.",
    items: [
      {
        question: "¿Cuánto cuesta un sitio web?",
        answer:
          "Los precios iniciales dependen del tipo de proyecto. Las páginas de aterrizaje empiezan desde 149,000 ISK, los sitios web de empresa desde 289,000 ISK y las tiendas en línea desde 489,000 ISK. El precio final siempre se confirma después de definir el alcance juntos — sin sorpresas.",
      },
      {
        question: "¿Cuánto tiempo lleva crear un sitio web?",
        answer:
          "Una página de aterrizaje suele llevar de 1 a 2 semanas. Un sitio web de empresa completo suele ser de 3 a 5 semanas. Las tiendas en línea pueden llevar de 4 a 8 semanas según la complejidad. Los plazos comienzan una vez que tenemos tu contenido y el resumen inicial.",
      },
      {
        question: "¿Creáis tiendas en línea?",
        answer:
          "Sí. Diseñamos y construimos escaparates a medida con listados de productos, carrito, pago y configuración de pagos. Cada tienda se construye específicamente para tus productos y tu marca, no se mete en una plantilla genérica.",
      },
      {
        question: "¿Puede el sitio web estar en islandés e inglés?",
        answer:
          "Sí, los sitios web bilingües están disponibles. Podemos construir tu sitio para que admita ambos idiomas de forma limpia, con un selector de idioma que se sienta natural. Esto se presupuesta como parte del alcance del proyecto.",
      },
      {
        question: "¿Usáis plantillas?",
        answer:
          "No. Cada sitio web de Sveinssons se diseña y desarrolla desde cero para ese negocio específico. Obtienes un sitio que encaja con tu marca, no un diseño genérico que usan cientos de otras empresas.",
      },
      {
        question: "¿Podéis mantener el sitio web después del lanzamiento?",
        answer:
          "Sí. Ofrecemos servicios de mantenimiento y actualización tras el lanzamiento — cambios de contenido, ajustes de diseño, mantenimiento técnico. Esto se acuerda por separado y se adapta a cuánto soporte continuo necesites.",
      },
    ],
  },
  contact: {
    eyebrow: "Empieza un proyecto",
    titleLine1: "Cuéntanos Sobre",
    titleHighlight: "Tu Sitio Web",
    description:
      "¿Listo para crear un sitio web a medida, una tienda en línea o una experiencia digital? Envía un mensaje breve y hablaremos del mejor siguiente paso para tu proyecto.",
    leftTitle: "Construyamos algo a medida.",
    leftDescription:
      "Cuéntanos qué quieres crear, qué necesita tu negocio y cualquier plazo que tengas en mente. Te ayudaremos a aclarar el alcance antes de dar un presupuesto final.",
    services: [
      "Sitios web a medida",
      "Tiendas en línea",
      "Portafolios",
      "Páginas de aterrizaje",
      "Mantenimiento y actualizaciones",
    ],
    leftFootnote:
      "Con base en Islandia. Disponibles para pequeñas empresas, profesionales y marcas en crecimiento.",
    rightTitle: "Pide presupuesto",
    rightDescription:
      "Rellena el formulario y revisaremos los detalles de tu proyecto antes de sugerir el mejor siguiente paso.",
    rightFootnote: "Tu información se usa únicamente para responder a tu solicitud de proyecto.",
  },
  form: {
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    businessNameLabel: "Nombre del negocio",
    optionalPlaceholder: "Opcional",
    projectTypeLabel: "Tipo de proyecto",
    projectTypePlaceholder: "Selecciona un tipo de proyecto",
    languageLabel: "Idioma",
    timelineLabel: "Plazo",
    budgetRangeLabel: "Rango de presupuesto",
    projectDetailsLabel: "Detalles del proyecto",
    projectDetailsPlaceholder:
      "Cuéntanos sobre tu negocio, tus objetivos y qué quieres construir.",
    companyWebsiteLabel: "Sitio web de la empresa",
    submit: "Enviar solicitud de proyecto",
    submitting: "Enviando...",
    genericError: "Algo salió mal. Inténtalo de nuevo.",
    networkError: "No se puede enviar tu mensaje en este momento. Inténtalo de nuevo en breve.",
    successTitle: "Mensaje enviado",
    successBody:
      "Gracias. Hemos recibido tu solicitud de proyecto y nos pondremos en contacto pronto.",
    sendAnother: "Enviar otro mensaje",
    consent:
      "Al enviar este mensaje, aceptas que Sveinssons pueda contactarte sobre tu consulta.",
    projectTypes: [
      { value: "Custom website", label: "Sitio web a medida" },
      { value: "Online store", label: "Tienda en línea" },
      { value: "Portfolio", label: "Portafolio" },
      { value: "Landing page", label: "Página de aterrizaje" },
      { value: "Maintenance", label: "Mantenimiento" },
      { value: "Not sure yet", label: "Aún no estoy seguro" },
    ],
    languages: [
      { value: "Icelandic", label: "Islandés" },
      { value: "English", label: "Inglés" },
      { value: "Both", label: "Ambos" },
      { value: "Not sure yet", label: "Aún no estoy seguro" },
    ],
    timelines: [
      { value: "As soon as possible", label: "Lo antes posible" },
      { value: "Within 1 month", label: "En 1 mes" },
      { value: "1–3 months", label: "1–3 meses" },
      { value: "No fixed deadline", label: "Sin fecha límite" },
    ],
    budgetRanges: [
      { value: "Under 150,000 ISK", label: "Menos de 150,000 ISK" },
      { value: "150,000–300,000 ISK", label: "150,000–300,000 ISK" },
      { value: "300,000–500,000 ISK", label: "300,000–500,000 ISK" },
      { value: "500,000+ ISK", label: "500,000+ ISK" },
      { value: "Not sure yet", label: "Aún no estoy seguro" },
    ],
  },
};

const is: Translations = {
  nav: {
    home: "Heim",
    services: "Þjónusta",
    work: "Verk",
    about: "Um okkur",
    process: "Ferli",
    pricing: "Verð",
    faq: "Spurningar",
    cta: "Fáðu ókeypis tilboð",
    openMenu: "Opna valmynd",
    closeMenu: "Loka valmynd",
  },
  hero: {
    eyebrow: "Við byggjum stafræna upplifun",
    titleLine1: "Sérsniðnar Vefsíður.",
    titleHighlight: "Öflugur",
    titleSuffix: " Árangur.",
    description:
      "Sveinssons hannar og þróar sérsniðnar vefsíður og netverslanir sem byggðar eru í kringum þitt fyrirtæki — aldrei almenn sniðmát sem henta öllum.",
    ctaPrimary: "Fáðu ókeypis tilboð",
    ctaSecondary: "Skoðaðu verkin okkar",
    features: [
      { title: "Hröð Afhending", subtitle: "Skýr tímalína og áreiðanleg afhending" },
      { title: "Sérsmíðað", subtitle: "Hannað sérstaklega fyrir þitt vörumerki" },
      { title: "Farsíminn Fyrst", subtitle: "Lítur fullkomlega út alls staðar" },
    ],
  },
  serviceStrip: {
    heading: "STAFRÆN ÞJÓNUSTA FYRIR NÚTÍMA FYRIRTÆKI",
    items: ["SÉRSNIÐNAR VEFSÍÐUR", "NETVERSLANIR", "VERKASÖFN", "LENDINGARSÍÐUR", "VIÐHALD"],
  },
  services: {
    eyebrow: "Þjónustan okkar",
    titleLine1: "Heildarlausnir á Vefnum",
    titleLine2Prefix: "fyrir ",
    titleHighlight: "Fyrirtækið Þitt",
    description:
      "Hver vefsíða er vandlega hönnuð og þróuð fyrir hvert fyrirtæki, með einstakri uppbyggingu, sjónrænni ímynd og notendaupplifun.",
    items: [
      {
        title: "Sérsniðin Vefhönnun",
        description: "Fallegar, nútímalegar hönnanir sniðnar að vörumerkinu þínu.",
      },
      {
        title: "Vefþróun",
        description: "Hraðar, öruggar og skalanlegar vefsíður byggðar með nýjustu tækni.",
      },
      {
        title: "Lausnir fyrir Netverslun",
        description: "Netverslanir sem breyta gestum í trygga viðskiptavini.",
      },
    ],
  },
  work: {
    eyebrow: "Verkin okkar",
    titleLine1: "Nýleg Verk,",
    titleHighlight: "Unnin af Alúð",
    description:
      "Úrval verkefna er á leiðinni. Líttu við fljótlega til að sjá hvað við höfum verið að byggja.",
    cardTitle: "Væntanlegt",
    cardDescription: "Upplýsingar um verkefnið væntanlegar.",
    liveSiteLabel: "Skoða lifandi síðu",
    projects: [
      {
        title: "Julieta Banco — Psicología",
        description:
          "Vefsíða fyrir sálfræðistofu. Hlý litaskiptahönnun, á spænsku, þjónusta fyrir unglinga, fullorðna og pör, í eigin persónu og á netinu.",
        liveUrl: "https://travesiainternapsicologia.com",
      },
    ],
  },
  process: {
    eyebrow: "Ferlið okkar",
    titleLine1: "Frá Hugmynd að Útgáfu,",
    titleHighlight: "Byggt í Kringum Þig",
    description:
      "Hvert verkefni hefst á því að skilja fyrirtækið þitt. Við hönnum og þróum stafræna upplifun sniðna að markmiðum þínum, viðskiptavinum þínum og vörumerkinu þínu.",
    steps: [
      {
        title: "Uppgötvun",
        description:
          "Við kynnumst fyrirtækinu þínu, markhópi, markmiðum og hvað vefsíðan þín þarf að ná fram.",
      },
      {
        title: "Hönnun",
        description:
          "Við búum til sérsniðna sjónræna stefnu og notendaupplifun sem endurspeglar vörumerkið þitt.",
      },
      {
        title: "Þróun",
        description:
          "Við byggjum hraða og svörunarhæfa vefsíðu eða netverslun með hreinni og áreiðanlegri tækni.",
      },
      {
        title: "Útgáfa og Stuðningur",
        description:
          "Við undirbúum síðuna fyrir útgáfu og hjálpum þér að halda henni uppfærðri, öruggri og árangursríkri.",
      },
    ],
  },
  pricing: {
    eyebrow: "Verð",
    titleLine1: "Sveigjanlegir Pakkar fyrir",
    titleHighlight: "Sérsmíðaðar Vefsíður",
    description:
      "Hver vefsíða er sniðin að fyrirtækinu á bak við hana. Þessi byrjunarverð gefa þér skýra hugmynd um fjárfestinguna áður en við skilgreinum lokaumfangið saman.",
    badgePopular: "VINSÆLAST",
    cardCta: "Biðja um tilboð",
    plans: [
      {
        title: "Lendingarsíða",
        description:
          "Markviss sérsniðin síða, hönnuð til að kynna fyrirtækið þitt, þjónustu eða herferð á skýran og faglegan hátt.",
        features: [
          "Sérsniðin hönnun á einni síðu",
          "Svörunarhæf mobile-first smíði",
          "Hvatning til tengiliðar eða fyrirspurnar",
          "Grunnuppsetning á SEO",
          "Ein yfirferð breytinga",
          "Stuðningur við útgáfu",
        ],
      },
      {
        title: "Fyrirtækjavefur",
        description:
          "Fagleg sérsniðin vefsíða fyrir fyrirtæki sem þarf sterka viðveru á netinu og skýrt fyrirspurnaflæði.",
        features: [
          "Allt að 5 kjarnasíður",
          "Sérsniðin hönnun fyrir vörumerkið þitt",
          "Svörunarhæf þróun",
          "Uppsetning á tengiliða-/fyrirspurnareyðublaði",
          "Grunntæknilegt SEO",
          "Tvær yfirferðir breytinga",
          "Stuðningur við útgáfu",
        ],
      },
      {
        title: "Netverslun",
        description:
          "Sérhönnuð verslun byggð með traustri verslunar- og greiðslutækni til að selja vörur á netinu.",
        features: [
          "Sérsniðin hönnun verslunar",
          "Uppbygging vara og flokka",
          "Uppsetning körfu og afgreiðslu",
          "Stuðningur við greiðsluuppsetningu",
          "Svörunarprófanir",
          "Grunnuppbygging SEO",
          "Allt að 10 vörur í upphafi",
        ],
      },
    ],
    tailoredTitle: "Þarftu eitthvað meira sérsniðið?",
    tailoredDescription:
      "Verkasöfn, tvítyngdar vefsíður, bókunaraðgerðir, samþættingar, viðhaldsáætlanir og stærri sérverkefni eru verðlögð eftir umfangi.",
    tailoredCta: "Ræddu verkefnið þitt",
    footnote:
      "Verð sem birt eru eru byrjunarverð í ISK. Virðisaukaskatti er bætt við þar sem við á. Lokaverð fer eftir umfangi og kröfum verkefnisins.",
  },
  faq: {
    eyebrow: "Algengar spurningar",
    titleLine1: "Algengar Spurningar,",
    titleHighlight: "Einföld Svör",
    description: "Allt sem þú þarft að vita áður en við byrjum að vinna saman.",
    items: [
      {
        question: "Hvað kostar vefsíða?",
        answer:
          "Byrjunarverð fer eftir tegund verkefnis. Lendingarsíður byrja á 149,000 ISK, fyrirtækjavefir á 289,000 ISK og netverslanir á 489,000 ISK. Lokaverðið er alltaf staðfest eftir að við skilgreinum umfangið saman — engin óvænt útgjöld.",
      },
      {
        question: "Hversu langan tíma tekur að smíða vefsíðu?",
        answer:
          "Lendingarsíða tekur yfirleitt 1–2 vikur. Heill fyrirtækjavefur er venjulega 3–5 vikur. Netverslanir geta tekið 4–8 vikur eftir flækjustigi. Tímalínan hefst þegar við höfum efnið þitt og fyrstu lýsinguna í höndunum.",
      },
      {
        question: "Smíðið þið netverslanir?",
        answer:
          "Já. Við hönnum og smíðum sérsniðnar verslanir með vörulistum, körfu, afgreiðslu og greiðsluuppsetningu. Hver verslun er smíðuð sérstaklega fyrir vörurnar þínar og vörumerki — ekki sett inn í almennt sniðmát.",
      },
      {
        question: "Getur vefsíðan verið á íslensku og ensku?",
        answer:
          "Já, tvítyngdar vefsíður eru í boði. Við getum byggt síðuna þína þannig að hún styðji bæði tungumál snyrtilega, með tungumálavali sem virkar eðlilega. Þetta er verðlagt sem hluti af umfangi verkefnisins.",
      },
      {
        question: "Notið þið sniðmát?",
        answer:
          "Nei. Hver Sveinssons vefsíða er hönnuð og þróuð frá grunni fyrir það tiltekna fyrirtæki. Þú færð síðu sem hentar vörumerkinu þínu, ekki almennt útlit sem hundruð annarra fyrirtækja nota.",
      },
      {
        question: "Getið þið viðhaldið vefsíðunni eftir útgáfu?",
        answer:
          "Já. Við bjóðum viðhalds- og uppfærsluþjónustu eftir útgáfu — efnisbreytingar, hönnunarbreytingar, tæknilegt viðhald. Þetta er samið um sérstaklega og sniðið að því hversu mikinn áframhaldandi stuðning þú þarft.",
      },
    ],
  },
  contact: {
    eyebrow: "Byrjaðu verkefni",
    titleLine1: "Segðu Okkur Frá",
    titleHighlight: "Vefsíðunni Þinni",
    description:
      "Tilbúin að smíða sérsniðna vefsíðu, netverslun eða stafræna upplifun? Sendu stutt skilaboð og við ræðum besta næsta skrefið fyrir verkefnið þitt.",
    leftTitle: "Byggjum eitthvað sérsniðið.",
    leftDescription:
      "Segðu okkur hvað þú vilt skapa, hvað fyrirtækið þitt þarf og hvaða tímaramma þú hefur í huga. Við hjálpum til við að skýra umfangið áður en lokatilboð er gefið.",
    services: [
      "Sérsniðnar vefsíður",
      "Netverslanir",
      "Verkasöfn",
      "Lendingarsíður",
      "Viðhald og uppfærslur",
    ],
    leftFootnote:
      "Staðsett á Íslandi. Í boði fyrir lítil fyrirtæki, fagfólk og vaxandi vörumerki.",
    rightTitle: "Biðja um tilboð",
    rightDescription:
      "Fylltu út eyðublaðið og við förum yfir upplýsingar verkefnisins áður en við leggjum til besta næsta skref.",
    rightFootnote: "Upplýsingarnar þínar eru aðeins notaðar til að svara verkefnabeiðni þinni.",
  },
  form: {
    nameLabel: "Nafn",
    namePlaceholder: "Nafnið þitt",
    emailLabel: "Netfang",
    phoneLabel: "Sími",
    businessNameLabel: "Nafn fyrirtækis",
    optionalPlaceholder: "Valfrjálst",
    projectTypeLabel: "Tegund verkefnis",
    projectTypePlaceholder: "Veldu tegund verkefnis",
    languageLabel: "Tungumál",
    timelineLabel: "Tímarammi",
    budgetRangeLabel: "Fjárhagsrammi",
    projectDetailsLabel: "Upplýsingar um verkefnið",
    projectDetailsPlaceholder:
      "Segðu okkur frá fyrirtækinu þínu, markmiðum og hvað þú vilt byggja.",
    companyWebsiteLabel: "Vefsíða fyrirtækis",
    submit: "Senda verkefnabeiðni",
    submitting: "Sendi...",
    genericError: "Eitthvað fór úrskeiðis. Vinsamlegast reyndu aftur.",
    networkError: "Ekki tókst að senda skilaboðin núna. Vinsamlegast reyndu aftur fljótlega.",
    successTitle: "Skilaboð send",
    successBody: "Takk fyrir. Við fengum verkefnabeiðnina þína og verðum í sambandi fljótlega.",
    sendAnother: "Senda önnur skilaboð",
    consent:
      "Með því að senda þessi skilaboð samþykkir þú að Sveinssons megi hafa samband við þig vegna fyrirspurnar þinnar.",
    projectTypes: [
      { value: "Custom website", label: "Sérsniðin vefsíða" },
      { value: "Online store", label: "Netverslun" },
      { value: "Portfolio", label: "Verkasafn" },
      { value: "Landing page", label: "Lendingarsíða" },
      { value: "Maintenance", label: "Viðhald" },
      { value: "Not sure yet", label: "Ekki viss enn" },
    ],
    languages: [
      { value: "Icelandic", label: "Íslenska" },
      { value: "English", label: "Enska" },
      { value: "Both", label: "Bæði" },
      { value: "Not sure yet", label: "Ekki viss enn" },
    ],
    timelines: [
      { value: "As soon as possible", label: "Eins fljótt og auðið er" },
      { value: "Within 1 month", label: "Innan 1 mánaðar" },
      { value: "1–3 months", label: "1–3 mánuðir" },
      { value: "No fixed deadline", label: "Enginn fastur frestur" },
    ],
    budgetRanges: [
      { value: "Under 150,000 ISK", label: "Undir 150,000 ISK" },
      { value: "150,000–300,000 ISK", label: "150,000–300,000 ISK" },
      { value: "300,000–500,000 ISK", label: "300,000–500,000 ISK" },
      { value: "500,000+ ISK", label: "500,000+ ISK" },
      { value: "Not sure yet", label: "Ekki viss enn" },
    ],
  },
};

export const translations: Record<Language, Translations> = { en, es, is };
