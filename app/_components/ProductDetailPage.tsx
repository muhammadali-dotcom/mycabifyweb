import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { cards, type Product } from "../_data/products";
import { solutionIcons } from "../_data/solutionIcons";
import { featureIcons } from "../_data/featureIcons";
import { ProductVisual } from "./ProductVisual";
import { PhoneFan } from "./PhoneFan";
import { DispatchMockup } from "./DispatchMockup";
import { StoreBadges } from "./StoreBadges";

const driverAppScreens = {
  front: "/driver-app/front.jpeg",
  dashboardLight: "/driver-app/dashboard-light.png",
  bookingLight: "/driver-app/booking-light.jpeg",
  journeyLight: "/driver-app/journey-light.jpeg",
  dashboardDark: "/driver-app/dashboard-dark.png",
  bookingDark: "/driver-app/booking-dark.jpeg",
  journeyDark: "/driver-app/journey-dark.jpeg",
};

const passengerAppScreens = {
  front: "/passenger-app/front.png",
  dashboardLight: "/passenger-app/dashboard-light.png",
  vehicleLight: "/passenger-app/vehicle-light.png",
  finalLight: "/passenger-app/final-light.png",
  dashboardDark: "/passenger-app/dashboard-dark.png",
  vehicleDark: "/passenger-app/vehicle-dark.png",
  finalDark: "/passenger-app/final-dark.png",
};

type Shot = string | undefined;
type FanImages = { front: Shot; left: [Shot, Shot, Shot]; right: [Shot, Shot, Shot] };

const heroFanImages: Record<string, FanImages> = {
  "driver-app": {
    front: driverAppScreens.front,
    left: [driverAppScreens.dashboardLight, driverAppScreens.bookingLight, driverAppScreens.journeyLight],
    right: [driverAppScreens.dashboardDark, driverAppScreens.bookingDark, driverAppScreens.journeyDark],
  },
  "passenger-app": {
    front: passengerAppScreens.front,
    left: [passengerAppScreens.dashboardLight, passengerAppScreens.vehicleLight, passengerAppScreens.finalLight],
    right: [passengerAppScreens.dashboardDark, passengerAppScreens.vehicleDark, passengerAppScreens.finalDark],
  },
};

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
        {slug === "driver-app" || slug === "passenger-app" ? (
          <PhoneFan kind={slug} images={heroFanImages[slug]} />
        ) : slug === "web-booker" ? (
          <img className="wb-hero-img" src="/web-booker/webbooker_hero_final.png" alt="Web Booker" draggable={false} />
        ) : slug === "dispatch-system" ? (
          <DispatchMockup />
        ) : (
          <ProductVisual kind={slug} />
        )}
      </section>
      <section id="film" className="product-film refined">
        <div>
          <span>▶</span>
          <b>{data.video}</b>
          <small>PUBLIC YOUTUBE PRODUCT WALKTHROUGH</small>
        </div>
      </section>
      <section className="features-grid">
        <div className="features-grid-head">
          <p className="kicker">KEY FEATURES</p>
          <h2>
            Built for the way
            <br />
            <em>your team works.</em>
          </h2>
        </div>
        <div className="features-cards">
          {data.features.map((x) => (
            <article key={x.title}>
              <span>{featureIcons[x.icon]}</span>
              <h3>{x.title}</h3>
              <p>{x.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="benefit-band">
        <p className="kicker">WHAT MYCABIFY CHANGES</p>
        <h2>Less daily stress. More control over your business.</h2>
        <div>
          {data.benefits.map((x) => (
            <article key={x.label}>
              <span>{featureIcons[x.icon]}</span>
              <div>
                <b>{x.label}</b>
                <p>{x.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="connected-products">
        <div>
          <p className="kicker">ONE CONNECTED MYCABIFY SYSTEM</p>
          <h2>
            Powerful on its own.
            <br />
            <em>Even better together.</em>
          </h2>
        </div>
        <div>
          {cards
            .filter((c) => c.href !== `/${slug}`)
            .map((c) => (
              <Link key={c.name} href={c.href}>
                <span>{solutionIcons[c.href.slice(1)]}</span>
                <b>{c.name}</b>
                <i>↗</i>
              </Link>
            ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
