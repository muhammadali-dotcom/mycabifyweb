import { Screen } from "./Screen";

export function HeroSection({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="kicker">COMPLETE TAXI MANAGEMENT / UK</p>
        <h1>
          Run your entire taxi operation—<em>without the everyday chaos.</em>
        </h1>
        <p className="lead">
          When phones are ringing, drivers are waiting and bookings keep
          arriving, MyCabify keeps every part of your operation connected and
          clear.
        </p>
        <div className="actions">
          <a className="solid" href="#platform">
            See MyCabify in Action ↗
          </a>
          <button className="line" onClick={onDemo}>
            Book a Demo
          </button>
        </div>
        <p className="micro">
          Bookings, dispatch, drivers, passengers and daily
          operations—together in one platform.
        </p>
      </div>
      <div className="hero-art">
        <div className="device main-device">
          <Screen />
        </div>
        <div className="device driver">
          <Screen type="phone" />
        </div>
        <div className="device passenger-device">
          <Screen type="passenger" />
        </div>
        <span className="tag t1">DISPATCH</span>
        <span className="tag t2">DRIVER</span>
        <span className="tag t3">PASSENGER</span>
      </div>
    </section>
  );
}
