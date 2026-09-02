import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import type { Solution } from "../_data/solutions";
import { featureIcons } from "../_data/featureIcons";
import sharedStyles from "./ProductPage.module.css";
import styles from "./SolutionDetailPage.module.css";

export function SolutionDetailPage({ data }: { data: Solution }) {
  return (
    <>
      <SiteHeader />
      <section className={sharedStyles.productHero}>
        <div>
          <p className="kicker">{data.label}</p>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <div>
            <Link className="solid" href="/contact">
              Book a Demo ↗
            </Link>
          </div>
        </div>
        {data.heroImage && (
          <div
            className={`${sharedStyles.productHeroVisual} ${styles.solutionHeroVisual}`}
            style={
              data.heroImageOffsetY
                ? ({
                    "--hero-offset-base": `${data.heroImageOffsetY}px`,
                  } as CSSProperties)
                : undefined
            }
          >
            <Image
              src={data.heroImage}
              alt={data.title}
              width={data.heroImageWidth}
              height={data.heroImageHeight}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}
      </section>
      <section className={`${sharedStyles.featuresGrid} ${sharedStyles.solutionFeatures}`}>
        <div className={sharedStyles.featuresGridHead}>
          <p className="kicker">{data.label}</p>
          <h2>
            You know the problems. <em>Here&apos;s what we fixed.</em>
          </h2>
        </div>
        <div className={sharedStyles.featuresCards}>
          {data.features.map((x) => (
            <article key={x.title}>
              <span>{featureIcons[x.icon]}</span>
              <h3>{x.title}</h3>
              <p>{x.copy}</p>
              <p className={sharedStyles.solvesLine}>
                <b>Solves:</b> {x.problem}
              </p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
