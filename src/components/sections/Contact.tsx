import { EyebrowBadge } from "@/components/ui/Button";

const TALLY_EMBED_URL =
  "https://tally.so/embed/gDzZgl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

const services = [
  "Custom websites",
  "Online stores",
  "Portfolios",
  "Landing pages",
  "Maintenance and updates",
] as const;

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

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <EyebrowBadge>Start a project</EyebrowBadge>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Tell Us About
            <br />
            <span className="text-gradient">Your Website</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            Ready to build a custom website, online store, or digital experience? Send a short
            message and we&apos;ll discuss the best next step for your project.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          <div className="flex h-full min-w-0 flex-col gap-5 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7">
            <h3 className="text-xl font-semibold text-zinc-100">Let&apos;s build something custom.</h3>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              Share what you want to create, what your business needs, and any timeline you have in
              mind. We&apos;ll help clarify the scope before giving a final quote.
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckIcon />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-auto text-xs leading-relaxed text-white/50 sm:text-sm">
              Based in Iceland. Available for small businesses, professionals, and growing brands.
            </p>
          </div>

          <div className="flex h-full min-w-0 flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0f] p-6 lg:p-7">
            <h3 className="text-xl font-semibold text-zinc-100">Request a quote</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Fill out the form and we&apos;ll review your project details before suggesting the
              best next step.
            </p>
            <div className="min-h-[520px] w-full max-w-full overflow-hidden rounded-xl sm:min-h-[560px]">
              <iframe
                src={TALLY_EMBED_URL}
                title="Website project request form"
                className="h-full min-h-[520px] w-full max-w-full border-0 sm:min-h-[560px]"
                loading="lazy"
                allow="fullscreen"
              />
            </div>
            <p className="text-xs leading-relaxed text-white/50 sm:text-sm">
              Your information is used only to respond to your project request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
