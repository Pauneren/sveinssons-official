import { LogoMark } from "@/components/icons";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#050508]/80 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="relative z-10 flex shrink-0 items-center gap-3">
          <LogoMark className="h-10 w-10" />
          <span className="text-lg font-bold tracking-tight">Sveinssons</span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? "text-sm font-medium text-[#a78bfa]"
                  : "text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-3">
          <Button href="#quote" showArrow className="hidden sm:inline-flex">
            Get a Free Quote
          </Button>
          <button
            type="button"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 lg:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
