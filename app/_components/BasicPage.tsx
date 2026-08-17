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
          {data.items.map((x, i) => (
            <article key={x.title}>
              <span>0{i + 1}</span>
              <h2>{x.title}</h2>
              <p>{x.copy}</p>
            </article>
          ))}
        </section>
      )}
      <section className="connected">
        <p className="kicker pale">READY WHEN YOU ARE</p>
        <h2>See MyCabify around your operation.</h2>
        <div>
          <Link className="cream-btn" href="/contact">
            Book a Demo ↗
          </Link>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
