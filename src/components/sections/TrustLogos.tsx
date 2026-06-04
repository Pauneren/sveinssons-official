const logos = [
  "NORDIC SOLUTIONS",
  "ALTA VENTURES",
  "flow",
  "peak PERFORMANCE",
  "vision DIGITAL",
];

export function TrustLogos() {
  return (
    <section className="border-y border-white/[0.04] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-10 text-center text-[11px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
          Trusted by businesses worldwide
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between md:gap-x-6">
          {logos.map((name) => (
            <li
              key={name}
              className="text-xs font-semibold tracking-[0.12em] text-zinc-600 uppercase sm:text-sm"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
