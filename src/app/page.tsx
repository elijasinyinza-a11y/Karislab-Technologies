import type { Metadata } from "next";
import ClosingStatement from "@/components/home/ClosingStatement";
import Hero from "@/components/home/Hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/karislab-mark-512.png`,
  description: site.description,
  ...(site.email && { email: site.email }),
  ...(site.phone && { telephone: site.phone }),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <Hero />
      <ClosingStatement />
    </>
  );
}
