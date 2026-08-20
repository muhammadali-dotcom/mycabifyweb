import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import type { Basic } from "../_data/basics";
import { WhyBeforeAfter } from "./WhyBeforeAfter";
import { WhyPillars } from "./WhyPillars";

export function BasicPage({ data, slug }: { data: Basic; slug?: string }) {
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
        {slug === "why-mycabify" ? (
          <WhyBeforeAfter />
        ) : (
          <div className="detail-media">
            <img src="/mycabify-logo.png" alt="MyCabify" />
            <span>MYCABIFY / {data.label}</span>
          </div>
        )}
      </section>
      {slug === "why-mycabify" && <WhyPillars />}
      {data.items.length > 0 && (
        <section className="feature-grid">
          {data.gridTitle && (
            <div className="feature-grid-head">
              {data.gridLabel && <p className="kicker">{data.gridLabel}</p>}
              <h2>{data.gridTitle}</h2>
            </div>
          )}
          <div className="feature-grid-cards">
            {data.items.map((x, i) => (
              <article key={x.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{x.title}</h3>
                <p>{x.copy}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {slug !== "why-mycabify" && (
        <section className="connected">
          <p className="kicker pale">READY WHEN YOU ARE</p>
          <h2>See MyCabify around your operation.</h2>
          <div>
            <Link className="cream-btn" href="/contact">
              Book a Demo ↗
            </Link>
          </div>
        </section>
      )}
      <SiteFooter />
    </>
  );
}
