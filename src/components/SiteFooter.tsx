import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { contactHref, mainNav } from "@/lib/navigation";
import { site, telHref } from "@/lib/site";
import { solutionGroups } from "@/lib/solutions";

const headingClass = "text-sm font-semibold text-navy";
const linkClass = "text-[15px] transition-colors hover:text-action";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="page-container grid gap-10 py-12 md:grid-cols-2 md:py-14 xl:grid-cols-[minmax(0,5fr)_minmax(0,3fr)_minmax(0,4fr)_minmax(0,4fr)] xl:gap-12">
        <div>
          <Logo imageClassName="h-auto w-[140px]" />
          <p className="mt-4 max-w-[300px] text-[15px] leading-[1.6]">{site.tagline}</p>
        </div>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className={headingClass}>
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            {[...mainNav, { label: "Contact", href: contactHref }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-solutions">
          <h2 id="footer-solutions" className={headingClass}>
            Solutions
          </h2>
          <ul className="mt-4 space-y-3">
            {solutionGroups.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/solutions#${id}`} className={linkClass}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Contact</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            {site.phone && (
              <li>
                <a href={telHref(site.phone)} className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <Phone size={16} aria-hidden="true" className="shrink-0 text-action-accent" />
                  {site.phone}
                </a>
              </li>
            )}
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <Mail size={16} aria-hidden="true" className="shrink-0 text-action-accent" />
                  {site.email}
                </a>
              </li>
            )}
            {site.address.length > 0 && (
              <li className="flex gap-2.5">
                <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0 text-action-accent" />
                <address className="not-italic leading-[1.6]">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="page-container py-5 text-sm">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
