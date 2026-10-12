import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroDecoration from "@/components/home/HeroDecoration";
import BookCover from "@/components/insights/BookCover";
import { articles, readingMinutes } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles on productivity, leadership and workplace culture, adapted from the books of Karislab founder Elijah Sinyinza.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <section aria-labelledby="insights-heading" className="relative isolate overflow-hidden bg-ice">
        <HeroDecoration />
        <div className="page-container py-14 md:py-20">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-action md:text-[13px]">
            <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-teal" />
            Insights
          </p>
          <h1
            id="insights-heading"
            className="mt-5 max-w-[720px] text-[36px] font-bold leading-[1.12] tracking-[-0.06rem] text-balance md:mt-6 md:text-5xl md:leading-[1.08]"
          >
            Ideas on time, leadership and culture.
          </h1>
          <p className="mt-5 max-w-[620px] text-base leading-[1.6] md:mt-6 md:text-lg">
            Articles adapted from the books of our founder, Elijah Sinyinza, exploring the principles
            behind Karislab&apos;s work.
          </p>
        </div>
      </section>

      <section aria-label="Articles" className="bg-white">
        <div className="page-container py-16 md:py-20">
          <ul className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group flex h-full flex-col rounded-[16px] border border-line bg-white p-6 transition-colors hover:border-action-accent md:p-7"
                >
                  <span className="inline-flex w-fit rounded-full bg-sky px-3 py-1 text-xs font-semibold text-navy">
                    {article.topic}
                  </span>
                  <span className="mt-4 block text-xl font-bold leading-snug tracking-[-0.01em] text-navy">
                    {article.title}
                  </span>
                  <span className="mt-3 block flex-1 text-[15px] leading-[1.6]">{article.summary}</span>
                  <span className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <BookCover book={article.book} className="w-11" compact />
                    <span className="min-w-0 flex-1 text-[13px] leading-snug">
                      From <cite className="font-semibold not-italic text-navy">{article.book.title}</cite>
                      <span className="block">{readingMinutes(article)} min read</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ice text-action transition-colors group-hover:bg-action group-hover:text-white"
                    >
                      <ArrowRight size={16} strokeWidth={2.25} />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
