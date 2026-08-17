export function ClosingSection({ onDemo }: { onDemo: () => void }) {
  return (
    <section id="contact" className="closing">
      <p className="kicker pale">READY WHEN YOU ARE</p>
      <h2>See a simpler way to run your taxi company.</h2>
      <button className="cream-btn" onClick={onDemo}>
        Book a Personalised Demo ↗
      </button>
    </section>
  );
}
