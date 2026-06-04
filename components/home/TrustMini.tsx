import { Icons } from "@/components/ui/Icons";

const items: [string, string][] = [
  ["gem", "Real Pearls"],
  ["shield", "Sterling Silver"],
  ["hand", "Handcrafted"],
  ["feather", "Lightweight"],
];

export default function TrustMini() {
  return (
    <div className="bg-pearl border-y border-charcoal/8">
      <div className="max-w-wrap mx-auto px-5 py-5 grid grid-cols-2 sm:grid-cols-4 gap-y-4">
        {items.map(([ic, t]) => {
          const I = Icons[ic];
          return (
            <div key={t} className="flex items-center justify-center gap-2.5 text-charcoal">
              <I size={20} stroke="#C4A87A" />
              <span className="font-sans text-[12px] tracking-nav uppercase">{t}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
