import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionGroups } from "@/lib/solutions";

export default function SolutionCards() {
  return (
    <div className="w-full rounded-panel border border-white/70 bg-sky p-5 md:p-6 lg:ml-auto lg:max-w-[460px]">
      <h2 className="sr-only">Featured solutions</h2>
      <ul className="flex flex-col gap-4">
        {solutionGroups.map(({ id, title, summary, Icon, tileClass }) => (
          <li key={id}>
            <Link
              href={`/solutions#${id}`}
              className="group flex items-center gap-4 rounded-card border border-line/70 bg-white px-4 py-4 transition-colors hover:border-action-accent md:px-5"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white ${tileClass}`}
              >
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold leading-snug text-navy">{title}</span>
                <span className="mt-0.5 block text-[13px] leading-snug">{summary}</span>
              </span>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ice text-action transition-colors group-hover:bg-action group-hover:text-white"
              >
                <ArrowRight size={16} strokeWidth={2.25} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
