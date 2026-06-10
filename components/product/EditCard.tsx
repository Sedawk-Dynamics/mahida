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
  const cls = `group relative block text-left overflow-hidden rounded-btn ${className}`;
  const external = /^https?:\/\//.test(href);
  const inner = (
    <>
      <div className="relative aspect-[3/4] overflow-hidden bg-beige">
        <SmartImage
          src={ph(img)}
          alt={`${img} — editorial mood image`}
          fill
          sizes="(max-width: 1024px) 80vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-navy/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-[22px] md:text-[24px] text-ivory leading-tight">
          {title}
        </h3>
        <p className="mt-1 text-ivory/80 text-[14px] leading-snug">{line}</p>
        <span className="mt-3 inline-flex items-center gap-2 font-sans text-[12px] tracking-nav uppercase text-gold">
          Shop Now{" "}
          <span className="ulink relative">
            <Icons.arrow size={14} />
          </span>
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
