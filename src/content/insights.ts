import { sourceBooks, type SourceBook } from "@/content/books";

/** Building blocks for article bodies. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; ordered?: boolean; items: { title?: string; text: string }[] }
  | { type: "quote"; text: string }
  | { type: "figure"; name: "personal-lost-time" | "group-lost-time" | "three-fronts" | "front-skills"; caption: string };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  topic: string;
  book: SourceBook;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "understanding-the-value-of-time",
    title: "Understanding the value of time",
    summary:
      "How the lost time matrix and the group lost time matrix explain one of the most overlooked barriers to Africa's prosperity.",
    topic: "Productivity",
    book: sourceBooks.aed,
    body: [
      {
        type: "p",
        text: "I once spent twenty to thirty minutes in a waiting room, waiting for a service that should have taken a few minutes. Nobody was in a hurry. Nobody seemed to notice that the time slipping away belonged to someone. Sitting there, I began to understand one of the most dangerous and least visible root causes of poverty on our continent: the failure to account for personal and business time.",
      },
      {
        type: "p",
        text: "I call it the time syndrome. It does not announce itself, and it rarely appears in economic reports, yet it quietly erodes the prosperity of families, companies, government departments and nations.",
      },
      { type: "h2", text: "Time is not just money" },
      {
        type: "p",
        text: "Time is the single most indispensable resource an individual or organisation has. Every meaningful measure of achievement is tied to it: a business grows within a time frame, profits and losses are reported over a period, and even GDP is measured over time. You cannot talk about wealth outside time.",
      },
      {
        type: "p",
        text: "We often say that time is money. The saying helps, but it undersells the point. Money depends on time, but time does not depend on money. Once time is lost, no amount of money can buy it back.",
      },
      { type: "h2", text: "The three human factors of productivity" },
      {
        type: "p",
        text: "If time is the resource, the question is where to invest it. There are three areas on which time must be spent if wealth is to be created. I call them the human factors of productivity:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          {
            title: "Knowledge.",
            text: "Improving the quality of our thinking through reading, research, study and experience. What fills the mind shapes the course of action.",
          },
          {
            title: "Skills.",
            text: "Turning good ideas into reality through repeated practice and mentorship. The higher the skill, the better the results.",
          },
          {
            title: "Work.",
            text: "Applying knowledge and skills to create value, whether in employment or in enterprise. The more we work, the better we become at what we do.",
          },
        ],
      },
      { type: "h2", text: "The personal lost time matrix" },
      {
        type: "p",
        text: "When an individual wastes time through idling, unnecessary social activity or endless entertainment, the loss is not a single event. It cascades. Each hour lost is an hour not spent growing in knowledge, improving skills or applying both through work, and together those missed opportunities close the door to wealth creation.",
      },
      {
        type: "figure",
        name: "personal-lost-time",
        caption: "The personal lost time matrix: how individual lost time leads, step by step, to poverty.",
      },
      {
        type: "p",
        text: "Seen this way, many people are not poor because they lack ability or are somehow cursed. They are poor because they have not yet discovered where to invest their time. A person who knows where to invest their time before they invest their money will gain far more from every financial investment they make.",
      },
      {
        type: "p",
        text: "Consider someone who works an eight-hour shift and spends the rest of the day on sleep, social life and idle time. At best, eight of their twenty-four hours go towards knowledge, skills and work, and in practice even those eight hours are rarely used in full. Compare them with someone who deliberately gives more of their day to learning, practice and productive work. Over months and years, the gap between the two becomes the gap between stagnation and progress.",
      },
      { type: "h2", text: "The group lost time matrix" },
      {
        type: "p",
        text: "The damage does not stay with the individual. A poor attitude to time becomes a syndrome that spreads to everyone who depends on that person, creating what I call the group lost time matrix.",
      },
      {
        type: "figure",
        name: "group-lost-time",
        caption:
          "The group lost time matrix: lost time in service (LTIS) passed from one person to the next.",
      },
      {
        type: "p",
        text: "Suppose person 1 delays a service owed to persons 2, 3 and 4, or keeps them occupied with idle talk while on duty. Person 1 has effectively taken from them the time they would have used to grow their knowledge and skills and to create value. If those three were meant to serve others during that time, the loss passes on again, to persons 5 through 13, and from them to many more.",
      },
      {
        type: "p",
        text: "The matrix spreads quietly, like a contagious virus, affecting tens, then hundreds, then thousands and eventually millions of people. The result is billions of lost hours which, properly used, could turn a struggling nation into an economic powerhouse within a reasonable time.",
      },
      { type: "h2", text: "When lateness becomes culture" },
      {
        type: "p",
        text: "In Zambia we even have a name for it: \"Zambian time.\" A meeting set for 08:00 starts at 08:30 at the earliest, because everyone expects everyone else to be late, and so everyone leaves late. Elsewhere on the continent the same habit is called \"African time.\" It has found its way into public institutions, businesses, schools and social gatherings, and if it is not checked, it will be passed on to the next generation with all its costs.",
      },
      {
        type: "p",
        text: "I once attended a business meeting scheduled for 07:00. When I arrived on time, three people were present. An hour later, only a handful had arrived. Every latecomer would have had a reasonable explanation. But I have learned this:",
      },
      {
        type: "quote",
        text: "If you can find a reason for your failure but do not deal with it, it becomes an excuse, and it will remain so until you take corrective action.",
      },
      { type: "h2", text: "Reclaiming lost time" },
      {
        type: "p",
        text: "Imagine how much knowledge could be gained, how many skills developed and how much value created if individuals and organisations across the continent chose to account for their time. The change does not start with policy. It starts with each person treating their time, and other people's time, as the irreplaceable resource it is, and with leaders who model that standard in every meeting, every service and every promise they make.",
      },
    ],
  },
  {
    slug: "attaining-positive-mental-presence-in-the-workplace",
    title: "Attaining employee positive mental presence in the workplace",
    summary:
      "Why logbooks and clocking systems keep people at work but cannot keep their minds there, and what leaders can do instead.",
    topic: "Leadership",
    book: sourceBooks.bbsp,
    body: [
      {
        type: "p",
        text: "Many organisations measure whether employees are at work. Far fewer ask whether employees are present. The difference matters more than most leaders realise.",
      },
      {
        type: "p",
        text: "Positive mental presence (PMP) is an attribute of business time management and employee performance. It describes how much of their time an employee spends thinking about how to create opportunities and resolve problems in the organisation. An employee can be physically at their desk all day with very little PMP, and another can show high PMP long before the working day officially begins.",
      },
      { type: "h2", text: "The limits of control" },
      {
        type: "p",
        text: "When late coming or absence from the office becomes a problem, the usual response is to introduce behavioural controls: logbooks, clocking systems and access control. These are good management tools, but on their own they do not maximise positive mental presence or trigger cultural growth.",
      },
      {
        type: "p",
        text: "I learned this early in my career. Management could confine me to a location, but they could not confine my mind to the demands of the job. I could sign the logbook on time and follow every procedure, and still decide for myself whether to roll up my sleeves or do just enough to keep up appearances.",
      },
      {
        type: "quote",
        text: "Whereas management procedures have the capacity to deal with logical issues, they perform poorly when it comes to resolving mind-set issues.",
      },
      {
        type: "p",
        text: "There is a lesson here from Newton's third law of motion: to every force there is an equal and opposite force. When you introduce measures to curb a behaviour, people often abandon that behaviour only to express the same attitude through another path.",
      },
      {
        type: "p",
        text: "I once found termites building a clay tunnel in the corner of a newly built guestroom. I scraped the tunnel off, and they rebuilt it. I sealed the hole with a sticky substance, and they found another way in and rejoined the same path. Only when I dealt with the root cause did they stop. Employees, like those termites, will find ways of fitting into new procedures without changing their underlying attitudes, because culture is not a logic issue. It is a mind-set issue.",
      },
      { type: "h2", text: "What drives positive mental presence" },
      {
        type: "p",
        text: "As my own approach to work matured, I no longer needed to be pushed. I would arrive at 06:30, sign in, spend an hour reading or writing, plan my day and then join the team for the 08:00 meeting. That discipline is how much of my book was written. What changed was not the rules around me, but how I related to the work. Six factors, which I call the DNA of organisational culture, explain that shift:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          {
            title: "Relevance of the vision.",
            text: "The stronger and more meaningful the vision, and the better it is communicated, the stronger the culture around it.",
          },
          {
            title: "The leadership philosophy around that vision.",
            text: "It shapes experiences, builds expectations, influences interactions and prescribes values.",
          },
          {
            title: "Awareness of purpose.",
            text: "Employees who know why the organisation exists are more likely to give it their best. In the water sector, knowing what it meant to wake up to dry taps drove me to work harder.",
          },
          {
            title: "Understanding what the vision demands.",
            text: "When people know what is expected of them, and agree with it, they bring energy and an unusual sense of responsibility.",
          },
          {
            title: "Appreciation of personal benefits.",
            text: "When employees see how the work benefits their own lives, they care more about what is entrusted to them. Good conditions of service matter.",
          },
          {
            title: "Effective systems and policies.",
            text: "When weak systems make delivery impossible, failure becomes an accepted reason, and over time those reasons harden into cultural norms.",
          },
        ],
      },
      { type: "h2", text: "The leader's part" },
      {
        type: "p",
        text: "Raising positive mental presence is first a leadership task. Directors and managers must take the front role and become the change they want to see, before they can expect management initiatives to shift culture.",
      },
      {
        type: "p",
        text: "Good leaders are also good followers of their people. Being empathetic and paying attention to the well-being of followers is one of the most effective strategies for enhancing their positive mental presence. Leaders who keep a clear line between their personal vision and the vision of the organisation, and who help their people reach their own goals along the way, earn a kind of commitment that no clocking system can enforce.",
      },
      {
        type: "p",
        text: "Logbooks will tell you who came to work. Positive mental presence tells you who showed up. The organisations that grow are the ones whose leaders invest in the second.",
      },
    ],
  },
  {
    slug: "the-three-fronts-of-workplace-culture",
    title: "The three fronts of workplace culture",
    summary:
      "Culture is shaped from three spaces at once: the intrinsic, the informal and the formal. Each one needs a different set of leadership skills.",
    topic: "Culture",
    book: sourceBooks.tig,
    body: [
      {
        type: "p",
        text: "The word culture comes from the Latin cultura, meaning to cultivate. In organisations, culture is the collection of values, expectations and practices that guides the actions of team members. Like a crop, it grows from what is planted and tended, and it suffers from what is neglected.",
      },
      { type: "h2", text: "Culture is both inherent and acquired" },
      {
        type: "p",
        text: "Any culture shown by an individual or group at work is either inherent or acquired. Inherent traits come from personal values and beliefs built up over time. They live in the subconscious mind, so people act on them without thinking twice. Acquired traits are shaped by the conditions around a person: the rules, policies and procedures of the workplace, and their interactions with colleagues.",
      },
      {
        type: "p",
        text: "Together, the inherent and the acquired make up a person's work culture. And because acquired culture develops either informally, through social interaction, or formally, through management systems, we arrive at three distinct fronts.",
      },
      { type: "h2", text: "The three cultural fronts" },
      {
        type: "list",
        items: [
          {
            title: "The intrinsic front:",
            text: "inherent individual behaviours, rooted in each person's values, beliefs and convictions.",
          },
          {
            title: "The informal front:",
            text: "acquired social behaviours, shaped by how people relate to one another.",
          },
          {
            title: "The formal front:",
            text: "enforced corporate behaviours, shaped by policies, processes, rules and regulations.",
          },
        ],
      },
      {
        type: "figure",
        name: "three-fronts",
        caption: "The three cultural fronts, each feeding into organisational culture.",
      },
      {
        type: "p",
        text: "Each of these spaces feeds into corporate culture differently. The overall result depends on how skilfully an organisation's leaders can operate in all three.",
      },
      { type: "h2", text: "Each front demands different skills" },
      {
        type: "p",
        text: "The skills needed to influence a person's subconscious mind are not the same as those needed to enforce corporate behaviour, and neither is the same as those needed to shape social behaviour.",
      },
      {
        type: "figure",
        name: "front-skills",
        caption: "The skills and activities that influence culture on each front.",
      },
      {
        type: "p",
        text: "Social and emotional skills are among the most neglected in corporate management, yet they are among the most valuable when it comes to remodelling culture. People are social beings whose attitudes are constantly shaped by one another. Ignore the social side of leadership, and cultural change becomes very difficult.",
      },
      { type: "h2", text: "The people management trap" },
      {
        type: "p",
        text: "In my years of formal employment, I have met very few managers who could work confidently on all three fronts. Most lean heavily towards people management. The danger is the blame game: always looking for who the problem is, when the situation demands that we ask when, why, what and how.",
      },
      {
        type: "p",
        text: "Too often we assume that once the report has been requested, the key performance indicators set and the disciplinary code put in place, success will follow automatically. It rarely does. You may win a few early victories, but the results will not last.",
      },
      { type: "h2", text: "Where to begin" },
      {
        type: "p",
        text: "Cultural remodelling should always start with the leaders. Culture at work is largely set by the behaviour and attitudes shown at the top, so change must begin with the most senior leaders and cascade downwards. Rather than acting as observers and judges, directors and managers must become the first agents of change.",
      },
      {
        type: "p",
        text: "Leaders also need to diagnose correctly. Poor culture moves in a vicious cycle: poor leadership culture produces poor corporate culture, which produces a poor working culture among employees, which produces poor performance, which is then followed by the wrong diagnosis of the root cause. The cycle is best broken at two points: leadership, and diagnosis. Tackling culture where it shows up, in employee behaviour, means dealing with symptoms, and that usually leads to confrontation.",
      },
      {
        type: "quote",
        text: "Confrontation by nature breeds resistance. A mind you cannot challenge you cannot change.",
      },
      {
        type: "p",
        text: "Rather than confronting, effective leaders challenge. They work on all three fronts at once, building conviction on the intrinsic front, connection on the informal front and consistency on the formal front. That is how the termites in the guestroom are finally dealt with.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const readingMinutes = (article: Article) => {
  const words = article.body
    .map((b) =>
      "text" in b ? b.text : b.type === "list" ? b.items.map((i) => `${i.title ?? ""} ${i.text}`).join(" ") : "",
    )
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};
