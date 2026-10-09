import Link from "next/link";
import { contactHref } from "@/lib/navigation";

export default function TopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="page-container flex h-10 items-center justify-between gap-4 text-xs md:h-11 md:text-[13px]">
        <p className="font-medium tracking-[0.06em]">KARISLAB · DIGITAL INNOVATION</p>
        <Link
          href={contactHref}
          className="shrink-0 rounded-sm transition-colors hover:text-sky focus-visible:outline-white"
        >
          Contact us <span aria-hidden="true">↗︎</span>
        </Link>
      </div>
    </div>
  );
}
