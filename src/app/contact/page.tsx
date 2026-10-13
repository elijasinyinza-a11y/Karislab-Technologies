import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import HeroDecoration from "@/components/home/HeroDecoration";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Karislab, including requests for CASPA™ pilot access.",
  alternates: { canonical: "/contact" },
};

type Props = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

const intro = {
  general: {
    heading: "Talk to Karislab",
    text: "Tell us about the challenge you're working on and we'll point you in the right direction.",
  },
  pilot: {
    heading: "Request pilot access to CASPA™",
    text: "CASPA™ is in pilot with a small number of organisations. Call us and tell us about your organisation and the strategy you want to put into action.",
  },
};

function Intro({ heading, text }: { heading: string; text: string }) {
  return (
    <div>
      <h1
        id="contact-heading"
        className="max-w-[640px] text-[36px] font-bold leading-[1.12] tracking-[-0.06rem] text-balance md:text-5xl md:leading-[1.08]"
      >
        {heading}
      </h1>
      <p className="mt-5 max-w-[560px] text-base leading-[1.6] md:mt-6 md:text-lg">{text}</p>
    </div>
  );
}

/** Reads ?topic= so the CASPA™ pilot button opens this page with its own heading. */
async function TopicIntro({ searchParams }: Props) {
  const { topic } = await searchParams;
  return <Intro {...(topic === "caspa-pilot" ? intro.pilot : intro.general)} />;
}

export default function ContactPage({ searchParams }: Props) {
  return (
    <section aria-labelledby="contact-heading" className="relative isolate overflow-hidden bg-ice">
      <HeroDecoration />
      <div className="page-container grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <Suspense fallback={<Intro {...intro.general} />}>
          <TopicIntro searchParams={searchParams} />
        </Suspense>

        <dl className="self-start rounded-panel border border-white/70 bg-white p-6 md:p-8">
          {site.phone && (
            <div className="flex gap-4">
              <Phone size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-action-accent" />
              <div>
                <dt className="text-sm font-semibold text-navy">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={telHref(site.phone)}
                    className="text-[17px] font-semibold text-action hover:text-action-hover"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </div>
          )}
          {site.email && (
            <div className="mt-6 flex gap-4 border-t border-line pt-6">
              <Mail size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-action-accent" />
              <div>
                <dt className="text-sm font-semibold text-navy">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[17px] font-semibold break-all text-action hover:text-action-hover"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </div>
          )}
          {site.address.length > 0 && (
            <div className="mt-6 flex gap-4 border-t border-line pt-6">
              <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-action-accent" />
              <div>
                <dt className="text-sm font-semibold text-navy">Address</dt>
                <dd className="mt-1 not-italic">
                  <address className="text-[15px] leading-[1.6] not-italic">
                    {site.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
            </div>
          )}
        </dl>
      </div>
    </section>
  );
}
