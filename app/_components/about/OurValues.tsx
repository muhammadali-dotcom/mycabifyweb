import { featureIcons } from "../../_data/featureIcons";
import styles from "./OurValues.module.css";

const values = [
  {
    title: "Simplicity",
    copy: "Make powerful technology easier to understand and use.",
    icon: "clarity",
  },
  {
    title: "Flexibility",
    copy: "Adapt the platform around different operational requirements.",
    icon: "flexible",
  },
  {
    title: "Reliability",
    copy: "Treat minicab operations as the business-critical services they are.",
    icon: "lock",
  },
  {
    title: "Partnership",
    copy: "Work with customers during implementation and ongoing use.",
    icon: "connected",
  },
  {
    title: "Continuous improvement",
    copy: "Keep developing the platform around changing business and customer needs.",
    icon: "sync",
  },
];

export function OurValues() {
  return (
    <section className={`mc-section ${styles.ourValues}`}>
      <p className="kicker">OUR VALUES / HOW WE WORK</p>
      <h2>The principles behind MyCabify.</h2>
      <div className={styles.valuesList}>
        {values.map((v) => (
          <div className={styles.valueRow} key={v.title}>
            <span>{featureIcons[v.icon]}</span>
            <h3>{v.title}</h3>
            <p>{v.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
