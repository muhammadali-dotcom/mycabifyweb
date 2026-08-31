function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 8a2 2 0 0 1 2-2h3l1.5-1.5L12 6h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v3l-3-3H6a2 2 0 0 1-2-2V8Z" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="14" cy="19.5" r="1.6" />
    </svg>
  );
}
function IconGear() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.66 6.34l-1.56 1.56M7.9 16.16l-1.56 1.56M17.66 17.66l-1.56-1.56M7.9 7.84 6.34 6.28" />
    </svg>
  );
}
function IconDocCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3.5h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5v4h4" />
      <circle cx="13.5" cy="15.5" r="3.2" />
      <path d="M12 15.5l1 1 2-2" />
    </svg>
  );
}
function IconPresent() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="12" y="4" width="9" height="7" rx="0.6" />
      <path d="M16.5 11v2.5" />
      <circle cx="6" cy="7.5" r="2.3" />
      <path d="M2.5 16.5c0-2.3 1.6-4 3.5-4s3.5 1.7 3.5 4" />
    </svg>
  );
}
function IconDriver() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="7" r="3" />
      <path d="M12 10a5.6 5.6 0 0 0-5.6 5.6" />
      <circle cx="12" cy="16.5" r="5" />
      <path d="M12 13.6v1.5M9.6 16.5H8.2M15.8 16.5h-1.4" />
    </svg>
  );
}
function IconClipboardCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="4" width="14" height="17" rx="1.4" />
      <path d="M9 3.5h6a1 1 0 0 1 1 1V6H8V4.5a1 1 0 0 1 1-1Z" />
      <path d="M8.5 12.5l2 2 4-4.2M8.5 17h6" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.4" />
      <rect x="17" y="13" width="4" height="6" rx="1.4" />
      <path d="M19 19v.5a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}
function IconShield247() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3.5l7 2.6v5.4c0 4.6-2.9 7.9-7 9.1-4.1-1.2-7-4.5-7-9.1V6.1L12 3.5Z" />
      <text
        x="12"
        y="14.3"
        textAnchor="middle"
        fontSize="5.4"
        fontWeight="800"
        stroke="none"
        fill="currentColor"
      >
        24/7
      </text>
    </svg>
  );
}

const steps = [
  { label: "Initial requirements discussion", icon: IconChat },
  { label: "Platform configuration", icon: IconGear },
  { label: "Relevant data preparation", icon: IconDocCheck },
  { label: "Staff training", icon: IconPresent },
  { label: "Driver onboarding", icon: IconDriver },
  { label: "Workflow testing", icon: IconClipboardCheck },
  { label: "Go-live support", icon: IconHeadset },
  { label: "Ongoing 24/7 assistance", icon: IconShield247 },
];

const columns = [180, 430, 680, 930];
const rowY = { top: 70, bottom: 190 };

const nodes = [
  ...columns.map((x, i) => ({
    x,
    y: rowY.top,
    number: i + 1,
    label: steps[i].label,
    Icon: steps[i].icon,
  })),
  ...columns
    .slice()
    .reverse()
    .map((x, i) => ({
      x,
      y: rowY.bottom,
      number: 5 + i,
      label: steps[4 + i].label,
      Icon: steps[4 + i].icon,
    })),
];

const chevronMids = [305, 555, 805];

const roadPath = "M180,70 L930,70 C1020,70 1020,190 930,190 L180,190";
const travelledPath = roadPath;

// Approximate fraction (0-1) of the total path length reached at each x
// position, used to stagger the chevron pulse animation. Top row runs
// left-to-right (180 -> 930), then the corner curve, then the bottom row
// runs right-to-left (930 -> 180).
const TOP_LEN = 750; // 930 - 180
const CURVE_LEN = 200; // approx corner curve length
const BOTTOM_LEN = 750;
const TOTAL_LEN = TOP_LEN + CURVE_LEN + BOTTOM_LEN;

function chevronDelay(x: number, row: "top" | "bottom") {
  const distance = row === "top" ? x - 180 : TOP_LEN + CURVE_LEN + (930 - x);
  const fraction = distance / TOTAL_LEN;
  return `${(fraction * 0.85 * 7).toFixed(2)}s`;
}

export function SupportJourney() {
  return (
    <section className="mc-section support-journey">
      <p className="kicker">CUSTOMER JOURNEY / FROM SETUP TO ONGOING USE</p>
      <h2>Support does not stop when the software goes live.</h2>
      <p className="clarify">A guided process from the first conversation to everyday support.</p>

      <div className="journey-road">
        <svg
          className="journey-road-svg"
          viewBox="0 0 1080 260"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={roadPath} className="journey-road-base" />
          <path d={travelledPath} pathLength={100} className="journey-road-travelled" />

          {chevronMids.map((x) => (
            <polygon
              key={`chev-top-${x}`}
              className="journey-chevron"
              style={{ animationDelay: chevronDelay(x, "top") }}
              points={`${x - 6},${rowY.top - 7} ${x - 6},${rowY.top + 7} ${x + 9},${rowY.top}`}
            />
          ))}
          {chevronMids.map((x) => (
            <polygon
              key={`chev-bottom-${x}`}
              className="journey-chevron"
              style={{ animationDelay: chevronDelay(x, "bottom") }}
              points={`${x + 6},${rowY.bottom - 7} ${x + 6},${rowY.bottom + 7} ${x - 9},${rowY.bottom}`}
            />
          ))}

          <line x1="60" y1={rowY.bottom} x2="180" y2={rowY.bottom} className="journey-end-dash" />
          <circle cx="60" cy={rowY.bottom} r="5" className="journey-end-dot" />

          {chevronMids.map((x) => (
            <line
              key={`div-top-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2={rowY.top}
              className="journey-divider"
            />
          ))}
          {chevronMids.map((x) => (
            <line
              key={`div-bottom-${x}`}
              x1={x}
              y1={rowY.bottom}
              x2={x}
              y2="260"
              className="journey-divider"
            />
          ))}
        </svg>

        {nodes.map((n) => (
          <div
            key={n.number}
            className={`journey-node ${n.y === rowY.top ? "top" : "bottom"}`}
            style={{ left: `${(n.x / 1080) * 100}%`, top: `${(n.y / 260) * 100}%` }}
          >
            <span className="journey-node-ghost">{String(n.number).padStart(2, "0")}</span>
            <span
              className="journey-node-icon"
              style={{
                animationDelay: chevronDelay(n.x, n.y === rowY.top ? "top" : "bottom"),
              }}
            >
              <n.Icon />
            </span>
            <b className="journey-node-label">{n.label}</b>
          </div>
        ))}

        <div
          className="journey-end"
          style={{ top: `${(rowY.bottom / 260) * 100}%`, left: `${(60 / 1080) * 100}%` }}
        >
          <span className="journey-end-pill">Ongoing partnership</span>
        </div>
      </div>

      <ol className="journey-road-mobile">
        {steps.map((s) => (
          <li key={s.label}>
            <span className="journey-node-icon">
              <s.icon />
            </span>
            <b>{s.label}</b>
          </li>
        ))}
      </ol>
    </section>
  );
}
