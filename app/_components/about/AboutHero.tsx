import Link from "next/link";
import { AboutStats } from "./AboutStats";
import styles from "./AboutHero.module.css";

export function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <div>
        <p className="kicker">ABOUT MYCABIFY / COMPLETE MINICAB TECHNOLOGY</p>
        <h1>Complete minicab management technology, built around real business needs.</h1>
        <p>
          MyCabify provides a complete, connected platform that helps UK minicab and private-hire
          companies manage bookings, dispatch, drivers, passengers and everyday operations.
        </p>
        <div className="actions">
          <Link className="solid" href="/dispatch-system">
            Explore Our Features ↗
          </Link>
          <Link className="line" href="/contact">
            Contact MyCabify
          </Link>
        </div>
      </div>
      <div className={styles.aboutVisualStack}>
        <AboutStats />
      </div>
    </section>
  );
}
