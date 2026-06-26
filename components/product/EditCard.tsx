import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";

interface EditCardProps {
  title: string;
  line: string;
  img: string;
  tone?: "beige" | "navy";
  href: string;
  className?: string;
}

export default function EditCard({
  title,
  line,
  img,
  href,
  className = "",
}: EditCardProps) {
  const cls = `group block text-left ${className}`;
  const external = /^https?:\/\//.test(href);
  const inner = (
    <>
      <div className="relative aspect-[3/4] overflow-hidden rounded-btn bg-beige">
        <SmartImage
          src={ph(img)}
          alt={`${title} — ${line}`}
          fill
          sizes="(max-width: 1024px) 80vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
        />
      </div>
      <div className="pt-4">
        <h3 className="font-serif text-[21px] md:text-[22px] text-charcoal leading-tight group-hover:text-taupe transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-taupe text-[13px] leading-snug">{line}</p>
        <span className="mt-2.5 inline-flex items-center gap-1.5 font-sans text-[11px] tracking-nav uppercase text-gold">
          Shop Now <Icons.arrow size={13} stroke="#C4A87A" />
        </span>
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
