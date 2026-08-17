const faqs: [string, string][] = [
  ["Can I request a tailored quote?", "Yes. Pricing is based on your fleet, required solutions and implementation needs."],
  ["Can you demonstrate specific features?", "Yes. Tell us what matters most and the demonstration can focus on the relevant workflows."],
  ["Can you help us move from another system?", "Yes. Support can include setup, relevant data migration, training, testing and go-live."],
  ["Do you support operators throughout the UK?", "Yes. MyCabify is designed for taxi and private-hire operators across the UK."],
  ["What should I prepare before a demo?", "It helps to know your approximate fleet size, current system or process, main operational challenges and the products you want to explore."],
  ["Is support available after launch?", "Yes. MyCabify provides 24/7 customer support."],
];

export function ContactFaq() {
  return (
    <section className="mc-section contact-faq">
      <p className="kicker">CONTACT FAQ / COMMON QUESTIONS</p>
      <h2>Answers before you reach out.</h2>
      {faqs.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span>+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </section>
  );
}
