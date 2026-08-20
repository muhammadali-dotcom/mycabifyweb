"use client";

import { solutionIcons } from "../../_data/solutionIcons";

const flowProducts = [
  { name: "Dispatch System", slug: "dispatch-system" },
  { name: "Driver App", slug: "driver-app" },
  { name: "Passenger App", slug: "passenger-app" },
  { name: "Web Booker", slug: "web-booker" },
];

export function EnquiryArea() {
  return (
    <section id="enquiry" className="mc-section enquiry-form-section">
      <div className="enquiry-layout">
        <div className="enquiry-intro">
          <p className="kicker">BOOK A PERSONALISED DEMO</p>
          <h2>See MyCabify run your entire operation.</h2>
          <p className="enquiry-intro-copy">
            One connected platform for every part of your fleet.
          </p>
          <div className="enquiry-hub">
            <svg className="hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path className="hub-line l1" d="M50 50 L18 18" />
              <path className="hub-line l2" d="M50 50 L82 18" />
              <path className="hub-line l3" d="M50 50 L18 82" />
              <path className="hub-line l4" d="M50 50 L82 82" />
            </svg>
            <div className="hub-center">
              <b>MyCabify</b>
              <span>Connected</span>
            </div>
            <div className="hub-nodes">
              {flowProducts.map((p, i) => (
                <div className={`hub-node ${["tl", "tr", "bl", "br"][i]}`} key={p.slug}>
                  <span>{solutionIcons[p.slug]}</span>
                  <b>{p.name}</b>
                </div>
              ))}
            </div>
          </div>

          <div className="enquiry-contact-block">
            <h3>How to contact us</h3>
            <p>
              Getting in touch with MyCabify is simple. Fill out the form,
              email us, or book a demo directly — whichever works best for
              you. Whether you have questions about our platform, pricing, or
              support, our team will get back to you with the answers you
              need.
            </p>
            <a className="enquiry-contact-email" href="mailto:info@mycabify.com">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              info@mycabify.com
            </a>
          </div>
        </div>

        <div className="enquiry-panel modal">
          <p className="kicker">BOOK A DEMO</p>
          <h2>Tell us about your operation.</h2>
          <form
            id="enquiry-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="sr-only" htmlFor="enquiry-name">
              Full name
            </label>
            <input id="enquiry-name" required placeholder="Full name" />
            <label className="sr-only" htmlFor="enquiry-company">
              Company name
            </label>
            <input id="enquiry-company" required placeholder="Company name" />
            <div>
              <label className="sr-only" htmlFor="enquiry-email">
                Work email
              </label>
              <input
                id="enquiry-email"
                required
                type="email"
                placeholder="Work email"
              />
              <label className="sr-only" htmlFor="enquiry-phone">
                Phone number
              </label>
              <input id="enquiry-phone" required placeholder="Phone number" />
            </div>
            <label className="sr-only" htmlFor="enquiry-fleet-size">
              Fleet size
            </label>
            <select id="enquiry-fleet-size" defaultValue="">
              <option value="" disabled>
                Fleet size
              </option>
              <option>1–20 vehicles</option>
              <option>21–100 vehicles</option>
              <option>100+ vehicles</option>
            </select>
            <label className="sr-only" htmlFor="enquiry-message">
              What would you like to improve?
            </label>
            <textarea
              id="enquiry-message"
              placeholder="What would you like to improve?"
            />
            <button className="solid" type="submit">
              Send enquiry ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
