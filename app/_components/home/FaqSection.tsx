"use client";

import { useState } from "react";

const faqs = [
  [
    "What is MyCabify?",
    "MyCabify is a complete taxi management platform connecting bookings, dispatch, drivers, passengers and daily operational work.",
    "question",
    "General",
  ],
  [
    "What fleet sizes can use MyCabify?",
    "MyCabify is designed for UK taxi and private-hire operators of every size, with configuration based on business requirements.",
    "gear",
    "General",
  ],
  [
    "Can you help us move from our existing system?",
    "Yes. Support can include setup, relevant data migration, training, testing and go-live planning.",
    "rocket",
    "Support",
  ],
  [
    "Can MyCabify be customised?",
    "Yes. The platform can be configured around your fleet, workflows and specific operational needs.",
    "flexible",
    "Config",
  ],
  [
    "Are the mobile apps available on iOS and Android?",
    "The MyCabify apps are available on iOS, with Android availability being prepared for launch.",
    "mobile",
    "Mobile",
  ],
  [
    "How does pricing work?",
    "Pricing depends on your fleet, required solutions and implementation needs. Request a tailored quote from our team.",
    "pricing",
    "Pricing",
  ],
  [
    "What support is available after launch?",
    "MyCabify provides 24/7 customer support for your ongoing operation.",
    "clock247",
    "Support",
  ],
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq">
      <div className="faq-intro-panel">
        <p className="kicker">FAQ</p>
        <h2>Questions before you get moving?</h2>
        <p className="faq-intro-copy">
          Find quick answers to common questions about MyCabify, from
          bookings and fleets to pricing and support.
        </p>

        <svg
          className="faq-illustration"
          viewBox="0 0 400 320"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M330,72 C 240,95 265,180 175,190 C 105,198 120,245 58,258"
            stroke="var(--line)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M330,72 C 240,95 265,180 175,190 C 105,198 120,245 58,258"
            stroke="var(--paper)"
            strokeWidth="2"
            strokeDasharray="3 7"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M330,72 C 240,95 265,180 175,190 C 105,198 120,245 58,258"
            stroke="var(--green)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <g transform="translate(330,72)">
            <path
              d="M0,0 C-8,-10 -16,-18 -16,-27 C-16,-35.5 -8.8,-42 0,-42 C8.8,-42 16,-35.5 16,-27 C16,-18 8,-10 0,0 Z"
              fill="var(--paper)"
              stroke="var(--ink)"
              strokeWidth="2.5"
            />
            <circle cx="0" cy="-27" r="6" fill="var(--ink)" />
          </g>

          <g transform="translate(58,258)">
            <path
              d="M0,0 C-8,-10 -16,-18 -16,-27 C-16,-35.5 -8.8,-42 0,-42 C8.8,-42 16,-35.5 16,-27 C16,-18 8,-10 0,0 Z"
              fill="var(--green)"
            />
            <circle cx="0" cy="-27" r="6" fill="white" />
          </g>

          <g className="faq-car">
            <path
              d="M-38,10 L-38,0 Q-36,-6 -28,-8 L-20,-8 Q-14,-18 0,-18 L14,-16 Q22,-14 26,-8 L34,-8 Q40,-8 40,-2 L40,10 Z"
              fill="var(--green)"
              stroke="var(--ink)"
              strokeWidth="1.5"
            />
            <rect x="-20" y="-15" width="14" height="8" rx="2" fill="var(--paper)" />
            <rect x="6" y="-13" width="16" height="7" rx="2" fill="var(--paper)" />
            <circle cx="-24" cy="10" r="7" fill="var(--ink)" />
            <circle cx="-24" cy="10" r="3" fill="var(--paper)" />
            <circle cx="22" cy="10" r="7" fill="var(--ink)" />
            <circle cx="22" cy="10" r="3" fill="var(--paper)" />
          </g>
        </svg>
      </div>

      <div className="faq-accordion-panel">
        <div className="faq-card">
          {faqs.map((x, i) => {
            const isOpen = i === openIndex;
            return (
              <div className="faq-item" key={x[0]}>
                <button
                  type="button"
                  className="faq-item-header"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <div className="faq-header">
                    <span className="faq-question">{x[0]}</span>
                  </div>
                  <span className={`faq-chevron${isOpen ? " open" : ""}`}>
                    <svg viewBox="0 0 12 8" fill="none" aria-hidden="true">
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen && <p className="faq-item-answer">{x[1]}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
