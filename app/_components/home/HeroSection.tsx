"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";
import { HeroVideo } from "./HeroVideo";
import { videoIds } from "../../_data/videos";
import { useDemo } from "./DemoProvider";

const heroSubheadings = [
  "Minicab Dispatch Software UK",
  "Real-Time GPS Tracking",
  "Integrated Passenger and Driver Apps",
  "UK Compliance & Flexible Payments",
];

const heroParagraph =
  "MyCabify brings all your bookings—phone, web, app and corporate—into one dashboard, with live tracking to assign drivers and manage your fleet in real time.";

const ROTATE_MS = 1500;

export function HeroSection() {
  const { openDemo } = useDemo();
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused.current) setI((n) => (n + 1) % heroSubheadings.length);
    }, ROTATE_MS);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.heroName}>MyCabify</h1>
        <h2
          className={styles.heroRotator}
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <span key={i}>{heroSubheadings[i]}</span>
        </h2>
        <p className={styles.heroParagraph}>{heroParagraph}</p>

        <div className="actions">
          <button className="solid" onClick={openDemo}>
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
