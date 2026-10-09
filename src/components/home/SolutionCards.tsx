import { BrainCircuit, Droplets, type LucideIcon } from "lucide-react";

type Solution = {
  title: string;
  description: string;
  Icon: LucideIcon;
  tileClass: string;
};

// Informational for now: these become links once the individual solution pages exist.
const solutions: Solution[] = [
  {
    title: "Intelligent platforms",
    description: "Insight for strategy, culture and performance",
    Icon: BrainCircuit,
    tileClass: "bg-navy",
  },
  {
    title: "Digital infrastructure",
    description: "Practical solutions for real-world systems",
    Icon: Droplets,
    tileClass: "bg-action-accent",
  },
];

export default function SolutionCards() {
  return (
    <div className="w-full rounded-panel border border-white/70 bg-sky p-5 md:p-6 lg:ml-auto lg:max-w-[460px]">
      <h2 className="sr-only">Featured solutions</h2>
      <ul className="flex flex-col gap-4">
        {solutions.map(({ title, description, Icon, tileClass }) => (
          <li
            key={title}
            className="flex items-center gap-4 rounded-card border border-line/70 bg-white px-4 py-4 md:px-5"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white ${tileClass}`}
            >
              <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-snug">{title}</h3>
              <p className="mt-0.5 text-[13px] leading-snug">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
