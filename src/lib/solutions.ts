import { BrainCircuit, Droplets, type LucideIcon } from "lucide-react";
import { contactHref } from "@/lib/navigation";

/**
 * Status badge on a card. Leave `status` undefined to show no badge at all
 * (OCAM™ and GOLD™ deliberately carry none).
 */
export type PlatformStatus = "pilot" | "in-development";

export const statusLabel: Record<PlatformStatus, string> = {
  pilot: "In pilot",
  "in-development": "In development",
};

export type Action = { label: string; href: string };

/** One workspace inside CASPA™. Workspaces are never marketed as products. */
export type Workspace = { name: string; text: string };

export type Platform = {
  /** Used as the page anchor, e.g. /solutions#caspa */
  id: string;
  name: string;
  /** Trademark symbol shown after the name in the card heading: "™" until registered, then "®". */
  mark?: "™" | "®";
  tagline: string;
  description: string;
  capabilities?: string[];
  workspaces?: Workspace[];
  status?: PlatformStatus;
  /** Call to action on the card. Omit for informational cards. */
  action?: Action;
};

/** A product family shown as its own column, e.g. Instruments beside CASPA™. */
export type Family = {
  id: string;
  title: string;
  summary: string;
  platforms: Platform[];
};

export type SolutionGroup = {
  id: string;
  title: string;
  summary: string;
  Icon: LucideIcon;
  /** Icon tile background (non-text graphic, so the accent blue is allowed). */
  tileClass: string;
  /** Families render side by side. A group without families renders its platforms in a grid. */
  families?: Family[];
  platforms?: Platform[];
};

/** Where the CASPA™ pilot button leads. The Contact page reads the topic. */
export const pilotHref = `${contactHref}?topic=caspa-pilot`;

const talkToUs: Action = { label: "Talk to us", href: contactHref };

export const solutionGroups: SolutionGroup[] = [
  {
    id: "intelligent-platforms",
    title: "Intelligent platforms",
    summary: "Insight for strategy, culture and performance",
    Icon: BrainCircuit,
    tileClass: "bg-navy",
    families: [
      {
        id: "instruments",
        title: "Instruments",
        summary:
          "Culture and leadership assessment for HR and organisational development practitioners, through certification and assessment credits.",
        platforms: [
          {
            id: "ocam",
            name: "OCAM",
            mark: "™",
            tagline: "Organisational Culture Assessment Model",
            description:
              "A structured assessment of workplace culture that shows where an organisation stands and what to strengthen next.",
            action: talkToUs,
          },
          {
            id: "gold",
            name: "GOLD",
            mark: "™",
            tagline: "Growth Oriented Leadership Development",
            description:
              "A leadership development framework for assessing leaders and growing them deliberately.",
            action: talkToUs,
          },
        ],
      },
      {
        id: "execution",
        title: "Strategy execution",
        summary: "For chief executives, strategy offices and finance teams, through organisational subscriptions.",
        platforms: [
          {
            id: "caspa",
            name: "CASPA",
            mark: "™",
            tagline:
              "From strategic goal to funded, accountable action",
            description:
              "Every budget line and every performance objective traces back to the goal it serves, across four workspaces on one shared data model.",
            workspaces: [
              {
                name: "Strategy",
                text: "Form strategy with the 7Cs of Leading Strategy, producing the strategic plan, annual workplan and M&E framework as structured data.",
              },
              {
                name: "Cascade",
                text: "Cascade goals to departmental KPIs and named owners, with the 6P integrity check applied at every layer.",
              },
              {
                name: "Plan",
                text: "Build the budget together, with every budget line attached to the goal it serves.",
              },
              {
                name: "Performance",
                text: "Set performance contracts and appraisals whose objectives trace back to the cascade.",
              },
            ],
            status: "pilot",
            action: { label: "Request pilot access", href: pilotHref },
          },
        ],
      },
    ],
  },
  {
    id: "digital-infrastructure",
    title: "Digital infrastructure",
    summary: "Practical solutions for real-world systems",
    Icon: Droplets,
    tileClass: "bg-action-accent",
    platforms: [
      {
        id: "aminzi-wms",
        name: "Aminzi WMS",
        tagline: "Smarter management for water utilities.",
        description:
          "Aminzi WMS is a management platform for the water sector, helping utilities reduce water losses, strengthen the integrity of their data and manage their infrastructure with confidence.",
        capabilities: [
          "Non-revenue water reduction",
          "Meter reading integrity",
          "Digital twins for water infrastructure",
        ],
        status: "in-development",
      },
    ],
  },
];
