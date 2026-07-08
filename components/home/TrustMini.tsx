import { Icons } from "@/components/ui/Icons";

// Mirrors the shop.mahidha.com trust strip.
const items: [string, string][] = [
  ["pearlString", "Handpicked Pearls"],
  ["shieldCheck", "S925 Sterling Silver"],
  ["hammer", "Artisan Crafted"],
  ["medal", "Designed to Last"],
];

export default function TrustMini() {
  return (
    <div className="bg-pearl border-y border-charcoal/8">
      <div className="max-w-wrap mx-auto px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
        {items.map(([ic, t]) => {
          const I = Icons[ic];
          return (
            <div key={t} className="flex items-center justify-center gap-2.5 text-charcoal">
              <I size={22} stroke="#C4A87A" />
              <span className="font-sans text-[13px] font-semibold tracking-nav uppercase leading-tight">
                {t}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
