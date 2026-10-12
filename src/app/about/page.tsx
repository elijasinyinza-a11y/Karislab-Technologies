import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import HeroDecoration from "@/components/home/HeroDecoration";
import { books, founder, mission, principles, story } from "@/lib/about";
import { contactHref } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "Karislab is a technology and intelligence company helping organisations lead better and making real-world systems work as they should.",
  alternates: { canonical: "/about" },
};

const eyebrow =
  "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-action md:text-[13px]";

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="relative isolate overflow-hidden bg-ice">
        <HeroDecoration />
        <div className="page-container py-14 md:py-20">
          <p className={eyebrow}>
            <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-teal" />
            Who we are
          </p>
          <h1
            id="about-heading"
            className="mt-5 max-w-[760px] text-[36px] font-bold leading-[1.12] tracking-[-0.06rem] text-balance md:mt-6 md:text-5xl md:leading-[1.08]"
          >
            Practical intelligence for organisations and the systems they run.
          </h1>
          <p className="mt-5 max-w-[620px] text-base leading-[1.6] md:mt-6 md:text-lg">
            Karislab is a technology and intelligence company. We bring together technology, data
            and human insight to solve meaningful problems and create lasting value.
          </p>
        </div>
      </section>

      <section aria-labelledby="story-heading" className="bg-white">
        <div className="page-container grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 id="story-heading" className="text-2xl font-bold tracking-[-0.02em] md:text-[32px]">
              Our story
            </h2>
            <span aria-hidden="true" className="mt-5 block h-[3px] w-12 rounded-full bg-teal" />
          </div>
          <div className="space-y-5 text-base leading-[1.7] md:text-[17px]">
            {story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="bg-ice">
        <div className="page-container py-16 md:py-20">
          <div className="mx-auto max-w-[840px] rounded-panel border border-white/70 bg-sky px-6 py-10 text-center md:px-12 md:py-14">
            <h2 id="mission-heading" className="text-xs font-semibold uppercase tracking-[0.08em] text-navy md:text-[13px]">
              Our mission
            </h2>
            <p className="mt-4 text-xl font-semibold leading-[1.45] text-balance text-navy md:text-2xl">
              {mission}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="bg-white">
        <div className="page-container py-16 md:py-20">
          <h2 id="principles-heading" className="text-2xl font-bold tracking-[-0.02em] md:text-[32px]">
            How we work
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {principles.map(({ title, text, Icon }) => (
              <li key={title} className="rounded-[16px] border border-line bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ice text-action-accent">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="founder-heading" className="bg-ice">
        <div className="page-container grid items-start gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[16px] border border-line bg-white lg:mx-0">
            <Image
              src={founder.photo}
              alt={`Portrait of ${founder.name}`}
              width={640}
              height={800}
              sizes="(min-width: 1024px) 340px, 90vw"
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className={eyebrow}>
              <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-teal" />
              Our {founder.role.toLowerCase()}
            </p>
            <h2 id="founder-heading" className="mt-4 text-2xl font-bold tracking-[-0.02em] md:text-[32px]">
              {founder.name}
            </h2>
            <div className="mt-5 max-w-[640px] space-y-4 text-base leading-[1.7] md:text-[17px]">
              {founder.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <h3 className="sr-only">Books</h3>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {books.map((book) => (
                <li key={book.title} className="flex items-start gap-4">
                  <Image
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    width={400}
                    height={600}
                    sizes="112px"
                    className="h-auto w-24 shrink-0 rounded-md shadow-[0_8px_20px_-10px_rgba(7,52,91,0.45)] md:w-28"
                  />
                  <div className="pt-1">
                    <p className="font-semibold leading-snug text-navy">
                      <cite className="not-italic">{book.title}</cite>
                    </p>
                    <p className="mt-1 text-sm leading-snug">{book.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        id="about-cta"
        title="See what we're building"
        text="Explore our platforms, or tell us about the challenge you're working on."
        primary={{ label: "Explore our solutions", href: "/solutions" }}
        secondary={{ label: "Talk to us", href: contactHref }}
      />
    </>
  );
}
