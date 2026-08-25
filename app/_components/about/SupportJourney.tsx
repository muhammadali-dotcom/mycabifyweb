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

const columns = [180, 430, 680, 930];
const rowY = { top: 110, bottom: 390 };

const nodes = [
  ...columns.map((x, i) => ({
    x,
    y: rowY.top,
    number: i + 1,
    label: steps[i],
    solid: i === 0 || i === 3,
  })),
  ...columns
    .slice()
    .reverse()
    .map((x, i) => ({
      x,
      y: rowY.bottom,
      number: 5 + i,
      label: steps[4 + i],
      solid: i === 0 || i === 3,
    })),
];

const chevronMids = [305, 555, 805];

const roadPath =
  "M180,110 L930,110 C1050,110 1050,390 930,390 L180,390";

export function SupportJourney() {
  return (
    <section className="mc-section support-journey">
      <p className="kicker">CUSTOMER JOURNEY / FROM SETUP TO ONGOING USE</p>
      <h2>Support does not stop when the software goes live.</h2>
      <p className="clarify">
        A guided process from the first conversation to everyday support.
      </p>

      <div className="journey-road">
        <svg
          className="journey-road-svg"
          viewBox="0 0 1080 430"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={roadPath} className="journey-road-base" />
          <path d={roadPath} className="journey-road-dashes" />

          {chevronMids.map((x) => (
            <polygon
              key={`chev-top-${x}`}
              className="journey-chevron"
              points={`${x - 8},${rowY.top - 10} ${x - 8},${rowY.top + 10} ${x + 12},${rowY.top}`}
            />
          ))}
          {chevronMids.map((x) => (
            <polygon
              key={`chev-bottom-${x}`}
              className="journey-chevron"
              points={`${x + 8},${rowY.bottom - 10} ${x + 8},${rowY.bottom + 10} ${x - 12},${rowY.bottom}`}
            />
          ))}

          <line
            x1="60"
            y1={rowY.bottom}
            x2="180"
            y2={rowY.bottom}
            className="journey-end-dash"
          />

          <g className="journey-car">
            <rect x="-18" y="-8" width="36" height="16" rx="8" className="journey-car-body" />
            <rect x="-10" y="-5" width="8" height="10" rx="2" className="journey-car-glass" />
            <rect x="2" y="-5" width="8" height="10" rx="2" className="journey-car-glass" />
            <rect x="-13" y="-9.5" width="7" height="3" rx="1.5" className="journey-car-wheel" />
            <rect x="-13" y="6.5" width="7" height="3" rx="1.5" className="journey-car-wheel" />
            <rect x="6" y="-9.5" width="7" height="3" rx="1.5" className="journey-car-wheel" />
            <rect x="6" y="6.5" width="7" height="3" rx="1.5" className="journey-car-wheel" />
          </g>
        </svg>

        {nodes.map((n) => (
          <div
            key={n.number}
            className="journey-node"
            style={{ left: `${(n.x / 1080) * 100}%`, top: `${(n.y / 430) * 100}%` }}
          >
            <b className="journey-node-label">{n.label}</b>
            <span className="journey-node-connector" />
            <span className={`journey-node-circle${n.solid ? " solid" : ""}`}>
              {String(n.number).padStart(2, "0")}
            </span>
          </div>
        ))}

        <div
          className="journey-end"
          style={{ top: `${(rowY.bottom / 430) * 100}%` }}
        >
          <b>Ongoing partnership</b>
        </div>
      </div>

      <ol className="journey-road-mobile">
        {steps.map((s, i) => (
          <li key={s}>
            <span className={`journey-node-circle${i === 0 || i === 3 || i === 4 || i === 7 ? " solid" : ""}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <b>{s}</b>
          </li>
        ))}
      </ol>
    </section>
  );
}
