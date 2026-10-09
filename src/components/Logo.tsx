import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** Intrinsic width in pixels. Height follows the logo's proportions. */
  width?: number;
  /** Classes for the link wrapper. */
  className?: string;
  /** Classes for the image, e.g. responsive widths. */
  imageClassName?: string;
};

// karislab-logo.svg viewBox is 1537 × 482.
const ASPECT = 482 / 1537;

export default function Logo({ width = 170, className, imageClassName }: LogoProps) {
  return (
    <Link href="/" aria-label="Karislab home" className={className}>
      <Image
        src="/brand/karislab-logo.svg"
        alt="Karislab"
        width={width}
        height={Math.round(width * ASPECT)}
        className={imageClassName}
        priority
      />
    </Link>
  );
}
