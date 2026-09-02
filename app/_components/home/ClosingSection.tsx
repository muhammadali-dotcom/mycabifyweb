import styles from "./ClosingSection.module.css";

export function ClosingSection({ onDemo }: { onDemo: () => void }) {
  return (
    <section id="contact" className={styles.closing}>
      <p className="kicker">READY WHEN YOU ARE</p>
      <h2>See a simpler way to run your minicab company.</h2>
      <button className="solid" onClick={onDemo}>
        Book a Personalised Demo ↗
      </button>
    </section>
  );
}
