import styles from "./AboutStats.module.css";

const values = [
  { title: "Reliability", copy: "Systems built to run every shift, every day." },
  { title: "Simplicity", copy: "Tools your whole team can pick up instantly." },
  { title: "Partnership", copy: "Support that grows alongside your fleet." },
  { title: "Innovation", copy: "Always evolving with UK minicab operators." },
];

export function AboutStats() {
  return (
    <div className={styles.aboutStats}>
      {values.map((v, i) => (
        <div className={`${styles.valueCard} ${styles["v" + i]}`} key={v.title}>
          <b>{v.title}</b>
          <span>{v.copy}</span>
        </div>
      ))}
    </div>
  );
}
