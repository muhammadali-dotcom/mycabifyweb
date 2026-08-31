import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import type { Solution } from "../_data/solutions";
import { featureIcons } from "../_data/featureIcons";

export function SolutionDetailPage({ data }: { data: Solution }) {
  return (
    <>
      <SiteHeader />
      <section className="product-hero">
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
            className="product-hero-visual solution-hero-visual"
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
              priority
            />
          </div>
        )}
      </section>
      <section className="features-grid solution-features">
        <div className="features-grid-head">
          <p className="kicker">{data.label}</p>
          <h2>
            You know the problems. <em>Here&apos;s what we fixed.</em>
          </h2>
        </div>
        <div className="features-cards">
          {data.features.map((x) => (
            <article key={x.title}>
              <span>{featureIcons[x.icon]}</span>
              <h3>{x.title}</h3>
              <p>{x.copy}</p>
              <p className="solves-line">
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
