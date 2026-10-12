import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Action = { label: string; href: string };

type Props = {
  id: string;
  title: string;
  text: string;
  primary: Action;
  secondary?: Action;
};

/** Navy call-to-action band used at the bottom of inner pages. */
export default function CtaBand({ id, title, text, primary, secondary }: Props) {
  return (
    <section aria-labelledby={id} className="bg-navy text-white">
      <div className="page-container flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <h2 id={id} className="text-2xl font-bold text-white md:text-[28px]">
            {title}
          </h2>
          <p className="mt-2 max-w-[560px] text-base text-white/85 md:text-lg">{text}</p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-sky focus-visible:outline-white"
          >
            {primary.label}
            <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden="true" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-button border border-white/40 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-white"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
