import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import type { LegalDoc } from "../_data/legal";
import styles from "./LegalPage.module.css";

export function LegalPage({ data }: { data: LegalDoc }) {
  return (
    <>
      <SiteHeader />
      <section className={styles.legalHero}>
        <p className="kicker">{data.label}</p>
        <h1>{data.title}</h1>
        <p className={styles.legalUpdated}>{data.updated}</p>
      </section>
      <article className={styles.legalBody}>
        <p className={styles.legalIntro}>{data.intro}</p>
        {data.sections.map((section, i) => (
          <div key={i}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {section.list && (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>
      <SiteFooter />
    </>
  );
}
