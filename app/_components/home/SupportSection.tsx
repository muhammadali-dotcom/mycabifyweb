const support = [
  "Guided setup",
  "Migration assistance",
  "Staff and driver training",
  "Go-live support",
  "Secure cloud infrastructure",
  "24/7 customer support",
];

export function SupportSection() {
  return (
    <section className="support dark">
      <p className="kicker pale">SUPPORT BEFORE, DURING AND AFTER LAUNCH</p>
      <h2>
        Your operation never stops.
        <br />
        <em>Neither does our support.</em>
      </h2>
      <div>
        {support.map((x, i) => (
          <span key={x}>
            0{i + 1} / {x}
          </span>
        ))}
      </div>
    </section>
  );
}
