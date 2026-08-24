import { featureIcons } from "../../_data/featureIcons";

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
  return (
    <section className="faq">
      <p className="kicker">FAQ</p>
      <h2>Everything you need to know.</h2>
      {faqs.map((x) => (
        <details key={x[0]}>
          <summary>
            <div className="faq-header">
              <div className="faq-badge">
                <span className="faq-badge-icon">{featureIcons[x[2]]}</span>
                <span className="faq-badge-label">{x[3]}</span>
              </div>
              <span className="faq-question">{x[0]}</span>
            </div>
            <span>+</span>
          </summary>
          <p>{x[1]}</p>
        </details>
      ))}
    </section>
  );
}
