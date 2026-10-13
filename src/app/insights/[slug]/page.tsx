import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import ArticleBody from "@/components/insights/ArticleBody";
import BookCover from "@/components/insights/BookCover";
import { articles, getArticle, readingMinutes } from "@/content/insights";
import { founder } from "@/lib/about";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/insights/${article.slug}` },
    authors: [{ name: founder.name }],
    openGraph: { type: "article", title: article.title, description: article.summary },
    twitter: { title: article.title, description: article.summary },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <article aria-labelledby="article-heading">
        <header className="bg-ice">
          <div className="page-container py-12 md:py-16">
            <div className="mx-auto max-w-[760px]">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold text-action hover:text-action-hover"
              >
                <ArrowLeft size={16} strokeWidth={2.25} aria-hidden="true" />
                All insights
              </Link>
              <p className="mt-8">
                <span className="inline-flex rounded-full bg-sky px-3 py-1 text-xs font-semibold text-navy">
                  {article.topic}
                </span>
              </p>
              <h1
                id="article-heading"
                className="mt-4 text-[34px] font-bold leading-[1.12] tracking-[-0.05rem] text-balance md:text-[46px] md:leading-[1.08]"
              >
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-[1.6] md:text-xl">{article.summary}</p>
              <p className="mt-6 text-sm">
                <span className="font-semibold text-navy">{founder.name}</span>
                <span aria-hidden="true"> · </span>
                {readingMinutes(article)} min read
              </p>
            </div>
          </div>
        </header>

        <div className="bg-white">
          <div className="page-container py-12 md:py-16">
            <div className="mx-auto max-w-[760px]">
              <ArticleBody blocks={article.body} />

              <aside
                aria-label="Source"
                className="mt-14 flex items-center gap-5 rounded-[16px] border border-line bg-ice p-5 md:p-6"
              >
                <BookCover book={article.book} className="w-16 md:w-20" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-action">
                    Adapted from
                  </p>
                  <p className="mt-1 font-semibold leading-snug text-navy">
                    <cite className="not-italic">{article.book.title}</cite>
                  </p>
                  <p className="mt-1 text-sm leading-snug">
                    {article.book.subtitle}. By {founder.name}, {article.book.publisher}.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-heading" className="bg-ice">
        <div className="page-container py-14 md:py-16">
          <h2 id="more-heading" className="text-2xl font-bold tracking-[-0.02em]">
            More insights
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex h-full items-center gap-4 rounded-[16px] border border-line bg-white p-5 transition-colors hover:border-action-accent"
                >
                  <span className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-action">{a.topic}</span>
                    <span className="mt-1 block text-lg font-semibold leading-snug text-navy">{a.title}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ice text-action transition-colors group-hover:bg-action group-hover:text-white"
                  >
                    <ArrowRight size={16} strokeWidth={2.25} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        id="article-cta"
        title="Put these principles to work"
        text="OCAM™ and GOLD™ bring these ideas on culture and leadership into practical tools for your organisation."
        primary={{ label: "Explore our solutions", href: "/solutions#instruments" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </>
  );
}
