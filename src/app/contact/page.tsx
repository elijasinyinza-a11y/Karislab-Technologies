import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <PagePlaceholder
      title="Contact Karislab"
      summary="We're preparing this page. It will list the best ways to reach our team."
    />
  );
}
