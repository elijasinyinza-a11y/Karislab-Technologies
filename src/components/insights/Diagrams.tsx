/** Brand-styled versions of the diagrams from the source books. */

const NAVY = "var(--color-navy)";
const ACCENT = "var(--color-action-accent)";
const LINE = "var(--color-line)";
const SKY = "var(--color-sky)";
const ICE = "var(--color-ice)";

function Arrow({ id }: { id: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill={ACCENT} />
    </marker>
  );
}

function Node({
  x, y, w, h, lines, strong = false, fill = "#fff",
}: { x: number; y: number; w: number; h: number; lines: string[]; strong?: boolean; fill?: string }) {
  const lh = 17;
  const start = y + h / 2 - ((lines.length - 1) * lh) / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={12} fill={fill} stroke={strong ? NAVY : LINE} strokeWidth={strong ? 1.5 : 1.25} />
      {lines.map((l, i) => (
        <text key={l} x={x + w / 2} y={start + i * lh} textAnchor="middle" dominantBaseline="middle"
          fontSize={strong ? 15 : 13.5} fontWeight={strong ? 700 : 500} fill={NAVY}>
          {l}
        </text>
      ))}
    </g>
  );
}

export function PersonalLostTimeDiagram() {
  const m = "plt-arrow";
  return (
    <svg viewBox="0 0 860 330" role="img" aria-label="Individual lost time leads to lost opportunities to increase knowledge, improve skills and apply knowledge and skills, which together lead to a lost opportunity to create wealth, and finally to poverty." className="h-auto w-full min-w-[640px]" fontFamily="var(--font-sans)">
      <defs><Arrow id={m} /></defs>
      <g stroke={ACCENT} strokeWidth={1.75} fill="none" markerEnd={`url(#${m})`}>
        <path d="M170 150 L238 62" /><path d="M170 165 L238 165" /><path d="M170 180 L238 268" />
        <path d="M418 62 L486 145" /><path d="M418 165 L486 165" /><path d="M418 268 L486 185" />
        <path d="M666 165 L708 165" />
      </g>
      <Node x={10} y={125} w={160} h={80} lines={["Individual", "lost time"]} strong fill={ICE} />
      <Node x={240} y={30} w={178} h={64} lines={["Lost opportunity to", "increase knowledge"]} />
      <Node x={240} y={133} w={178} h={64} lines={["Lost opportunity to", "improve skills"]} />
      <Node x={240} y={236} w={178} h={64} lines={["Lost opportunity to apply", "knowledge and skills"]} />
      <Node x={488} y={133} w={178} h={64} lines={["Lost opportunity to", "create wealth"]} />
      <Node x={710} y={133} w={140} h={64} lines={["Poverty"]} strong fill={SKY} />
    </svg>
  );
}

