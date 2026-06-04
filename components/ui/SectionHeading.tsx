import type { ReactNode } from "react";

interface SectionHeadingProps {
  overline?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  sub,
  center = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center mx-auto max-w-2xl" : ""} ${className}`}>
      {overline && (
        <p className="font-sans text-[12px] tracking-nav uppercase mb-4 text-gold">
          {overline}
        </p>
      )}
      <h2
        className={`font-serif leading-[1.05] text-[30px] md:text-[48px] ${
          light ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-[16px] md:text-[18px] leading-[1.7] ${
            light ? "text-ivory/75" : "text-taupe"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
