"use client";

export function ContactClosingCta() {
  const startEnquiry = () => {
    const section = document.getElementById("enquiry");
    if (!section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    window.setTimeout(
      () => {
        const firstField = document.querySelector<HTMLElement>(
          "#enquiry-form input, #enquiry-form select, #enquiry-form textarea",
        );
        firstField?.focus();
      },
      reducedMotion ? 0 : 500,
    );
  };

  return (
    <section className="connected">
      <p className="kicker pale">NOT SURE WHERE TO START?</p>
      <h2>You don’t need to know exactly what to ask.</h2>
      <p>
        Tell us what feels difficult in your operation today. We’ll help
        identify which parts of MyCabify are most relevant.
      </p>
      <div>
        <button className="cream-btn" type="button" onClick={startEnquiry}>
          Start Your Enquiry ↗
        </button>
      </div>
    </section>
  );
}
