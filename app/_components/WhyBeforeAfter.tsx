import styles from "./WhyBeforeAfter.module.css";

const before = [
  "Missed bookings",
  "Phones ringing off the hook",
  "Driver whereabouts unknown",
  "Spreadsheet chaos",
];
const after = [
  "Every booking captured",
  "One connected dispatch view",
  "Live driver tracking",
  "Real-time reporting",
];

export function WhyBeforeAfter() {
  return (
    <div className={styles.beforeAfter}>
      <div className={`${styles.baCard} ${styles.baBefore}`}>
        <span className={styles.baLabel}>Before</span>
        {before.map((x) => (
          <div className={styles.baRow} key={x}>
            <i>✕</i>
            <span>{x}</span>
          </div>
        ))}
      </div>
      <div className={styles.baArrow}>→</div>
      <div className={`${styles.baCard} ${styles.baAfter}`}>
        <span className={styles.baLabel}>The MyCabify Way</span>
        {after.map((x) => (
          <div className={styles.baRow} key={x}>
            <i>✓</i>
            <span>{x}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
