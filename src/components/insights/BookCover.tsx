import Image from "next/image";
import type { SourceBook } from "@/content/books";

/** Book cover image, or a typographic tile for books without cover art. */
export default function BookCover({
  book,
  className = "w-20",
  compact = false,
}: {
  book: SourceBook;
  className?: string;
  /** Small thumbnails show initials instead of the full title. */
  compact?: boolean;
}) {
  if (book.cover) {
    return (
      <Image
        src={book.cover}
        alt={`Cover of ${book.title}`}
        width={400}
        height={600}
        sizes="120px"
        className={`h-auto shrink-0 rounded-md shadow-[0_8px_20px_-10px_rgba(7,52,91,0.45)] ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Cover of ${book.title}`}
      className={`flex aspect-[2/3] shrink-0 flex-col items-center justify-center rounded-md bg-navy p-2 text-center shadow-[0_8px_20px_-10px_rgba(7,52,91,0.45)] ${className}`}
    >
      <span aria-hidden="true" className={`h-[2px] rounded-full bg-teal ${compact ? "mb-1 w-3" : "mb-2 w-6"}`} />
      <span
        aria-hidden="true"
        className={`font-bold uppercase leading-tight text-white ${compact ? "text-[10px] tracking-[0.06em]" : "text-[10px] tracking-[0.04em]"}`}
      >
        {compact
          ? book.title
              .split(" ")
              .filter((w) => w.length > 3)
              .map((w) => w[0])
              .join("")
          : book.title}
      </span>
    </div>
  );
}
