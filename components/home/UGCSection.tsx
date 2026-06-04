import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { F, ph } from "@/lib/images";

const tiles: [string, string][] = [
  [F.heroWoman, "col-span-2 row-span-2"],
  [F.lifeStreet, "col-span-1 row-span-1"],
  [F.lifeCeleb, "col-span-1 row-span-2"],
  [F.lifeGreen, "col-span-1 row-span-1"],
  [F.heroBlazer, "col-span-1 md:col-span-2 row-span-1"],
  [F.lifeEvening, "col-span-2 md:col-span-1 row-span-1"],
  [F.heroLayers, "col-span-1 row-span-1"],
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
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[190px] gap-3">
          {tiles.map(([img, span]) => (
            <div
              key={img}
              className={`group relative overflow-hidden rounded-btn bg-beige duo ${span}`}
            >
              <SmartImage
                src={ph(img)}
                alt="MAHIDHA worn in real life — @lovedbymahidha"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <span className="absolute bottom-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-[11px] tracking-nav uppercase text-ivory flex items-center gap-1.5">
                <Icons.insta size={13} stroke="#C4A87A" /> @lovedbymahidha
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="font-sans text-[13px] tracking-nav uppercase text-taupe">
            Tag us @lovedbymahidha
          </span>
          <Button variant="secondary">
            <Icons.insta size={16} /> Follow Us
          </Button>
        </div>
      </div>
    </section>
  );
}
