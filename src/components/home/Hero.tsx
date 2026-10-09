import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroDecoration from "@/components/home/HeroDecoration";
import SolutionCards from "@/components/home/SolutionCards";

const buttonBase =
  "inline-flex w-full items-center justify-center gap-2 rounded-button border px-6 py-3.5 text-[15px] font-semibold transition-colors sm:w-auto";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-ice">
      <HeroDecoration />

      <div className="page-container grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:gap-10 xl:gap-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-action md:text-[13px]">
            <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-teal" />
            Technology · Intelligence · Impact
          </p>

          <h1
            id="hero-heading"
            className="mt-5 max-w-[620px] text-[38px] font-bold leading-[1.12] tracking-[-0.06rem] text-balance md:mt-6 md:text-5xl md:leading-[1.08] xl:text-[58px] xl:leading-[1.06] xl:tracking-headline"
          >
            Building intelligent solutions for a changing world.
          </h1>

          <p className="mt-5 max-w-[540px] text-base leading-[1.6] md:mt-6 md:text-lg">
            We bring together technology, data and human insight to solve meaningful problems and
            create lasting value.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
            <Link
              href="/solutions"
              className={`${buttonBase} border-action bg-action text-white hover:border-action-hover hover:bg-action-hover`}
            >
              Explore our solutions
              <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className={`${buttonBase} border-outline bg-white/70 text-navy hover:bg-white`}
            >
              Discover Karislab
            </Link>
          </div>
        </div>

        <SolutionCards />
      </div>
    </section>
  );
}
