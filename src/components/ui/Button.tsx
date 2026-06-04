import { ArrowRightIcon } from "@/components/icons";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  showArrow?: boolean;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  href = "#",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90";
  const styles =
    variant === "primary"
      ? `${base} bg-gradient-accent text-white shadow-[0_0_24px_rgba(124,58,237,0.25)]`
      : `${base} border border-white/15 bg-transparent text-foreground`;

  return (
    <a href={href} className={`${styles} ${className}`}>
      {children}
      {showArrow && <ArrowRightIcon />}
    </a>
  );
}

export function EyebrowBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block w-fit rounded-full border border-[#7c3aed]/50 px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] text-[#a78bfa] uppercase">
      {children}
    </span>
  );
}
