"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";
import { HeroVideo } from "./HeroVideo";
import { videoIds } from "../../_data/videos";

const heroHeadlines = [
  {
    text: "Everything you need to run your minicab company, all in one place.",
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
    text: "When bookings get busy, your minicab operation stays under control.",
    highlight: "stays under control.",
  },
];

const ROTATE_MS = 3000;

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
    <section className={styles.hero}>
      <div>
        <p className="kicker">COMPLETE MINICAB MANAGEMENT PLATFORM</p>
        <h1
          className={styles.heroRotator}
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <span key={i}>
            <HeadlineText {...heroHeadlines[i]} />
          </span>
        </h1>
        <div className={styles.heroRotatorDots}>
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
          <button className="solid" onClick={onDemo}>
            Book a Demo ↗
          </button>
        </div>
      </div>
      <div className={styles.heroArt}>
        <HeroVideo videoId={videoIds.hero} title="MyCabify dispatch, driver and passenger apps" />
      </div>
    </section>
  );
}
