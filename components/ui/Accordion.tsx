"use client";

import { useState, type ReactNode } from "react";
import { Icons } from "./Icons";

export interface AccordionItem {
  q: ReactNode;
  a: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  single?: boolean;
  defaultOpen?: number[];
}

export default function Accordion({
  items,
  single = false,
  defaultOpen = [],
}: AccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen));
  const toggle = (i: number) =>
    setOpen((s) => {
      const n = new Set(single ? [] : s);
      if (s.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  return (
    <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-[21px] md:text-[23px] text-charcoal">
                {it.q}
              </span>
              <span
                className={`text-gold shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <Icons.plus size={20} />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-6 text-taupe text-[16px] leading-[1.8] max-w-3xl">
                {it.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
