import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { cards, type Product } from "../_data/products";
import { ProductVisual } from "./ProductVisual";
import { StoreBadges } from "./StoreBadges";

const faqQuestions = [
  "Can this be configured around our operation?",
  "Can you help us move from our current system?",
  "Will our team receive training?",
];

const faqAnswers = [
  "Yes. MyCabify can be configured around your fleet, workflows and requirements.",
  "Yes. Migration and implementation support can be tailored to the information and setup involved.",
  "Yes. Staff and driver training can be included as part of implementation.",
];

const driverAppScreens = [
  "/driver-app/booking-request.jpg",
  "/driver-app/navigation-1.jpg",
  "/driver-app/navigation-2.jpg",
  "/driver-app/fares.jpg",
  "/driver-app/dashboard.jpg",
];

export function ProductDetailPage({ data, slug }: { data: Product; slug: string }) {
  return (
    <>
      <SiteHeader />
      <section className="product-hero">
        <div>
          <p className="kicker">{data.label}</p>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <div>
            <a className="solid" href="#film">
              Watch It in Action ↗
            </a>
            <Link className="line" href="/contact">
              Book a Demo
            </Link>
          </div>
          {(slug === "driver-app" || slug === "passenger-app") && <StoreBadges />}
        </div>
        <ProductVisual
          kind={slug}
          phone={slug === "driver-app" || slug === "passenger-app"}
          image={slug === "driver-app" ? driverAppScreens[0] : undefined}
        />
      </section>
      <section className="product-problem">
        <div>
          <p className="kicker pale">THE EVERYDAY PRESSURE</p>
          <h2>{data.problem}</h2>
        </div>
        <div>
          <span>THE MYCABIFY DIFFERENCE</span>
          <p>{data.promise}</p>
        </div>
      </section>
      <section id="film" className="product-film refined">
        <div>
          <span>▶</span>
          <b>{data.video}</b>
          <small>PUBLIC YOUTUBE PRODUCT WALKTHROUGH</small>
        </div>
      </section>
      <section className="workflow-intro">
        <p className="kicker">CORE WORKFLOWS / EXPLAINED CLEARLY</p>
        <h2>
          Everything your team needs.
          <br />
          <em>Nothing they don’t.</em>
        </h2>
      </section>
      <section className="workflow-list">
        {data.items.map((x, i) => (
          <article key={x.title}>
            <div>
              <span>0{i + 1}</span>
              <h2>{x.title}</h2>
              <p>{x.copy}</p>
            </div>
            <ProductVisual
              kind={`${slug}-${i + 1}`}
              phone={slug === "driver-app" || slug === "passenger-app"}
              image={
                slug === "driver-app"
                  ? driverAppScreens[(i + 1) % driverAppScreens.length]
                  : undefined
              }
            />
          </article>
        ))}
      </section>
      <section className="benefit-band">
        <p className="kicker pale">WHAT CHANGES FOR THE BUSINESS</p>
        <h2>Less friction. More control.</h2>
        <div>
          {data.benefits.map((x, i) => (
            <article key={x}>
              <span>0{i + 1}</span>
              <b>{x}</b>
            </article>
          ))}
        </div>
      </section>
      <section className="connected-products">
        <div>
          <p className="kicker">PART OF THE COMPLETE ECOSYSTEM</p>
          <h2>
            Better on its own.
            <br />
            <em>Stronger when connected.</em>
          </h2>
        </div>
        <div>
          {cards
            .filter((c) => c.href !== `/${slug}`)
            .map((c) => (
              <Link key={c.name} href={c.href}>
                <span>{c.no}</span>
                <b>{c.name}</b>
                <i>↗</i>
              </Link>
            ))}
        </div>
      </section>
      <section className="product-faq">
        <p className="kicker">COMMON QUESTIONS</p>
        {faqQuestions.map((q, i) => (
          <details key={q}>
            <summary>
              {q}
              <span>+</span>
            </summary>
            <p>{faqAnswers[i]}</p>
          </details>
        ))}
      </section>
      <section className="connected">
        <p className="kicker pale">SEE IT AROUND YOUR OPERATION</p>
        <h2>Ready for a clearer way to work?</h2>
        <div>
          <Link className="cream-btn" href="/contact">
            Book a Personalised Demo ↗
          </Link>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
