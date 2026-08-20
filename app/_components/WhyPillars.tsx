const pillars = [
  {
    label: "Automate",
    line: "Breathe easier.",
    copy: "Let the busywork run itself, so your team can focus on the moments that actually need a human touch.",
  },
  {
    label: "Optimise",
    line: "Feel in control.",
    copy: "Shape MyCabify around how your business really works, not the other way round, until it feels like it was built just for you.",
  },
  {
    label: "Grow",
    line: "Move forward with confidence.",
    copy: "Take on more drivers, more bookings, more ambition, knowing your operation can carry the weight.",
  },
];

export function WhyPillars() {
  return (
    <section className="why-pillars">
      <div className="why-pillars-head">
        <p className="kicker">HOW IT FEELS DAY TO DAY</p>
        <h2>Three shifts you&rsquo;ll notice right away.</h2>
      </div>
      <div className="why-pillars-grid">
        {pillars.map((p) => (
          <article key={p.label}>
            <span>{p.label}</span>
            <h3>{p.line}</h3>
            <p>{p.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
