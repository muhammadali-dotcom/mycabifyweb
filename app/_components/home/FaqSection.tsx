"use client";

import { useState } from "react";

const faqs = [
  [
    "What is MyCabify?",
    "MyCabify is a complete minicab management platform connecting bookings, dispatch, drivers, passengers and daily operational work.",
    "question",
    "General",
  ],
  [
    "What fleet sizes can use MyCabify?",
    "MyCabify is designed for UK minicab and private-hire operators of every size, with configuration based on business requirements.",
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
    "Pricing depends on your fleet, required features and implementation needs. Request a tailored quote from our team.",
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
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="faq">
      <div className="faq-intro-panel">
        <p className="kicker">FAQ</p>
        <h2>Questions before you get moving?</h2>
      </div>

      <div className="faq-accordion-panel">
        <div className="faq-card">
          {faqs.map((x, i) => {
            const isOpen = i === openIndex;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={x[0]}>
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
