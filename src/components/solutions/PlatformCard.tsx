import { ArrowUpRight, Check } from "lucide-react";
import { statusLabel, type Platform } from "@/lib/solutions";

export default function PlatformCard({ platform }: { platform: Platform }) {
  const { id, name, mark, tagline, description, capabilities, status, href } = platform;
  const launching = status === "launching-first";

  return (
    <article
      id={id}
      aria-labelledby={`${id}-name`}
      className="flex scroll-mt-6 flex-col rounded-[16px] border border-line bg-white p-6 md:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 id={`${id}-name`} className="text-xl font-bold tracking-[-0.01em] md:text-2xl">
          {name}
          {mark && <sup className="ml-0.5 text-[0.55em] font-semibold">{mark}</sup>}
        </h3>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-navy ${
            launching ? "bg-teal/15" : "bg-sky"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-2 w-2 rounded-full ${launching ? "bg-teal" : "bg-action-accent"}`}
          />
          {statusLabel[status]}
        </span>
      </div>

      <p className="mt-3 text-base font-semibold text-navy md:text-[17px]">{tagline}</p>
      <p className="mt-3 text-[15px] leading-[1.65]">{description}</p>

      {capabilities.length > 0 && (
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

      {href && (
        <a
          href={href}
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-action hover:text-action-hover"
        >
          Visit {name}
          <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
