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
          viewBox="0 0 560 390"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="faq-car-beam"
            d="M78 384L178 88H382L482 384H78Z"
          />
          <ellipse className="faq-car-ground" cx="280" cy="342" rx="230" ry="18" />
          <g className="faq-line-car">
            <path
              className="faq-line-car-sign"
              d="M212 152L217 102C218 92 226 84 236 84H324C334 84 342 92 343 102L348 152"
            />
            <text
              className="faq-line-car-label"
              x="280"
              y="119"
              textAnchor="middle"
            >
              MyCabify
            </text>
            <path
              d="M104 268C112 225 130 179 162 158C190 140 229 139 280 139C331 139 370 140 398 158C430 179 448 225 456 268"
            />
            <path
              d="M143 269L165 188C170 171 184 160 202 159C254 157 306 157 358 159C376 160 390 171 395 188L417 269C325 264 235 264 143 269Z"
            />
            <path
              d="M128 269L88 235H57C43 235 34 246 34 260V264C34 278 45 289 59 289H98"
            />
            <path
              d="M432 269L472 235H503C517 235 526 246 526 260V264C526 278 515 289 501 289H462"
            />
            <path
              d="M94 291C73 309 62 336 62 370V386"
            />
            <path
              d="M466 291C487 309 498 336 498 370V386"
            />
            <path
              d="M136 322C231 329 329 329 424 322"
            />
            <path
              d="M181 322C247 326 313 326 379 322"
            />
          </g>
          <circle className="faq-line-wheel-glow" cx="119" cy="346" r="48" />
          <circle className="faq-line-wheel-glow" cx="441" cy="346" r="48" />
          <circle className="faq-line-wheel" cx="119" cy="346" r="27" />
          <circle className="faq-line-wheel" cx="441" cy="346" r="27" />
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
