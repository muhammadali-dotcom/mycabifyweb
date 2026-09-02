"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "error";

export function DemoModal({ close }: { close: () => void }) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "demo",
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
      close();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label="Book a personalised demo">
      <div className="modal">
        <button className="close" onClick={close} aria-label="Close">
          ×
        </button>
        <p className="kicker">BOOK A PERSONALISED DEMO</p>
        <h2>Tell us about your operation.</h2>
        <p>Share a few details and our team will contact you to arrange the right conversation.</p>
        <form onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="demo-name">
            Full name
          </label>
          <input id="demo-name" name="name" required placeholder="Full name" />
          <label className="sr-only" htmlFor="demo-company">
            Company name
          </label>
          <input id="demo-company" name="company" required placeholder="Company name" />
          <div>
            <label className="sr-only" htmlFor="demo-email">
              Work email
            </label>
            <input id="demo-email" name="email" required type="email" placeholder="Work email" />
            <label className="sr-only" htmlFor="demo-phone">
              Phone number
            </label>
            <input id="demo-phone" name="phone" required placeholder="Phone number" />
          </div>
          <label className="sr-only" htmlFor="demo-current-system">
            Current system
          </label>
          <input id="demo-current-system" name="currentSystem" placeholder="Current system (if any)" />
          <label className="sr-only" htmlFor="demo-fleet-size">
            Fleet size
          </label>
          <select id="demo-fleet-size" name="fleetSize" defaultValue="">
            <option value="" disabled>
              Fleet size
            </option>
            <option>1–10 vehicles</option>
            <option>11–20 vehicles</option>
            <option>21–50 vehicles</option>
            <option>51–100+ vehicles</option>
          </select>
          <label className="sr-only" htmlFor="demo-message">
            What would you like to improve?
          </label>
          <textarea id="demo-message" name="message" placeholder="What would you like to improve?" />
          <button className="solid" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send enquiry ↗"}
          </button>
          {status === "error" && (
            <p style={{ color: "#c0392b", fontSize: "0.85rem" }}>
              Something went wrong. Please try again or email info@mycabify.com.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
