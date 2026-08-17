"use client";
import { useState } from "react";
import { customers } from "../../_data/home";

export function TestimonialsSection() {
  const [customer, setCustomer] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const story = customers[customer];
  const moveStory = (direction: number) =>
    setCustomer((customer + direction + customers.length) % customers.length);

  return (
    <section className="proof customer-proof">
      <div className="proof-heading compact">
        <div>
          <p className="kicker">CUSTOMER STORIES / REAL OPERATORS</p>
          <h2>
            Less to manage.
            <br />
            <em>More confidence every day.</em>
          </h2>
        </div>
        <p>
          Hear from taxi operators using MyCabify to make booking and dispatch
          feel simpler.
        </p>
      </div>
      <div
        className="swipe-story"
        key={story.name}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const distance = e.changedTouches[0].clientX - touchStart;
          if (Math.abs(distance) > 45) moveStory(distance < 0 ? 1 : -1);
          setTouchStart(null);
        }}
      >
        <div className="quote-logo">
          <img src={story.logo} alt={`${story.name} logo`} />
          <span>0{customer + 1} / 03</span>
        </div>
        <blockquote>
          “{story.quote}”
          <footer>
            <b>{story.name}</b>
            <span>{story.detail}</span>
          </footer>
        </blockquote>
        <div className="swipe-controls">
          <button onClick={() => moveStory(-1)} aria-label="Previous customer">
            ←
          </button>
          <div>
            {customers.map((c, i) => (
              <button
                key={c.name}
                className={customer === i ? "active" : ""}
                onClick={() => setCustomer(i)}
                aria-label={`Show ${c.name} testimonial`}
              />
            ))}
          </div>
          <button onClick={() => moveStory(1)} aria-label="Next customer">
            →
          </button>
        </div>
      </div>
      <p className="swipe-hint">SWIPE OR USE ARROWS TO READ THE NEXT STORY</p>
    </section>
  );
}
