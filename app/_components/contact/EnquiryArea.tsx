"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./EnquiryArea.module.css";

const moments = [
  {
    title: "Booked in seconds",
    detail: "A passenger confirms pickup and drop-off in one smooth flow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="7.5" r="3.2" />
        <path d="M5 20c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Driver arrived in few minutes ",
    detail: "Live dispatch keeps every job moving on time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.4" />
        <path d="M12 6v3.6M12 14.4V18M6 12h3.6M14.4 12H18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Queue cleared before the rush",
    detail: "Bookings route themselves to the nearest available driver.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="1.5" />
        <path d="M3 9h18M8 4v5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "5-star ride, every time",
    detail: "Consistent, reliable trips your customers keep coming back for.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M12 3.8l2.4 5 5.4.6-4 3.8.9 5.4L12 15.9l-4.7 2.7.9-5.4-4-3.8 5.4-.6z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ROTATE_MS = 3800;

type Status = "idle" | "sending" | "success" | "error";

export function EnquiryArea() {
  const [i, setI] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const paused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "enquiry",
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          currentSystem: data.get("currentSystem"),
          fleetSize: data.get("fleetSize"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused.current) setI((n) => (n + 1) % moments.length);
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
    <section id="enquiry" className={`mc-section ${styles.enquiryFormSection}`}>
      <div className={styles.enquiryLayout}>
        <div className={styles.enquiryIntro}>
          <p className="kicker">BOOK A PERSONALISED DEMO</p>
          <h2>How to contact us</h2>
          <p className={styles.enquiryIntroCopy}>
            Getting in touch with MyCabify is simple. Fill out the form, email us, or book a demo
            directly, whichever works best for you. Whether you have questions about our platform,
            pricing, or support, our team will get back to you with the answers you need.
          </p>
          <a className={styles.enquiryContactEmail} href="mailto:info@mycabify.com">
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
          <div
            className={styles.momentCard}
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
          >
            <div className={styles.momentContent} key={i}>
              <span className={styles.momentIcon}>{moments[i].icon}</span>
              <div>
                <b className={styles.momentTitle}>{moments[i].title}</b>
                <p className={styles.momentDetail}>{moments[i].detail}</p>
              </div>
            </div>
            <div className={styles.momentProgress}>
              {moments.map((m, idx) => (
                <button
                  key={m.title}
                  type="button"
                  className={`${styles.momentProgressSegment} ${idx < i ? "done" : ""}`}
                  aria-label={`Show moment ${idx + 1}`}
                  onClick={() => jumpTo(idx)}
                >
                  <span
                    key={idx === i ? i : `static-${idx}`}
                    className={`${styles.momentProgressFill} ${idx === i ? "active" : ""}`}
                    style={idx === i ? { animationDuration: `${ROTATE_MS}ms` } : undefined}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className={styles.enquiryContactBlock}></div>
        </div>

        <div className={`${styles.enquiryPanel} modal`}>
          <p className="kicker">BOOK A DEMO</p>
          <h2>Tell us about your operation.</h2>
          <form id="enquiry-form" onSubmit={handleSubmit}>
            <div className={styles.enquiryFields}>
              <div className={styles.field}>
                <label htmlFor="enquiry-name">
                  Full name<span className={styles.req}>*</span>
                </label>
                <input
                  id="enquiry-name"
                  name="name"
                  required
                  aria-required="true"
                  placeholder="Jane Smith"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="enquiry-company">
                  Company name<span className={styles.req}>*</span>
                </label>
                <input
                  id="enquiry-company"
                  name="company"
                  required
                  aria-required="true"
                  placeholder="Your fleet name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="enquiry-email">
                  Work email<span className={styles.req}>*</span>
                </label>
                <input
                  id="enquiry-email"
                  name="email"
                  required
                  aria-required="true"
                  type="email"
                  placeholder="jane@yourfleet.com"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="enquiry-phone">
                  Phone number<span className={styles.req}>*</span>
                </label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  required
                  aria-required="true"
                  placeholder="07000 000000"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="enquiry-current-system">Current system</label>
                <input
                  id="enquiry-current-system"
                  name="currentSystem"
                  placeholder="Current System (if any)"
                />
              </div>
              <div className={`${styles.field} ${styles.fieldFull}`}>
                <label htmlFor="enquiry-fleet-size">Fleet size</label>
                <select id="enquiry-fleet-size" name="fleetSize" defaultValue="">
                  <option value="" disabled>
                    Select fleet size
                  </option>
                  <option>1–10 vehicles</option>
                  <option>11–20 vehicles</option>
                  <option>21–50 vehicles</option>
                  <option>51–100+ vehicles</option>
                </select>
              </div>
              <div className={`${styles.field} ${styles.fieldFull}`}>
                <label htmlFor="enquiry-message">What would you like to improve?</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  placeholder="Tell us a bit about your current setup"
                />
              </div>
            </div>
            <button className="solid" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send enquiry ↗"}
            </button>
            {status === "success" && (
              <p className={styles.formStatusSuccess}>Thanks! We&apos;ll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className={styles.formStatusError}>
                Something went wrong. Please try again or email info@mycabify.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
