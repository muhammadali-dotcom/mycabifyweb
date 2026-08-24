import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import type { Basic } from "../_data/basics";
import { featureIcons } from "../_data/featureIcons";
import { WhyBeforeAfter } from "./WhyBeforeAfter";
import { WhyPillars } from "./WhyPillars";

export function BasicPage({ data, slug }: { data: Basic; slug?: string }) {
  const isWhyMyCabify = slug === "why-mycabify";

  return (
    <>
      <SiteHeader />
      <section className="detail-hero">
        <div>
          <p className="kicker">{data.label}</p>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <Link className="solid" href="/contact">
            See MyCabify in Action ↗
          </Link>
        </div>
        {isWhyMyCabify ? (
          <WhyBeforeAfter />
        ) : (
          <div className="detail-media">
            <img src="/mycabify-logo.png" alt="MyCabify" />
            <span>MYCABIFY / {data.label}</span>
          </div>
        )}
      </section>
      {isWhyMyCabify && <WhyPillars />}
      {data.items.length > 0 && (
        <section className={`feature-grid${isWhyMyCabify ? " feature-grid-cream" : ""}`}>
          {data.gridTitle && (
            <div className="feature-grid-head">
              {data.gridLabel && <p className="kicker">{data.gridLabel}</p>}
              <h2>{data.gridTitle}</h2>
            </div>
          )}
          <div className={`benefit-cards${isWhyMyCabify ? " benefit-cards-standardized" : ""}`}>
            {data.items.map((x, i) => (
              <article className="benefit-card" key={x.title}>
                <div className="benefit-icon">
                  {isWhyMyCabify && x.icon && featureIcons[x.icon]
                    ? featureIcons[x.icon]
                    : String(i + 1).padStart(2, "0")}
                </div>
                <h3>{x.title}</h3>
                <p>{x.copy}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {!isWhyMyCabify && (
        <section className="connected connected-cream">
          <p className="kicker">READY WHEN YOU ARE</p>
          <h2>See MyCabify around your operation.</h2>
          <div>
            <Link className="solid" href="/contact">
              Book a Demo ↗
            </Link>
          </div>
        </section>
      )}
      <SiteFooter />
    </>
  );
}
