import type { ReactNode } from "react";

type Tone = "navy" | "sold" | "gold";

const tones: Record<Tone, string> = {
  navy: "bg-navy text-pearl",
  sold: "bg-taupe text-ivory",
  gold: "bg-gold text-navy",
};

export default function Badge({
  children,
  tone = "navy",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`font-sans text-[10px] tracking-nav uppercase px-2.5 py-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
