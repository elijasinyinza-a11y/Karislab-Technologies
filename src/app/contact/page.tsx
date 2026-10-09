import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach the Karislab team.",
  alternates: { canonical: "/contact" },
  // Interim page: keep out of search results until the real content is live.
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Contact Karislab"
      summary="We're preparing this page. It will list the best ways to reach our team."
    />
  );
}
