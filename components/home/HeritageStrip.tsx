import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";

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
            src="/img/workers.jpeg"
            alt="Skilled karigars handcrafting pearl jewellery"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full h-full object-cover"
          />
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
          <div className="mt-10 flex flex-nowrap items-center gap-3 overflow-x-auto no-bar">
            <Button
              variant="ghostLight"
              href="https://www.mahidha.com/our-story"
              className="shrink-0 whitespace-nowrap !px-5"
            >
              Our Story
            </Button>
            <Button
              variant="ghostLight"
              href="https://www.mahidha.com/know-your-pearls"
              className="shrink-0 whitespace-nowrap !px-5"
            >
              Know Your Pearls
            </Button>
            <Button
              variant="ghostLight"
              href="https://www.mahidha.com/artisan-story"
              className="shrink-0 whitespace-nowrap !px-5"
            >
              Artisan Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
