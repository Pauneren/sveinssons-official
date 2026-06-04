import { BagIcon, HexagonIcon, LayoutIcon } from "@/components/icons";
import { EyebrowBadge } from "@/components/ui/Button";

const services = [
  {
    icon: LayoutIcon,
    title: "Custom Website Design",
    description: "Beautiful, modern designs tailored to your brand.",
  },
  {
    icon: HexagonIcon,
    title: "Website Development",
    description:
      "Fast, secure, and scalable websites built with the latest technologies.",
  },
  {
    icon: BagIcon,
    title: "E-Commerce Solutions",
    description: "Online stores that convert visitors into loyal customers.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20 lg:items-start">
          <div className="flex flex-col gap-5">
            <EyebrowBadge>Our services</EyebrowBadge>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Complete Web Solutions
              <br />
              for <span className="text-gradient">Your Business</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              Every website is thoughtfully designed and developed for the individual
              business, with a unique structure, visual identity, and user experience.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7"
              >
                <Icon className="h-6 w-6 text-[#8b5cf6]" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
