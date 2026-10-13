import { Fragment, type ReactNode } from "react";
import ProductGlyph, { type ProductId } from "@/components/brand/ProductGlyph";

export const productNames: Record<ProductId, string> = {
  ocam: "OCAM",
  gold: "GOLD",
  caspa: "CASPA",
};

/** "™" until a name is registered, then switch it to "®" here and nowhere else. */
export const productSymbols: Record<ProductId, "™" | "®"> = {
  ocam: "™",
  gold: "™",
  caspa: "™",
};

const sizes = {
  md: { tile: "h-12 w-12 rounded-[11px]", glyph: 26, word: "text-[26px]", gap: "gap-3.5" },
  lg: { tile: "h-16 w-16 rounded-[14px]", glyph: 34, word: "text-[34px] md:text-[40px]", gap: "gap-4" },
} as const;

type MarkProps = {
  product: ProductId;
  size?: keyof typeof sizes;
  /** Show the ™/® symbol. Use it on the first or most prominent mention on a page. */
  symbol?: boolean;
  className?: string;
};

/** Tile plus wordmark, for card headings and product page headers. */
export default function ProductMark({ product, size = "md", symbol = true, className = "" }: MarkProps) {
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <ProductTile product={product} className={s.tile} glyphSize={s.glyph} />
      <span className={`font-wordmark font-semibold leading-none tracking-[0.1em] text-navy ${s.word}`}>
        {productNames[product]}
        {symbol && (
          <sup className="ml-[-0.05em] align-super text-[0.4em] font-normal tracking-normal opacity-60">
            {productSymbols[product]}
          </sup>
        )}
      </span>
    </span>
  );
}

type TileProps = { product: ProductId; className?: string; glyphSize?: number };

/** The blue tile on its own, for small spaces such as nav items and lists. */
export function ProductTile({ product, className = "h-10 w-10 rounded-[9px]", glyphSize = 22 }: TileProps) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center bg-action text-white ${className}`}
    >
      <ProductGlyph product={product} size={glyphSize} />
    </span>
  );
}

type NameProps = { product: ProductId; symbol?: boolean };

/** A product name inside running text: slightly smaller and tracked so it doesn't shout. */
export function ProductName({ product, symbol = false }: NameProps) {
  return (
    <span className="whitespace-nowrap text-[0.92em] font-semibold tracking-[0.06em] text-navy">
      {productNames[product]}
      {symbol && (
        <sup className="ml-px text-[0.6em] font-normal tracking-normal opacity-60">
          {productSymbols[product]}
        </sup>
      )}
    </span>
  );
}

const namePattern = /\b(OCAM|GOLD|CASPA)(™|®)?/g;
const idByName: Record<string, ProductId> = { OCAM: "ocam", GOLD: "gold", CASPA: "caspa" };

/**
 * Renders a plain string with every product name styled by ProductName.
 * Lets copy stay as plain strings in src/lib while the page shows the brand treatment.
 * Only the first mention of each product keeps its symbol.
 */
export function BrandedText({ children }: { children: string }) {
  const seen = new Set<ProductId>();
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of children.matchAll(namePattern)) {
    const index = match.index ?? 0;
    const product = idByName[match[1]];
    parts.push(children.slice(last, index));
    parts.push(<ProductName key={index} product={product} symbol={!seen.has(product)} />);
    seen.add(product);
    last = index + match[0].length;
  }
  parts.push(children.slice(last));
  return <>{parts.map((part, i) => <Fragment key={i}>{part}</Fragment>)}</>;
}
