import { BrainCircuit, Droplets, type LucideIcon } from "lucide-react";

export type PlatformStatus = "launching-first" | "in-development";

export type Platform = {
  /** Used as the page anchor, e.g. /solutions#karismind */
  id: string;
  name: string;
  /** Trademark symbol shown after the name in the card heading: "™" until registered, then "®". */
  mark?: "™" | "®";
  tagline: string;
  description: string;
  capabilities: string[];
  status: PlatformStatus;
  /** Add the live address when the platform launches. Leave undefined until then. */
  href?: string;
};

export type SolutionGroup = {
  id: string;
  title: string;
  summary: string;
  Icon: LucideIcon;
  /** Icon tile background (non-text graphic, so the accent blue is allowed). */
  tileClass: string;
  platforms: Platform[];
};

export const statusLabel: Record<PlatformStatus, string> = {
  "launching-first": "Launching first",
  "in-development": "In development",
};

export const solutionGroups: SolutionGroup[] = [
  {
    id: "intelligent-platforms",
    title: "Intelligent platforms",
    summary: "Insight for strategy, culture and performance",
    Icon: BrainCircuit,
    tileClass: "bg-navy",
    platforms: [
      {
        id: "karismind",
        name: "KarisMind",
        mark: "™",
        tagline: "Leadership, culture and strategy in one platform.",
        description:
          "KarisMind turns proven organisational frameworks into practical digital tools for leaders and teams. Its first release brings GOLD® and OCAM online.",
        capabilities: [
          "GOLD® Growth Oriented Leadership Development",
          "OCAM Organisational Culture Assessment Model",
          "Strategy and performance management, to follow",
        ],
        status: "launching-first",
      },
      {
        id: "karislearning",
        name: "KarisLearning",
        tagline: "Capable teams from day one.",
        description:
          "KarisLearning helps organisations bring new people up to speed and keep building their skills, with training content that is faster to create and easier to keep current.",
        capabilities: [
          "Structured employee onboarding",
          "Competency development",
          "AI-assisted training content development",
        ],
        status: "in-development",
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
        tagline: "Utility records that match the meters on the ground.",
        description:
          "Aminzi closes the gap between what a water utility's database says and what is installed in the field, improving data integrity, increasing billing efficiency and supporting better decisions.",
        capabilities: [
          "Reconciliation of customer records with field meters",
          "Digital meter reading for unstructured and unnumbered properties and zones",
          "Walk route calibration and optimisation",
          "Fraud detection and reporting in meter reading",
        ],
        status: "in-development",
      },
      {
        id: "liquidlinq",
        name: "LiquidLinQ",
        tagline: "Multi-rail payments infrastructure for Africa.",
        description:
          "LiquidLinQ is being designed to connect multiple payment rails through a single infrastructure layer, making it simpler to move value across systems.",
        capabilities: [],
        status: "in-development",
      },
    ],
  },
];
