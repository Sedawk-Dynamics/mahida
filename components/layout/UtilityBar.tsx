"use client";

import { useEffect, useState } from "react";
import { Icons } from "@/components/ui/Icons";

const msgs = [
  "Free Delivery Across India",
  "Jewelry for quiet confidence",
  "Luxury delivered to your doorstep",
  "Worn. Lived in. Loved.",
  "Real pearls, Handcrafted and Sterling Silver",
];

export default function UtilityBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % msgs.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="bg-navy text-ivory/90">
      <div className="max-w-wrap mx-auto px-5 h-9 flex items-center justify-center text-center">
        <p
          key={i}
          className="font-sans text-[11px] tracking-nav uppercase reveal in flex items-center gap-2"
        >
          <Icons.sparkle size={13} stroke="#C4A87A" /> {msgs[i]}
        </p>
      </div>
    </div>
  );
}
