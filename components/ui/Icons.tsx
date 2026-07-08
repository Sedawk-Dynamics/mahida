import type { ReactElement, ReactNode } from "react";

/* ---------- Thin gold-outline line icons (celestial-minimal) ----------
   Ported verbatim from the original. Note: like the original <Ico>, this
   intentionally does NOT forward `className` to the <svg> — keeping the
   rendered output identical to the source site. */
export interface IcoProps {
  d?: string;
  size?: number;
  stroke?: string;
  sw?: number | string;
  fill?: string;
  children?: ReactNode;
  label?: string;
  className?: string; // accepted for API parity; not applied (matches original)
}

export const Ico = ({
  d,
  size = 22,
  stroke = "currentColor",
  sw = 1.3,
  fill = "none",
  children,
  label,
}: IcoProps): ReactElement => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden={label ? undefined : true}
    role={label ? "img" : undefined}
    focusable="false"
  >
    {label && <title>{label}</title>}
    {d ? <path d={d} /> : children}
  </svg>
);

type IconFn = (p: IcoProps) => ReactElement;

export const Icons: Record<string, IconFn> = {
  search: (p) => (
    <Ico {...p}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Ico>
  ),
  account: (p) => (
    <Ico {...p}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5S20 17 20 21" />
    </Ico>
  ),
  heart: (p) => (
    <Ico {...p}>
      <path d="M12 20s-7-4.6-9.2-9C1.3 7.8 3 4.7 6.2 4.7c2 0 3.3 1.2 3.8 2.2.5-1 1.8-2.2 3.8-2.2 3.2 0 4.9 3.1 3.4 6.3C19 15.4 12 20 12 20z" />
    </Ico>
  ),
  bag: (p) => (
    <Ico {...p}>
      <path d="M6 8h12l1 12H5L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </Ico>
  ),
  compare: (p) => (
    <Ico {...p}>
      <path d="M16 4l4 4-4 4" />
      <path d="M20 8H8" />
      <path d="M8 20l-4-4 4-4" />
      <path d="M4 16h12" />
    </Ico>
  ),
  home: (p) => (
    <Ico {...p}>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
    </Ico>
  ),
  menu: (p) => (
    <Ico {...p}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </Ico>
  ),
  close: (p) => (
    <Ico {...p}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </Ico>
  ),
  star: (p) => (
    <Ico fill="currentColor" sw="0.5" {...p}>
      <path d="M12 3.2l2.5 5.4 5.9.7-4.4 4 1.2 5.8L12 16.9 6.8 19.1 8 13.3 3.6 9.3l5.9-.7L12 3.2z" />
    </Ico>
  ),
  moon: (p) => (
    <Ico {...p}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z" />
    </Ico>
  ),
  sun: (p) => (
    <Ico {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Ico>
  ),
  sparkle: (p) => (
    <Ico {...p}>
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" />
    </Ico>
  ),
  gem: (p) => (
    <Ico {...p}>
      <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
      <path d="M3 8h18M9 3l-3 5 6 13 6-13-3-5" />
    </Ico>
  ),
  hand: (p) => (
    <Ico {...p}>
      <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V11M10 10.5v-7a1.5 1.5 0 0 1 3 0V11M13 4.5a1.5 1.5 0 0 1 3 0V12M16 7.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.5a5 5 0 0 1-3.6-1.5L4 16.2a1.6 1.6 0 0 1 2.3-2.2L8 15.5" />
    </Ico>
  ),
  feather: (p) => (
    <Ico {...p}>
      <path d="M20 4C11 4 4 11 4 20M20 4c0 8-5 13-13 13M20 4l-6 6M14 10H9M11 13H8" />
    </Ico>
  ),
  leaf: (p) => (
    <Ico {...p}>
      <path d="M5 19c0-9 6-14 14-14 0 9-5 14-14 14zM5 19c4-4 6-6 9-7" />
    </Ico>
  ),
  shield: (p) => (
    <Ico {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </Ico>
  ),
  /* Trust-strip icons — mirror the shop.mahidha.com set */
  pearlString: (p) => (
    <Ico {...p}>
      <path d="M5 6C5 12 8 15 12 15S19 12 19 6" />
      <circle cx="8.4" cy="14.2" r="0.9" />
      <circle cx="15.6" cy="14.2" r="0.9" />
      <path d="M12 15.2v0.7" />
      <circle cx="12" cy="18.2" r="2.3" />
    </Ico>
  ),
  shieldCheck: (p) => (
    <Ico {...p}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Ico>
  ),
  hammer: (p) => (
    <Ico {...p}>
      <path d="m15 12-8.5 8.5a2.121 2.121 0 1 1-3-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h.86c.85 0 1.65.33 2.25.93l1.25 1.25" />
    </Ico>
  ),
  medal: (p) => (
    <Ico {...p}>
      <path d="M6 3h12l4 6-10 12L2 9Z" />
      <path d="M2 9h20" />
      <path d="m10 3-2 6 4 12 4-12-2-6" />
    </Ico>
  ),
  gift: (p) => (
    <Ico {...p}>
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M4 13h16M12 9v11M12 9S10.5 4 8 5s.5 4 4 4M12 9s1.5-5 4-4-.5 4-4 4" />
    </Ico>
  ),
  truck: (p) => (
    <Ico {...p}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </Ico>
  ),
  ruler: (p) => (
    <Ico {...p}>
      <rect x="3" y="8" width="18" height="8" rx="1" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </Ico>
  ),
  drop: (p) => (
    <Ico {...p}>
      <path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3z" />
    </Ico>
  ),
  box: (p) => (
    <Ico {...p}>
      <path d="M3 8l9-4 9 4-9 4-9-4z" />
      <path d="M3 8v8l9 4 9-4V8M12 12v8" />
    </Ico>
  ),
  clock: (p) => (
    <Ico {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </Ico>
  ),
  chat: (p) => (
    <Ico {...p}>
      <path d="M4 5h16v11H9l-5 4V5z" />
    </Ico>
  ),
  arrow: (p) => (
    <Ico {...p}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <path d="M13 6l6 6-6 6" />
    </Ico>
  ),
  chevron: (p) => (
    <Ico {...p}>
      <path d="M9 6l6 6-6 6" />
    </Ico>
  ),
  plus: (p) => (
    <Ico {...p}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </Ico>
  ),
  minus: (p) => (
    <Ico {...p}>
      <line x1="5" y1="12" x2="19" y2="12" />
    </Ico>
  ),
  insta: (p) => (
    <Ico {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </Ico>
  ),
  fb: (p) => (
    <Ico {...p}>
      <path d="M14 8h2V5h-2c-2 0-3 1.3-3 3.2V11H9v3h2v6h3v-6h2.2l.5-3H14V8.6c0-.4.3-.6.7-.6z" />
    </Ico>
  ),
  linkedin: (p) => (
    <Ico {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
    </Ico>
  ),
  xcom: (p) => (
    <Ico {...p}>
      <path d="M4 4l16 16M20 4L4 20" />
    </Ico>
  ),
  pinterest: (p) => (
    <Ico {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 19l2-7M10.6 11.2a2.3 2.3 0 1 1 3.1 1.9c-1 .5-2.3.1-2.6-1" />
    </Ico>
  ),
  pin: (p) => (
    <Ico {...p}>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Ico>
  ),
  mail: (p) => (
    <Ico {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Ico>
  ),
  phone: (p) => (
    <Ico {...p}>
      <path d="M5 4h3l2 5-2 1.5a11 11 0 0 0 5 5L17 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </Ico>
  ),
};
