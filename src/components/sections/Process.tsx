import { EyebrowBadge } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, audience, goals, and what your website needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a tailored visual direction and user experience that reflects your brand.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build a fast, responsive website or online store with clean, reliable technology.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We prepare your site for launch and help you keep it updated, secure, and effective.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <EyebrowBadge>Our process</EyebrowBadge>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            From Idea to Launch,
            <br />
            <span className="text-gradient">Built Around You</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            Every project begins with understanding your business. We design and develop
            a digital experience tailored to your goals, your customers, and your brand.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <li
              key={number}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7"
            >
              <span className="inline-flex w-fit rounded-full border border-[#7c3aed]/35 bg-[#7c3aed]/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[#a78bfa]">
                {number}
              </span>
              <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
