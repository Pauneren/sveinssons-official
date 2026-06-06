import { Button, EyebrowBadge } from "@/components/ui/Button";

type PricingPlan = {
  title: string;
  price: string;
  description: string;
  features: readonly string[];
  featured?: boolean;
  badge?: string;
};

const plans: PricingPlan[] = [
  {
    title: "Landing Page",
    price: "From 149,000 ISK",
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
    badge: "MOST POPULAR",
    title: "Business Website",
    price: "From 289,000 ISK",
    description:
      "A professional custom website for a business that needs a strong online presence and clear enquiry flow.",
    featured: true,
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
    price: "From 489,000 ISK",
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
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-[#8b5cf6]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const cardBody = (
    <div className="flex h-full flex-col gap-5 p-6 lg:p-7">
      {plan.badge ? (
        <span className="inline-flex w-fit rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/15 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#c4b5fd] uppercase">
          {plan.badge}
        </span>
      ) : (
        <span className="h-[26px]" aria-hidden />
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-zinc-100">{plan.title}</h3>
        <p className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-[1.65rem]">
          {plan.price}
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">{plan.description}</p>
      </div>
      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <CheckIcon />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      <Button href="#contact" className="mt-auto w-full">
        Request a Quote
      </Button>
    </div>
  );

  if (plan.featured) {
    return (
      <li className="md:col-span-2 lg:col-span-1">
        <div className="h-full rounded-2xl bg-gradient-to-br from-[#7c3aed]/70 via-[#6366f1]/50 to-[#3b82f6]/70 p-px shadow-[0_0_36px_rgba(124,58,237,0.18)]">
          <div className="h-full rounded-[calc(1rem-1px)] bg-[#0a0a0f]">{cardBody}</div>
        </div>
      </li>
    );
  }

  return (
    <li className="h-full rounded-2xl border border-white/[0.06] bg-[#0a0a0f]">
      {cardBody}
    </li>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <EyebrowBadge>Pricing</EyebrowBadge>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Flexible Packages for
            <br />
            <span className="text-gradient">Custom-Built Websites</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            Every website is tailored to the business behind it. These starting prices give you
            a clear idea of investment before we define the final scope together.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </ul>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/[0.06] bg-[#0a0a0f]/80 px-6 py-8 text-center lg:mt-16 lg:px-10">
          <h3 className="text-lg font-semibold text-zinc-100">Need something more tailored?</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Portfolios, bilingual websites, booking features, integrations, maintenance plans,
            and larger custom projects are quoted according to scope.
          </p>
          <Button href="#contact" variant="secondary" className="mt-6">
            Discuss Your Project
          </Button>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-white/50 sm:text-sm">
          Prices shown are starting prices in ISK. VAT is added where applicable. Final pricing
          depends on project scope and requirements.
        </p>
      </div>
    </section>
  );
}
