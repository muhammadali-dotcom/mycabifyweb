const formula = [
  ["01", "Simplify", "Bring the complete operation into one clear workspace."],
  ["02", "Automate", "Reduce repetitive work and keep daily processes moving."],
  ["03", "Grow", "Handle more activity without adding unnecessary complexity."],
];

export function FormulaSection() {
  return (
    <section className="formula">
      <p className="kicker pale">THE BUSINESS VALUE</p>
      <div>
        {formula.map((x) => (
          <article key={x[0]}>
            <span>{x[0]}</span>
            <h2>{x[1]}</h2>
            <p>{x[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
