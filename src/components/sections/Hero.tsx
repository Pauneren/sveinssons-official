import { CodeIcon, LightningIcon, SmartphoneIcon } from "@/components/icons";
import { HeroDeviceMockup } from "@/components/sections/HeroDeviceMockup";
import { Button, EyebrowBadge } from "@/components/ui/Button";

const features = [
  {
    icon: LightningIcon,
    title: "Fast Delivery",
    subtitle: "On-time, every time",
  },
  {
    icon: CodeIcon,
    title: "Clean Code",
    subtitle: "Built for performance",
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile First",
    subtitle: "Looks perfect anywhere",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-x-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1fr_1.05fr] lg:items-end lg:gap-6 lg:px-8 lg:py-14 xl:py-20">
        <div className="flex flex-col gap-7 lg:pb-20 lg:pt-2">
          <EyebrowBadge>We build digital experiences</EyebrowBadge>

          <h1 className="text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Custom Websites.
            <br />
            <span className="text-gradient">Powerful</span> Results.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-[1.05rem]">
            Sveinssons builds fast, modern, and responsive websites that help your
            business stand out and grow online.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#quote" showArrow>
              Get a Free Quote
            </Button>
            <Button href="#work" variant="secondary">
              View Our Work
            </Button>
          </div>

          <ul className="mt-2 flex flex-col gap-8 sm:flex-row sm:gap-10 lg:gap-12">
            {features.map(({ icon: Icon, title, subtitle }) => (
              <li key={title} className="flex flex-col gap-1.5">
                <Icon className="h-5 w-5 text-[#8b5cf6]" />
                <span className="text-sm font-semibold text-zinc-100">{title}</span>
                <span className="text-xs text-zinc-500">{subtitle}</span>
              </li>
            ))}
          </ul>
        </div>

        <HeroDeviceMockup />
      </div>
    </section>
  );
}
