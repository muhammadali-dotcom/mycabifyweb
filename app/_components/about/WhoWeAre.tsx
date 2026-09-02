import styles from "./WhoWeAre.module.css";

export function WhoWeAre() {
  return (
    <section className={`mc-section ${styles.whoWeAre}`}>
      <p className="kicker">WHO WE ARE / PRACTICAL BY DESIGN</p>
      <h2>A technology partner for UK minicab companies.</h2>
      <p>
        MyCabify is a UK-focused minicab technology company providing connected software for companies
        of different sizes. We believe powerful software does not need to feel difficult. Our goal
        is to combine complete operational capability with an experience that teams can understand
        and use confidently.
      </p>
      <div className={styles.whoGrid}>
        <article>
          <h3>Professional</h3>
          <p>Reliable technology and support for business-critical minicab operations.</p>
        </article>
        <article>
          <h3>Practical</h3>
          <p>Product decisions guided by everyday operational requirements.</p>
        </article>
        <article>
          <h3>Forward-looking</h3>
          <p>A platform designed to adapt as customer expectations and minicab businesses evolve.</p>
        </article>
      </div>
    </section>
  );
}