export function GroupLostTimeDiagram() {
  const m = "glt-arrow";
  const w = 76, h = 44;
  const l1 = { x: 392, y: 14 };
  const l2 = [{ x: 172, n: 2 }, { x: 392, n: 3 }, { x: 612, n: 4 }].map((p) => ({ ...p, y: 120 }));
  const l3 = [
    { x: 62, n: 5 }, { x: 172, n: 6 }, { x: 282, n: 7 },
    { x: 502, n: 8 }, { x: 612, n: 9 }, { x: 722, n: 10 },
  ].map((p) => ({ ...p, y: 226 }));
  const l3b = [{ x: 296, n: 11 }, { x: 392, n: 12 }, { x: 488, n: 13 }].map((p) => ({ ...p, y: 350 }));
  const junction = { x: 392, y: 288 };
  const edge = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    `M${a.x} ${a.y + h / 2} L${b.x} ${b.y - h / 2 - 3}`;
  const box = (p: { x: number; y: number; n: number }, first = false) => (
    <g key={p.n}>
      <rect x={p.x - w / 2} y={p.y - h / 2} width={w} height={h} rx={10} fill={first ? ICE : "#fff"} stroke={first ? NAVY : LINE} strokeWidth={first ? 1.5 : 1.25} />
      <text x={p.x} y={p.y - 6} textAnchor="middle" dominantBaseline="middle" fontSize={13} fontWeight={700} fill={NAVY}>P{p.n}</text>
      <text x={p.x} y={p.y + 10} textAnchor="middle" dominantBaseline="middle" fontSize={11} fill={NAVY}>LTIS</text>
    </g>
  );
  const fan = (p: { x: number; y: number }) => (
    <g key={`f${p.x}${p.y}`} stroke={ACCENT} strokeOpacity={0.55} strokeWidth={1.25} strokeDasharray="3 3">
      <path d={`M${p.x} ${p.y + h / 2} l-16 22`} /><path d={`M${p.x} ${p.y + h / 2} l0 24`} /><path d={`M${p.x} ${p.y + h / 2} l16 22`} />
    </g>
  );
  const p1 = { ...l1, y: l1.y + h / 2 + 4 };
  return (
    <svg viewBox="0 0 784 410" role="img" aria-label="Person 1's lost time in service affects persons 2, 3 and 4. Their lost time in turn affects persons 5 to 13, and the effect continues to spread to many more people." className="h-auto w-full min-w-[620px]" fontFamily="var(--font-sans)">
      <defs><Arrow id={m} /></defs>
      <g stroke={ACCENT} strokeWidth={1.6} fill="none" markerEnd={`url(#${m})`}>
        {l2.map((b) => <path key={b.n} d={edge(p1, b)} />)}
        {[l2[0], l2[0], l2[0], l2[2], l2[2], l2[2]].map((a, i) => <path key={`a${i}`} d={edge(a, l3[i])} />)}
        {l3b.map((b) => <path key={b.n} d={`M${junction.x} ${junction.y} L${b.x} ${b.y - h / 2 - 3}`} />)}
      </g>
      <path d={`M${l2[1].x} ${l2[1].y + h / 2} L${junction.x} ${junction.y}`} stroke={ACCENT} strokeWidth={1.6} />
      {[...l3, ...l3b].map(fan)}
      {box({ ...p1, n: 1 }, true)}
      {l2.map((p) => box(p))}
      {l3.map((p) => box(p))}
      {l3b.map((p) => box(p))}
    </svg>
  );
}

export function ThreeFrontsDiagram() {
  const m = "tf-arrow";
  return (
    <svg viewBox="0 0 640 330" role="img" aria-label="The intrinsic, informal and formal spaces each feed into organisational culture." className="h-auto w-full" fontFamily="var(--font-sans)">
      <defs><Arrow id={m} /></defs>
      <g stroke={ACCENT} strokeWidth={1.75} fill="none" markerEnd={`url(#${m})`}>
        <path d="M150 92 L262 162" /><path d="M320 98 L320 150" /><path d="M490 92 L378 162" />
      </g>
      <Node x={20} y={22} w={170} h={70} lines={["Intrinsic space", "inherent behaviours"]} />
      <Node x={235} y={22} w={170} h={70} lines={["Informal space", "social behaviours"]} />
      <Node x={450} y={22} w={170} h={70} lines={["Formal space", "corporate behaviours"]} />
      <circle cx={320} cy={232} r={80} fill={SKY} stroke={NAVY} strokeWidth={1.5} />
      <text x={320} y={222} textAnchor="middle" fontSize={16} fontWeight={700} fill={NAVY}>Organisational</text>
      <text x={320} y={244} textAnchor="middle" fontSize={16} fontWeight={700} fill={NAVY}>culture</text>
    </svg>
  );
}

const frontSkills = [
  { front: "Intrinsic", behaviour: "Inherent individual behaviours", skills: "Leadership skills", activities: ["Active leading", "Training", "Coaching", "Mentoring"] },
  { front: "Formal", behaviour: "Enforced corporate behaviours", skills: "People management skills", activities: ["Management activities", "Skills training"] },
  { front: "Informal", behaviour: "Acquired social behaviours", skills: "Emotional and social skills", activities: ["Training", "Corporate social activities", "Team building", "Games and arts"] },
];

export function FrontSkillsTable() {
  return (
    <div className="grid gap-4 text-base leading-normal md:grid-cols-3">
      {frontSkills.map((f) => (
        <div key={f.front} className="rounded-card border border-line bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-action">{f.front} front</p>
          <p className="mt-1 text-sm">{f.behaviour}</p>
          <p className="mt-4 font-semibold text-navy">{f.skills}</p>
          <ul className="mt-2 space-y-1 text-sm">
            {f.activities.map((a) => (
              <li key={a} className="flex gap-2">
                <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-action-accent" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
