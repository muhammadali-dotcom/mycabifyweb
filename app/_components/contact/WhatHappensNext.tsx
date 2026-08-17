const steps = [
  "We review your enquiry",
  "The relevant team member contacts you",
  "We understand your current operation",
  "We arrange a focused demonstration or discussion",
];

export function WhatHappensNext() {
  return (
    <section className="mc-section happens-next">
      <p className="kicker">AFTER YOU CONTACT US / NO GUESSWORK</p>
      <h2>A useful conversation starts before the demonstration.</h2>
      <div className="next-steps">
        {steps.map((s, i) => (
          <article key={s}>
            <span>0{i + 1}</span>
            <b>{s}</b>
          </article>
        ))}
      </div>
      <p className="clarify">
        We use the information you provide to make the next conversation
        relevant to your fleet, current system and goals.
      </p>
    </section>
  );
}
