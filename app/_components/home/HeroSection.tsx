"use client";
import { useEffect, useRef, useState } from "react";
import { Screen } from "./Screen";

const heroHeadlines = [
  {
    text: "Everything you need to run your taxi company, all in one place.",
    highlight: "all in one place.",
  },
  {
    text: "Stay in control of every booking, driver and journey, even on your busiest days.",
    highlight: "Stay in control of every booking,",
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

export function HeroSection({ onPlayVideo }: { onPlayVideo: () => void }) {
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
        <p className="kicker">COMPLETE TAXI MANAGEMENT SOLUTION</p>
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

        <div className="actions">
          <button
            type="button"
            className="solid hero-video-btn"
            onClick={onPlayVideo}
            aria-label="Watch the MyCabify overview video"
          >
            <span className="hero-play-circle">
              <span className="hero-play-ring" />
              <span className="hero-play-icon">▶</span>
            </span>
            Watch Overview
          </button>
        </div>
      </div>
      <div className="hero-art">
        <div className="device main-device">
          <Screen image="/dispatch-system/dispatch-light.png" />
        </div>
        <div className="device driver">
          <Screen type="phone" image="/driver-app/dashboard-light.png" />
        </div>
        <div className="device passenger-device">
          <Screen type="passenger" image="/passenger-app/dashboard-light.png" />
        </div>
        <span className="tag t1">DISPATCH</span>
        <span className="tag t2">DRIVER</span>
        <span className="tag t3">PASSENGER</span>
      </div>
    </section>
  );
}
