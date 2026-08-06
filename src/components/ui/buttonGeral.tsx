import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "sm";

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 hover:brightness-105 hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "border border-secondary-foreground bg-transparent text-foreground hover:bg-accent/5 hover:scale-[1.02] active:scale-[0.98]",
};

const SIZE_STYLES: Record<Size, string> = {
  md: "px-6 py-4 text-sm lg:text-base",
  sm: "px-4 py-2.5 text-xs",
};

/**
 * Visual recipe shared by every CTA on the site — used directly by ButtonGeral
 * (Links) and by raw <button> CTAs that aren't navigation (dialog triggers,
 * form submits) so every call-to-action looks and animates the same way.
 */
export function ctaButtonClasses(variant: Variant = "primary", size: Size = "md") {
  return `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl text-center font-bold uppercase tracking-wider outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${SIZE_STYLES[size]} ${VARIANT_STYLES[variant]}`;
}

/** Diagonal shine that sweeps across a CTA on hover. Needs a `ctaButtonClasses` parent (group + overflow-hidden). */
export function CtaShine() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/40 opacity-0 blur-md transition-all duration-700 ease-out group-hover:translate-x-[420%] group-hover:opacity-100"
    />
  );
}

type ButtonProps = {
  text: string;
  link: string;
  variant?: Variant;
  size?: Size;
  classes?: string;
  icon?: ReactNode;
};

export const ButtonGeral = ({
  text,
  link,
  classes = "",
  variant = "primary",
  size = "md",
  icon,
}: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`w-full whitespace-normal ${ctaButtonClasses(variant, size)} ${classes}`}
    >
      <CtaShine />
      {icon}
      {text}
    </Link>
  );
};
