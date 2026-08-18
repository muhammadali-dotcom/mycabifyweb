"use client";
import { useEffect, useRef, useState } from "react";
import { Screen } from "./Screen";

const heroHeadlines = [
  {
    text: "Everything you need to run your taxi company, all in one place.",
    highlight: "all in one place.",
  },
  {
    text: "Stay in control, even when everything gets busy.",
    highlight: "Stay in control",
  },
  {
    text: "Spend less time managing chaos. More time growing your business.",
    highlight: "growing your business.",
  },
  {
    text: "When bookings get busy, your taxi operation stays under control.",
    highlight: "stays under control.",
  },
];

const ROTATE_MS = 5800;

function HeadlineText({ text, highlight }: { text: string; highlight: string }) {
  const idx = text.indexOf(highlight);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <em>{highlight}</em>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export function HeroSection({ onDemo }: { onDemo: () => void }) {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused.current) setI((n) => (n + 1) % heroHeadlines.length);
    }, ROTATE_MS);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const jumpTo = (idx: number) => {
    setI(idx);
    startInterval();
  };
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="kicker">COMPLETE TAXI MANAGEMENT / UK</p>
        <h1
          className="hero-rotator"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <span key={i}>
            <HeadlineText {...heroHeadlines[i]} />
          </span>
        </h1>
        <div className="hero-rotator-dots">
          {heroHeadlines.map((h, idx) => (
            <button
              key={h.text}
              type="button"
              className={idx === i ? "active" : ""}
              aria-label={`Show headline ${idx + 1}`}
              onClick={() => jumpTo(idx)}
            />
          ))}
        </div>
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
          operations, together in one platform.
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
