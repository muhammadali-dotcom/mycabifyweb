import Link from "next/link";
import { featureIcons } from "../../_data/featureIcons";

const reasons = [
  [
    "Complete and connected",
    "Dispatch, drivers, passengers, bookings and operations work as one ecosystem.",
    "connected",
  ],
  [
    "Easy to understand",
    "A clear interface designed around practical daily work.",
    "clarity",
  ],
  [
    "Flexible by design",
    "Configure MyCabify around your fleet, workflows and business requirements.",
    "flexible",
  ],
  [
    "Better business value",
    "Get a complete platform without the unnecessary complexity of larger enterprise systems.",
    "valueIcon",
  ],
  [
    "Hands-on implementation",
    "Receive practical support through setup, migration, training, testing and launch.",
    "support",
  ],
  [
    "Support around the clock",
    "Access 24/7 customer support when your operation needs help.",
    "clock247",
  ],
];

export function WhySection() {
  return (
    <section className="why dark">
      <div className="why-title">
        <p className="kicker pale">WHY MYCABIFY</p>
        <h2>Complete when you need it. Simple where it matters.</h2>
        <Link href="/why-mycabify" className="cream-btn">
          Explore Why MyCabify ↗
        </Link>
      </div>
      <div className="why-list">
        {reasons.map((x, i) => (
          <article key={x[0]}>
            <div className="why-icon-badge">
              {featureIcons[x[2]]}
            </div>
            <div>
              <h3>{x[0]}</h3>
              <p>{x[1]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
