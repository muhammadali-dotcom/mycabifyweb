"use client";
import styles from "./ClosingSection.module.css";
import { useDemo } from "./DemoProvider";

export function ClosingSection() {
  const { openDemo } = useDemo();
  return (
    <section id="contact" className={styles.closing}>
      <p className="kicker">READY WHEN YOU ARE</p>
      <h2>See a simpler way to run your minicab company.</h2>
      <button className="solid" onClick={openDemo}>
        Book a Personalised Demo ↗
      </button>
    </section>
  );
}
