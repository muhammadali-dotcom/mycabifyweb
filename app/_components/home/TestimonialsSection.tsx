"use client";
import { useEffect, useRef, useState } from "react";
import { customers } from "../../_data/home";

const ROTATE_MS = 6500;

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused.current) setI((n) => (n + 1) % customers.length);
    }, ROTATE_MS);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (idx: number) => {
    setI((idx + customers.length) % customers.length);
    startInterval();
  };

  const story = customers[i];

  return (
    <section className="proof customer-proof">
      <div className="proof-heading compact">
        <div>
          <p className="kicker">REAL OPERATORS. REAL STORIES.</p>
          <h2>
            Less operational stress.
            <br />
            <em> More confidence every day.</em>
          </h2>
        </div>
      </div>
      <div
        className="swipe-story"
        key={i}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="quote-logo">
          <img src={story.logo} alt={`${story.name} logo`} />
          <b>{story.name}</b>
        </div>
        <blockquote>
          <span className="quote-mark">&ldquo;</span>
          {story.quote}
        </blockquote>
        <div className="swipe-controls">
          <div className="swipe-arrows">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(i - 1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(i + 1)}
            >
              →
            </button>
          </div>
          <span className="swipe-counter">
            {String(i + 1).padStart(2, "0")} / {String(customers.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
