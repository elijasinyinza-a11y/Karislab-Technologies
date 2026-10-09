import Link from "next/link";

type Props = { title: string; summary: string };

/** Interim page so every navigation link has a real destination. Replaced as each page is built. */
export default function PagePlaceholder({ title, summary }: Props) {
  return (
    <section className="bg-ice">
      <div className="page-container py-20 md:py-28">
        <h1 className="max-w-[620px] text-4xl font-bold leading-[1.1] tracking-headline md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-[540px] text-base leading-relaxed md:text-lg">{summary}</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-button border border-outline bg-white px-5 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-sky"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
