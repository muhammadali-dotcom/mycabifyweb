"use client";
import Link from "next/link";
import { solutions } from "../../_data/home";
import { Screen } from "./Screen";
import styles from "./EcosystemSection.module.css";
import { useDemo } from "./DemoProvider";

export function EcosystemSection() {
  const { openVideo } = useDemo();
  return (
    <section id="platform" className={styles.ecosystem}>
      <div className={styles.sectionHead}>
        <div>
          <p className="kicker">THE MYCABIFY ECOSYSTEM</p>
          <h2>
            Four connected features. <em>One complete operation.</em>
          </h2>
        </div>
      </div>
      <div className={styles.solutionGrid}>
        {solutions.map((s) => (
          <article key={s.name}>
            <div className={styles.solutionMeta}>
              <span>
                {s.no} / {s.role}
              </span>
            </div>
            <button className={styles.film} onClick={() => openVideo(s.name)}>
              <div>
                <Screen type={s.type} image={s.image} />
              </div>
              <i>▶</i>
              <strong>{s.role}</strong>
            </button>
            <div className={styles.solutionCopy}>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <div>
                <button onClick={() => openVideo(s.name)}>Watch film</button>
                <Link href={s.href}>Explore feature ↗</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
