import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import ProductMark from "@/components/brand/ProductMark";
import { statusLabel, type Platform } from "@/lib/solutions";

type Props = { platform: Platform; /** Heading level, so cards nest correctly under family headings. */ level?: "h3" | "h4" };

export default function PlatformCard({ platform, level = "h3" }: Props) {
  const { id, name, mark, product, tagline, description, capabilities, workspaces, status, action } = platform;
  const Heading = level;
  const pilot = status === "pilot";

  return (
    <article
      id={id}
      aria-labelledby={`${id}-name`}
      className="flex h-full scroll-mt-6 flex-col rounded-[16px] border border-line bg-white p-6 md:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        {product ? (
          <Heading id={`${id}-name`}>
            <ProductMark product={product} symbol={Boolean(mark)} />
          </Heading>
        ) : (
          <Heading id={`${id}-name`} className="text-xl font-bold tracking-[-0.01em] text-navy md:text-2xl">
            {name}
            {mark && <sup className="ml-0.5 text-[0.55em] font-semibold">{mark}</sup>}
          </Heading>
        )}
        {status && (
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-navy ${
              pilot ? "bg-teal/15" : "bg-sky"
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-2 w-2 rounded-full ${pilot ? "bg-teal" : "bg-action-accent"}`}
            />
            {statusLabel[status]}
          </span>
        )}
      </div>

      <p className={`text-base font-semibold text-navy md:text-[17px] ${product ? "mt-4" : "mt-3"}`}>{tagline}</p>
      <p className="mt-3 text-[15px] leading-[1.65]">{description}</p>

      {capabilities && capabilities.length > 0 && (
        <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
          {capabilities.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-snug">
              <Check
                size={18}
                strokeWidth={2.25}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-action-accent"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {workspaces && workspaces.length > 0 && (
        <dl className="mt-5 space-y-4 border-t border-line pt-5">
          {workspaces.map(({ name: workspace, text }) => (
            <div key={workspace} className="border-l-[3px] border-action-accent pl-4">
              <dt className="text-[15px] font-semibold text-navy">{workspace}</dt>
              <dd className="mt-1 text-[15px] leading-[1.6]">{text}</dd>
            </div>
          ))}
        </dl>
      )}

      {action && (
        <Link
          href={action.href}
          className={
            pilot
              ? "mt-7 inline-flex w-fit items-center gap-2 rounded-button bg-action px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-action-hover"
              : "mt-6 inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-action hover:text-action-hover"
          }
        >
          {action.label}
          <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}
