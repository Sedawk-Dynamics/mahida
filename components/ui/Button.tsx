import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghostLight" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-sans text-[13px] tracking-nav uppercase transition-colors duration-300 px-7 py-3.5 cursor-pointer";

const styles: Record<Variant, string> = {
  primary: "bg-navy text-pearl hover:bg-navy-soft",
  secondary:
    "bg-transparent text-charcoal border border-navy/70 hover:bg-navy hover:text-pearl",
  ghostLight:
    "bg-transparent text-ivory border border-ivory/40 hover:border-gold hover:text-gold",
  light: "bg-ivory text-navy hover:bg-white",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        onClick={rest.onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
