const steps = [
  "Initial requirements discussion",
  "Platform configuration",
  "Relevant data preparation",
  "Staff training",
  "Driver onboarding",
  "Workflow testing",
  "Go-live support",
  "Ongoing 24/7 assistance",
];

export function SupportJourney() {
  return (
    <section className="mc-section support-journey">
      <p className="kicker">CUSTOMER JOURNEY / FROM SETUP TO ONGOING USE</p>
      <h2>Support does not stop when the software goes live.</h2>
      <div className="journey-steps">
        {steps.map((s, i) => (
          <article key={s}>
            <span>0{i + 1}</span>
            <b>{s}</b>
          </article>
        ))}
      </div>
      <p className="clarify">
        The exact implementation and support plan can vary according to fleet
        size, current system, data and specific operational requirements.
      </p>
    </section>
  );
}
