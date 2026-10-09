// Temporary foundation check for Step 2. Replaced by the real homepage in Step 4.
const swatches = [
  { name: "Primary navy", token: "bg-navy", hex: "#07345B" },
  { name: "Action blue (text)", token: "bg-action", hex: "#0679A4" },
  { name: "Action blue (accent)", token: "bg-action-accent", hex: "#078DBF" },
  { name: "Teal green", token: "bg-teal", hex: "#00B89C" },
  { name: "Ice blue", token: "bg-ice", hex: "#EFF8FD" },
  { name: "Light blue", token: "bg-sky", hex: "#DCEEF9" },
  { name: "Body text", token: "bg-body", hex: "#40566B" },
  { name: "Border", token: "bg-line", hex: "#D5E4ED" },
];

export default function Home() {
  return (
    <div className="bg-ice py-16">
      <div className="page-container space-y-12">
        <section aria-labelledby="type-heading" className="max-w-[620px] space-y-5">
          <h1
            id="type-heading"
            className="text-4xl font-bold leading-[1.1] tracking-headline md:text-5xl xl:text-[58px] xl:leading-[1.08]"
          >
            Building intelligent solutions for a changing world.
          </h1>
          <p className="max-w-[540px] text-base leading-relaxed md:text-lg">
            We bring together technology, data and human insight to solve
            meaningful problems and create lasting value.
          </p>
        </section>

        <section aria-label="Colour tokens">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
            {swatches.map((s) => (
              <li key={s.token} className="rounded-card border border-line bg-white p-3">
                <div className={`${s.token} h-14 rounded-button border border-line`} />
                <p className="mt-2 text-sm font-semibold text-navy">{s.name}</p>
                <p className="text-xs">{s.hex}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
