export type ProductId = "ocam" | "gold" | "caspa";

/** Second colours inside the glyphs. Decorative only, never used for text. */
const CASCADE_BARS = "#9ed8ef";
const GROWTH_ARROW = "#f0c46a";

type Props = {
  product: ProductId;
  /** Rendered width and height in pixels. */
  size?: number;
  className?: string;
};

/**
 * The signature glyph for each product, drawn for a white stroke on a blue tile.
 * OCAM: upward spiral. GOLD: an O opening into a growth arrow. CASPA: an A with
 * cascading crossbars. Strokes use currentColor, so the tile sets the colour.
 */
export default function ProductGlyph({ product, size = 26, className }: Props) {
  const common = {
    width: size,
    height: size,
    "aria-hidden": true,
    focusable: false,
    className,
    fill: "none",
  } as const;

  if (product === "ocam") {
    return (
      <svg viewBox="-2 -2 52 52" {...common}>
        <path
          d="M24 1.5A22.5 22.5 0 0 1 24 46.5A18.5 18.5 0 0 1 24 9.5A13 13 0 0 1 24 35.5A7.5 7.5 0 0 1 24 20.5"
          stroke="currentColor"
          strokeWidth={6.5}
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (product === "gold") {
    return (
      <svg viewBox="-2 -8 58 58" {...common}>
        <path
          d="M45.25 18.3A22 22 0 1 1 33.3 4.06"
          stroke="currentColor"
          strokeWidth={7.5}
          strokeLinecap="round"
        />
        <path
          d="M36 12L52-4M42-4H52V6"
          stroke={GROWTH_ARROW}
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="-2 -2 52 52" {...common}>
      <path d="M2 48L24 2L46 48" stroke="currentColor" strokeWidth={7.5} strokeLinejoin="round" />
      <path d="M14 28H30M20 38H40" stroke={CASCADE_BARS} strokeWidth={6} />
    </svg>
  );
}
