const serviceItems = [
  "CUSTOM WEBSITES",
  "ONLINE STORES",
  "PORTFOLIOS",
  "LANDING PAGES",
  "MAINTENANCE",
];

export function ServiceStrip() {
  return (
    <section className="border-y border-white/[0.04] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-10 text-center text-[11px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
          DIGITAL SERVICES FOR MODERN BUSINESSES
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between md:gap-x-6">
          {serviceItems.map((name) => (
            <li
              key={name}
              className="text-xs font-semibold tracking-[0.12em] text-white/55 uppercase sm:text-sm"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
