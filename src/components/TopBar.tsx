import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contactHref } from "@/lib/navigation";
import { site, telHref } from "@/lib/site";

const linkClass =
  "inline-flex items-center gap-2 rounded-sm transition-colors hover:text-sky focus-visible:outline-white";

export default function TopBar() {
  const hasContact = Boolean(site.email || site.phone);

  return (
    <div className="bg-navy text-white">
      <div className="page-container flex h-10 items-center justify-between gap-4 text-xs md:h-11 md:text-[13px]">
        {hasContact ? (
          <ul className="flex min-w-0 items-center gap-5">
            {site.email && (
              <li className="min-w-0">
                <a href={`mailto:${site.email}`} className={linkClass}>
                  <Mail size={14} aria-hidden="true" className="shrink-0" />
                  <span className="truncate">{site.email}</span>
                </a>
              </li>
            )}
            {site.phone && (
              <li className={site.email ? "hidden md:block" : undefined}>
                <a href={telHref(site.phone)} className={linkClass}>
                  <Phone size={14} aria-hidden="true" className="shrink-0" />
                  {site.phone}
                </a>
              </li>
            )}
          </ul>
        ) : (
          <p className="hidden font-medium text-white/90 sm:block">{site.tagline}</p>
        )}

        <Link href={contactHref} className={`${linkClass} ml-auto shrink-0 gap-1`}>
          Contact us
          <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
