import type { Block } from "@/content/insights";
import {
  FrontSkillsTable,
  GroupLostTimeDiagram,
  PersonalLostTimeDiagram,
  ThreeFrontsDiagram,
} from "@/components/insights/Diagrams";

const figures = {
  "personal-lost-time": PersonalLostTimeDiagram,
  "group-lost-time": GroupLostTimeDiagram,
  "three-fronts": ThreeFrontsDiagram,
  "front-skills": FrontSkillsTable,
};

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="text-[17px] leading-[1.75] md:text-lg">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i} className="mt-6 first:mt-0">{block.text}</p>;
          case "h2":
            return (
              <h2 key={i} className="mt-12 text-2xl font-bold leading-tight tracking-[-0.02em] md:text-[28px]">
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote key={i} className="mt-8 border-l-[3px] border-teal pl-5 text-xl font-semibold leading-[1.5] text-navy md:text-[22px]">
                <p>{block.text}</p>
              </blockquote>
            );
          case "list": {
            const List = block.ordered ? "ol" : "ul";
            return (
              <List key={i} className={`mt-6 space-y-3 pl-6 ${block.ordered ? "list-decimal" : "list-disc"} marker:font-semibold marker:text-action`}>
                {block.items.map((item) => (
                  <li key={item.text} className="pl-1">
                    {item.title && <strong className="font-semibold text-navy">{item.title} </strong>}
                    {item.text}
                  </li>
                ))}
              </List>
            );
          }
          case "figure": {
            const Figure = figures[block.name];
            const isTable = block.name === "front-skills";
            return (
              <figure key={i} className="mt-10">
                {isTable ? (
                  <Figure />
                ) : (
                  <div
                    role="region"
                    aria-label={`${block.caption} Scroll sideways to see the full diagram.`}
                    tabIndex={0}
                    className="overflow-x-auto rounded-[16px] border border-line bg-white p-4 md:p-6"
                  >
                    <Figure />
                  </div>
                )}
                <figcaption className="mt-3 text-sm leading-snug">{block.caption}</figcaption>
              </figure>
            );
          }
        }
      })}
    </div>
  );
}
