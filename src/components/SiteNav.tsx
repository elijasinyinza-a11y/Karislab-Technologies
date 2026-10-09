"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactHref, mainNav } from "@/lib/navigation";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkBase = "text-[15px] font-medium transition-colors hover:text-action";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Tablet and desktop */}
      <nav aria-label="Main" className="hidden items-center gap-8 md:flex xl:gap-10">
        <ul className="flex items-center gap-7 xl:gap-9">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${linkBase} ${active ? "text-action" : "text-navy"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href={contactHref}
          className="rounded-button bg-action px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-action-hover"
        >
          Contact us <span aria-hidden="true">↗︎</span>
        </Link>
      </nav>

      {/* Mobile */}
      <button
        type="button"
        className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-button text-navy md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 border-b border-line-nav bg-white shadow-[0_12px_24px_-16px_rgba(7,52,91,0.25)] md:hidden"
      >
        <nav aria-label="Mobile" className="page-container py-4">
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line-nav last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3.5 ${linkBase} ${active ? "text-action" : "text-navy"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={contactHref}
            onClick={close}
            className="mt-4 block rounded-button bg-action px-5 py-3.5 text-center text-[15px] font-semibold text-white transition-colors hover:bg-action-hover"
          >
            Contact us <span aria-hidden="true">↗︎</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
