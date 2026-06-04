import { Icons } from "./Icons";

interface StarsProps {
  value?: number;
  size?: number;
}

export default function Stars({ value = 5, size = 14 }: StarsProps) {
  return (
    <span
      className="inline-flex items-center gap-0.5 text-gold"
      aria-label={`Rated ${value} out of 5`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Icons.star key={i} size={size} stroke="#C4A87A" />
      ))}
      <span className="ml-1 font-sans text-[12px] text-taupe">{value.toFixed(1)}</span>
    </span>
  );
}
