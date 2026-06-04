import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { hrefFor } from "@/lib/utils";

export default function CampaignCTA() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <SmartImage
        src={ph("CAMPAIGN — full-width editorial, woman in pearls, cinematic")}
        alt="Campaign — full-width editorial, woman in pearls, cinematic"
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative max-w-wrap mx-auto px-5 py-28 md:py-36 text-center">
        <h2 className="font-serif text-[34px] md:text-[56px] leading-[1.05] text-ivory max-w-3xl mx-auto">
          Step into luxury — upgrade your style with timeless elegance.
        </h2>
        <Button variant="light" className="mt-9" href={hrefFor("list", { cat: "All Jewellery" })}>
          Shop Now
        </Button>
      </div>
    </section>
  );
}
