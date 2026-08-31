const steps = [
  "Understand your operation",
  "Configure MyCabify",
  "Prepare relevant data",
  "Train staff and drivers",
  "Test complete workflows",
  "Support your go-live",
];

export function ImplementationSection({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="implementation">
      <div>
        <p className="kicker">SWITCHING TO MYCABIFY</p>
        <h2>
          Change your system. <em>Keep your business moving.</em>
        </h2>
        <p>
          We’ll support you through setup, data migration, staff training, driver onboarding,
          testing and launch. Everything is planned around your fleet, your current system and the
          way your business works.
        </p>
        <button className="solid" onClick={onDemo}>
          Plan Your Switch ↗
        </button>
      </div>
      <ol>
        {steps.map((x, i) => (
          <li key={x}>
            <span>0{i + 1}</span>
            <b>{x}</b>
          </li>
        ))}
      </ol>
    </section>
  );
}
