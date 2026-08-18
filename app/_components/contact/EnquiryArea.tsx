"use client";

const flowProducts = ["Dispatch System", "Driver App", "Passenger App", "Web Booker"];

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
          <div className="flow-diagram">
            {flowProducts.map((name, i) => (
              <div className="flow-step" key={name}>
                <div className="flow-box">{name}</div>
                {i < flowProducts.length - 1 && <span className="flow-arrow">→</span>}
              </div>
            ))}
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
            <input required placeholder="Full name" />
            <input required placeholder="Company name" />
            <div>
              <input required type="email" placeholder="Work email" />
              <input required placeholder="Phone number" />
            </div>
            <select defaultValue="">
              <option value="" disabled>
                Fleet size
              </option>
              <option>1–20 vehicles</option>
              <option>21–100 vehicles</option>
              <option>100+ vehicles</option>
            </select>
            <textarea placeholder="What would you like to improve?" />
            <button className="solid" type="submit">
              Send enquiry ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
