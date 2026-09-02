import styles from "./WhyPillars.module.css";

const pillars = [
  {
    label: "Automate",
    line: "Stop chasing the busywork.",
    copy: "Let MyCabify handle the repetitive tasks, so you can spend less time on admin and more time running your business.",
  },
  {
    label: "Simplify",
    line: "Have everything under control.",
    copy: "Keep your bookings, drivers and day-to-day operations organised in one place, exactly the way your business needs them.",
  },
  {
    label: "Grow",
    line: "Grow without the extra stress.",
    copy: "Take on more drivers, more bookings and more business, without letting the workload grow with it.",
  },
];

export function WhyPillars() {
  return (
    <section className={styles.whyPillars}>
      <div className={styles.whyPillarsHead}>
        <p className="kicker">HOW MYCABIFY CHANGES YOUR DAY</p>
        <h2>
          Less time managing. <em>More time growing.</em>
        </h2>
      </div>
      <div className={styles.whyPillarsGrid}>
        {pillars.map((p) => (
          <article key={p.label}>
            <span>{p.label}</span>
            <h3>{p.line}</h3>
            <p>{p.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
