import { featureIcons } from "../../_data/featureIcons";

const support = [
  [
    "Guided setup",
    "target",
    "From day one, our team helps you configure MyCabify around your exact fleet needs, workflows and operations.",
  ],
  [
    "Migration assistance",
    "package",
    "We handle the technical lift of moving your data from legacy systems to MyCabify with zero operational downtime.",
  ],
  [
    "Staff and driver training",
    "graduation",
    "Complete onboarding programs for your control room staff and driver fleet, available online and in-person.",
  ],
  [
    "Go-live support",
    "rocket",
    "Dedicated support team on standby during your launch week to ensure smooth transition and rapid issue resolution.",
  ],
  [
    "Secure cloud infrastructure",
    "lock",
    "Enterprise-grade security, encrypted data storage, regular backups, and GDPR-compliant hosting on UK servers.",
  ],
  [
    "24/7 customer support",
    "clock247",
    "Round-the-clock support team available via phone, email, and live chat to help whenever you need assistance.",
  ],
];

export function SupportSection() {
  return (
    <section className="support dark">
      <p className="kicker pale">SUPPORT BEFORE, DURING AND AFTER LAUNCH</p>
      <h2>
        Your operation never stops. <em>Neither does our support.</em>
      </h2>
      <div className="support-cards">
        {support.map((x) => (
          <div key={x[0]} className="support-card">
            <div className="support-icon">
              {featureIcons[x[1]]}
            </div>
            <span className="support-label">{x[0]}</span>
              <p className="support-description">{x[2]}</p>
            </div>
        ))}
      </div>
    </section>
  );
}
