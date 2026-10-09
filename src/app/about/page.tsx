import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <PagePlaceholder
      title="About Karislab"
      summary="We're preparing this page. It will introduce who we are, what we stand for and how we work."
    />
  );
}
