"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { brandSVG } from "@/lib/images";

interface SmartImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  style?: CSSProperties;
  ariaHidden?: boolean;
}

/* next/image wrapper that mirrors the original global <img> error fallback:
   any failed load swaps to the branded gradient SVG (guarded so it can't
   loop). Nothing ever renders as a blank box. */
export default function SmartImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
  style,
  ariaHidden,
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);
  const finalSrc = errored ? brandSVG(alt, width || 800, height || 1000) : src;

  const shared = {
    className,
    style,
    priority,
    unoptimized: errored || finalSrc.startsWith("data:"),
    onError: () => setErrored(true),
    "aria-hidden": ariaHidden || undefined,
  } as const;

  if (fill) {
    return <Image src={finalSrc} alt={alt} fill sizes={sizes || "100vw"} {...shared} />;
  }
  return (
    <Image
      src={finalSrc}
      alt={alt}
      width={width || 800}
      height={height || 1000}
      sizes={sizes}
      {...shared}
    />
  );
}
