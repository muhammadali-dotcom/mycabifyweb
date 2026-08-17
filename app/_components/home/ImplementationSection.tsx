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
        <p className="kicker">IMPLEMENTATION / BUILT AROUND YOU</p>
        <h2>Changing systems should not disrupt your operation.</h2>
        <p>
          Our team can support setup, data migration, staff training, driver
          onboarding, testing and go-live. The exact plan is tailored to your
          fleet, current system and requirements.
        </p>
        <button className="solid" onClick={onDemo}>
          Discuss Your Requirements ↗
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
