/** Low-contrast connected lines behind the hero content. Purely decorative. */
export default function HeroDecoration() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g stroke="var(--color-action-accent)" strokeOpacity="0.14" strokeWidth="1.25">
        <path d="M-40 520 C 260 420, 460 640, 760 560 S 1240 300, 1500 360" />
        <path d="M-40 580 C 300 500, 520 700, 820 610 S 1260 380, 1500 430" />
        <path d="M720 -20 C 900 140, 1080 60, 1200 200 S 1380 420, 1500 380" />
      </g>
      <g stroke="var(--color-teal)" strokeOpacity="0.18" strokeWidth="1.25">
        <path d="M940 40 L1110 150 L1290 96 L1400 230" />
        <path d="M1110 150 L1180 300 L1350 360" />
      </g>
      <g fill="var(--color-teal)" fillOpacity="0.28">
        <circle cx="940" cy="40" r="4" />
        <circle cx="1110" cy="150" r="5" />
        <circle cx="1290" cy="96" r="4" />
        <circle cx="1400" cy="230" r="4" />
        <circle cx="1180" cy="300" r="4" />
        <circle cx="1350" cy="360" r="5" />
      </g>
      <circle cx="1240" cy="520" r="220" fill="var(--color-sky)" fillOpacity="0.45" />
    </svg>
  );
}
