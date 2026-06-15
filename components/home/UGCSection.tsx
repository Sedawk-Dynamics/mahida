import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";

// Real @lovedbymahidha photography (public/img/ugc-*.jpeg).
// First tile is the large feature; the rest fill a clean bento grid.
const tiles: [string, string][] = [
  ["/img/ugc-1.jpeg", "col-span-2 row-span-2"],
  ["/img/ugc-2.jpeg", "col-span-1 row-span-1"],
  ["/img/ugc-3.jpeg", "col-span-1 row-span-1"],
  ["/img/ugc-4.jpeg", "col-span-1 row-span-1"],
  ["/img/ugc-5.jpeg", "col-span-1 row-span-1"],
  ["/img/ugc-6.jpeg", "col-span-1 row-span-1"],
  ["/img/ugc-7.jpeg", "col-span-1 row-span-1"],
  ["/img/ugc-8.jpeg", "col-span-1 row-span-1"],
  ["/img/ugc-9.jpeg", "col-span-1 row-span-1"],
];

export default function UGCSection() {
  return (
    <section className="bg-pearl">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading
          overline="@lovedbymahidha"
          title="Made for real women. Loved in real life."
          sub="Designed for women who do it all. Tag us to be featured."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 auto-rows-[170px] md:auto-rows-[220px] gap-3">
          {tiles.map(([img, span]) => (
            <div
              key={img}
              className={`group relative overflow-hidden rounded-btn bg-beige duo ${span}`}
            >
              <SmartImage
                src={img}
                alt="MAHIDHA worn in real life — @lovedbymahidha"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <span className="absolute bottom-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-[11px] tracking-nav uppercase text-ivory flex items-center gap-1.5">
                <Icons.insta size={13} stroke="#C4A87A" /> @lovedbymahidha
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/lovedbymahidha/"
            target="_blank"
            rel="noopener noreferrer"
            className="ulink font-sans text-[13px] tracking-nav uppercase text-taupe hover:text-charcoal"
          >
            Tag us @lovedbymahidha
          </a>
          <Button variant="secondary" href="https://www.instagram.com/lovedbymahidha/">
            <Icons.insta size={16} /> Follow Us
          </Button>
        </div>
      </div>
    </section>
  );
}
