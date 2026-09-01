const steps = [
  "Understand your operation",
  "Configure MyCabify",
  "Prepare relevant data",
  "Train staff and drivers",
  "Test complete workflows",
  "Support your go-live",
];

function StepArrow() {
  return (
    <svg
      className="step-arrow"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ImplementationSection({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="implementation">
      <div className="implementation-intro">
        <p className="kicker">SWITCHING TO MYCABIFY</p>
        <h2>
          Change your system. <em>Keep your business moving.</em>
        </h2>
        <button className="solid" onClick={onDemo}>
          Plan Your Switch ↗
        </button>
      </div>
      <div className="implementation-steps">
        {steps.flatMap((x, i) => {
          const box = (
            <div className="step-box" key={x}>
              <span>0{i + 1}</span>
              <b>{x}</b>
            </div>
          );
          if (i === steps.length - 1) return [box];
          return [box, <StepArrow key={`arrow-${x}`} />];
        })}
      </div>
    </section>
  );
}
