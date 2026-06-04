import Link from "next/link";
import { Icons } from "./Icons";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-sans text-[12px] tracking-nav uppercase text-taupe flex items-center gap-2 flex-wrap"
    >
      {trail.map((t, i) => (
        <span key={i} className="flex items-center gap-2">
          {t.href ? (
            <Link href={t.href} className="hover:text-charcoal">
              {t.label}
            </Link>
          ) : (
            <span className="text-charcoal">{t.label}</span>
          )}
          {i < trail.length - 1 && <Icons.chevron size={12} stroke="#7A746C" />}
        </span>
      ))}
    </nav>
  );
}
