import Image from "next/image";
import Link from "next/link";
import { homeSolutions } from "../../_data/homeSolutions";
import styles from "./SolutionsSection.module.css";

export function SolutionsSection() {
  return (
    <section className={styles.solutions}>
      <div className={styles.head}>
        <p className="kicker">ONE SYSTEM, YOUR WAY</p>
        <h2>
          Pick the solution <em>your operation runs on.</em>
        </h2>
      </div>
      <div className={styles.grid}>
        {homeSolutions.map((s) => (
          <article key={s.slug}>
            <div className={styles.photo}>
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <div className={styles.scrim} />
              <h3>{s.title}</h3>
              <Link
                href={`/${s.slug}`}
                className={styles.cta}
                aria-label={`Explore ${s.title}`}
              >
                ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
