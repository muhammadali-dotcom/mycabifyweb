const benefits = [
  {
    title: "Always there when you need us",
    copy: "Round-the-clock support whenever your operation needs a hand — day, night, and everything in between.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Everything working as one",
    copy: "Dispatch, drivers, passengers and bookings connected through a single platform, not a patchwork of separate tools.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="1.6">
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="18" cy="6" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <path d="M8 7.2L11 16M16 7.2L13 16M8.4 6H15.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built around your fleet",
    copy: "MyCabify adapts to your fleet size, workflows and the way your business already runs — not the other way round.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 8h16M4 16h16" />
        <circle cx="9" cy="8" r="1.8" fill="white" stroke="none" />
        <circle cx="15" cy="16" r="1.8" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    title: "You're never on your own",
    copy: "From setup and data migration to training, testing and go-live, we're with you at every step.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13l3.5-3.5a2 2 0 0 1 2.8 0L11 10l2-2a2 2 0 0 1 2.8 0L20 12" />
        <path d="M4 13l3 3 1.5-1.5L11 17l2-2 1.5 1.5L20 12" />
      </svg>
    ),
  },
  {
    title: "Complete capability, sensible cost",
    copy: "Everything a modern taxi operation needs, without paying for enterprise complexity you'll never use.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M12 3.5l7 7-8.5 8.5-7-7z" strokeLinecap="round" />
        <circle cx="9.2" cy="8.2" r="1.1" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Technology your whole team will use",
    copy: "A modern, intuitive experience so controllers, drivers and passengers feel confident from day one.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6.5h16v9H9l-3 3v-3H4z" />
        <path d="M8.5 11h7" />
      </svg>
    ),
  },
];

export function WhyMyCabify() {
  return (
    <section className="mc-section why-mycabify">
      <p className="kicker">WHY MYCABIFY / MORE THAN SOFTWARE</p>
      <h2>A partner that makes taxi management easier, not harder.</h2>
      <div className="benefit-cards">
        {benefits.map((b) => (
          <article className="benefit-card" key={b.title}>
            <div className="benefit-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
