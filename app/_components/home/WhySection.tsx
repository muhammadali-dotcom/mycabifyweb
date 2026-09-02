import Link from "next/link";
import { featureIcons } from "../../_data/featureIcons";
import styles from "./WhySection.module.css";

const reasons = [
  [
    "Complete and connected",
    "Dispatch, drivers, passengers, bookings and operations work as one ecosystem.",
    "connected",
  ],
  ["Easy to understand", "A clear interface designed around practical daily work.", "clarity"],
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
    <section className={styles.why}>
      <div className={styles.whyTitle}>
        <p className="kicker">WHY OPERATORS CHOOSE MYCABIFY</p>
        <h2>
          Everything you need. <em>Made simple.</em>
        </h2>
        <Link href="/why-mycabify" className="solid">
          Explore Why MyCabify ↗
        </Link>
      </div>
      <div className={styles.whyList}>
        {reasons.map((x) => (
          <article key={x[0]}>
            <div className={styles.whyIconBadge}>{featureIcons[x[2]]}</div>
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
