import Link from "next/link";

const reasons = [
  [
    "Complete and connected",
    "Dispatch, drivers, passengers, bookings and operations work as one ecosystem.",
  ],
  [
    "Easy to understand",
    "A modern interface designed around practical daily work.",
  ],
  [
    "Flexible by design",
    "Configure MyCabify around your fleet, workflows and business requirements.",
  ],
  [
    "Better business value",
    "Get a complete platform without the unnecessary complexity of larger enterprise systems.",
  ],
  [
    "Hands-on implementation",
    "Receive practical support through setup, migration, training, testing and launch.",
  ],
  [
    "Support around the clock",
    "Access 24/7 customer support when your operation needs help.",
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
            <span>0{i + 1}</span>
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
