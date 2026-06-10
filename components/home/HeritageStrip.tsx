import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { hrefFor } from "@/lib/utils";

const pts: [string, string][] = [
  ["gem", "Heritage"],
  ["hand", "Handcrafted"],
  ["drop", "Real Pearls"],
  ["shield", "Sterling Silver"],
];

export default function HeritageStrip() {
  return (
    <section className="bg-navy text-ivory overflow-hidden">
      <div className="max-w-wrap mx-auto grid lg:grid-cols-2 items-center">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full duo">
          <SmartImage
            src={ph("HERITAGE — karigar hands crafting pearl jewellery, warm light")}
            alt="Heritage — karigar hands crafting pearl jewellery in warm light"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-10 right-5 lg:right-[-44px] w-32 h-40 lg:w-44 lg:h-56 rounded-btn overflow-hidden ring-4 ring-navy shadow-xl hidden sm:block z-10">
            <SmartImage
              src={ph("INSET — pearl and silver detail macro")}
              alt="Inset — pearl and silver detail, macro"
              fill
              sizes="176px"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <Reveal className="px-5 sm:px-12 py-16 md:py-24">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
            Our heritage
          </p>
          <h2 className="font-serif text-[34px] md:text-[50px] leading-[1.05] text-ivory">
            Inspired by heritage.
            <br />
            Designed for now.
          </h2>
          <p className="mt-6 text-ivory/75 text-[16px] md:text-[18px] leading-[1.8] max-w-xl">
            Rooted in the rich pearl legacy of Hyderabad and inspired by the elegance of the
            Nizam era. Handcrafted by skilled karigars using time-honoured techniques and
            modern design sensibilities.
          </p>
          <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-y-6">
            {pts.map(([ic, t]) => {
              const I = Icons[ic];
              return (
                <div key={t} className="flex flex-col items-center text-center gap-2">
                  <I size={26} stroke="#C4A87A" />
                  <span className="font-sans text-[12px] tracking-nav uppercase text-ivory/85">
                    {t}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="ghostLight" href={hrefFor("story")}>
              Our Story
            </Button>
            <Button variant="ghostLight" href={hrefFor("pearls")}>
              Know Your Pearls
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
