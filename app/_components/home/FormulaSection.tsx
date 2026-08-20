import { featureIcons } from "../../_data/featureIcons";

const formula = [
  { icon: "clarity", title: "Simplify", copy: "Bring the complete operation into one clear workspace." },
  { icon: "sync", title: "Automate", copy: "Reduce repetitive work and keep daily processes moving." },
  { icon: "rocket", title: "Grow", copy: "Handle more activity without adding unnecessary complexity." },
];

export function FormulaSection() {
  return (
    <section className="formula">
      <p className="kicker pale">THE BUSINESS VALUE</p>
      <div>
        {formula.map((x) => (
          <article key={x.title}>
            <span>{featureIcons[x.icon]}</span>
            <h2>{x.title}</h2>
            <p>{x.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
