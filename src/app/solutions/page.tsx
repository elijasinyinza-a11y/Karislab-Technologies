import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import HeroDecoration from "@/components/home/HeroDecoration";
import PlatformCard from "@/components/solutions/PlatformCard";
import { contactHref } from "@/lib/navigation";
import { solutionGroups } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Karislab platforms for leadership, culture and learning, and digital infrastructure for water utilities and payments.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section aria-labelledby="solutions-heading" className="relative isolate overflow-hidden bg-ice">
        <HeroDecoration />
        <div className="page-container py-14 md:py-20">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-action md:text-[13px]">
            <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-teal" />
            Our solutions
          </p>
          <h1
            id="solutions-heading"
            className="mt-5 max-w-[720px] text-[36px] font-bold leading-[1.12] tracking-[-0.06rem] text-balance md:mt-6 md:text-5xl md:leading-[1.08]"
          >
            One ecosystem, built platform by platform.
          </h1>
          <p className="mt-5 max-w-[620px] text-base leading-[1.6] md:mt-6 md:text-lg">
            Karislab works in two areas: intelligent platforms that strengthen how organisations
            lead, learn and perform, and digital infrastructure that makes real-world systems work
            better. KarisMind™ launches first, with GOLD® and OCAM.
          </p>

          <nav aria-label="Solution areas" className="mt-8">
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {solutionGroups.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-button border border-outline bg-white/70 px-5 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-white sm:w-auto"
                  >
                    {title}
                    <ArrowDown size={16} strokeWidth={2.25} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {solutionGroups.map(({ id, title, summary, Icon, tileClass, platforms }, index) => (
        <section
          key={id}
          id={id}
          aria-labelledby={`${id}-heading`}
          className={`scroll-mt-4 ${index % 2 === 0 ? "bg-white" : "bg-ice"}`}
        >
          <div className="page-container py-16 md:py-20">
            <div className="flex items-center gap-4">
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white ${tileClass}`}
              >
                <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-[-0.02em] md:text-[32px]">
                  {title}
                </h2>
                <p className="mt-1 text-base md:text-lg">{summary}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {platforms.map((platform) => (
                <PlatformCard key={platform.id} platform={platform} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        id="solutions-cta"
        title="Not sure which solution fits?"
        text="Tell us about the challenge you're working on and we'll point you in the right direction."
        primary={{ label: "Talk to us", href: contactHref }}
      />
    </>
  );
}
