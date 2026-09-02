import Image from "next/image";
import { customers } from "../../_data/home";
import styles from "./TestimonialsSection.module.css";

export function TestimonialsSection() {
  const track = [...customers, ...customers];

  return (
    <section className={`${styles.proof} ${styles.customerProof}`}>
      <div className={`${styles.proofHeading} ${styles.compact}`}>
        <div>
          <p className={`kicker ${styles.proofHeadingKicker}`}>TRUSTED BY</p>
          <h2>Our Clients</h2>
          <span className={styles.proofHeadingUnderline} />
        </div>
      </div>
      <div className={styles.testimonialMarquee}>
        <div className={styles.testimonialTrack}>
          {track.map((story, i) => (
            <div className={styles.testimonialCard} key={`${story.name}-${i}`}>
              <div className={styles.quoteLogo}>
                <Image src={story.logo} alt={`${story.name} logo`} width={72} height={72} />
                <b>{story.name}</b>
              </div>
              <blockquote>
                <span className={styles.quoteMark}>&ldquo;</span>
                <span>{story.quote}</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
