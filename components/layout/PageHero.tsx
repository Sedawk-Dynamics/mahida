import { Icons } from "@/components/ui/Icons";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";

interface PageHeroProps {
  overline?: string;
  title: string;
  sub?: string;
  img?: string;
}

export default function PageHero({ overline, title, sub, img }: PageHeroProps) {
  const label = img || `${title} — editorial header image`;
  return (
    <section className="relative bg-navy text-ivory overflow-hidden">
      <SmartImage
        src={ph(label)}
        alt={label}
        fill
        sizes="100vw"
        priority
        className="absolute inset-0 w-full h-full object-cover opacity-[0.55]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/65 to-navy/45" />
      <div className="relative max-w-wrap mx-auto px-5 py-24 md:py-32 text-center">
        {overline && (
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4 flex items-center justify-center gap-2">
            <Icons.sparkle size={14} stroke="#C4A87A" /> {overline}
          </p>
        )}
        <h1 className="font-serif leading-[1.05] text-[36px] md:text-[60px] text-ivory">
          {title}
        </h1>
        {sub && (
          <p className="mt-5 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-[1.7] text-ivory/80">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
