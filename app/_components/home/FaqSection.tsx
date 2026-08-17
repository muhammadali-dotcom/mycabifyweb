const faqs = [
  [
    "What is MyCabify?",
    "MyCabify is a complete taxi management platform connecting bookings, dispatch, drivers, passengers and daily operational work.",
  ],
  [
    "What fleet sizes can use MyCabify?",
    "MyCabify is designed for UK taxi and private-hire operators of every size, with configuration based on business requirements.",
  ],
  [
    "Can you help us move from our existing system?",
    "Yes. Support can include setup, relevant data migration, training, testing and go-live planning.",
  ],
  [
    "Can MyCabify be customised?",
    "Yes. The platform can be configured around your fleet, workflows and specific operational needs.",
  ],
  [
    "Are the mobile apps available on iOS and Android?",
    "The MyCabify apps are available on iOS, with Android availability being prepared for launch.",
  ],
  [
    "How does pricing work?",
    "Pricing depends on your fleet, required solutions and implementation needs. Request a tailored quote from our team.",
  ],
  [
    "What support is available after launch?",
    "MyCabify provides 24/7 customer support for your ongoing operation.",
  ],
];

export function FaqSection() {
  return (
    <section className="faq">
      <p className="kicker">COMMON QUESTIONS / CLEAR ANSWERS</p>
      <h2>Everything you need to know.</h2>
      {faqs.map((x) => (
        <details key={x[0]}>
          <summary>
            {x[0]}
            <span>+</span>
          </summary>
          <p>{x[1]}</p>
        </details>
      ))}
    </section>
  );
}
