const before = [
  "Missed bookings",
  "Phones ringing off the hook",
  "Driver whereabouts unknown",
  "Spreadsheet chaos",
];
const after = [
  "Every booking captured",
  "One connected dispatch view",
  "Live driver tracking",
  "Real-time reporting",
];

export function WhyBeforeAfter() {
  return (
    <div className="before-after">
      <div className="ba-card ba-before">
        <span className="ba-label">Before</span>
        {before.map((x) => (
          <div className="ba-row" key={x}>
            <i>✕</i>
            <span>{x}</span>
          </div>
        ))}
      </div>
      <div className="ba-arrow">→</div>
      <div className="ba-card ba-after">
        <span className="ba-label">The MyCabify Way</span>
        {after.map((x) => (
          <div className="ba-row" key={x}>
            <i>✓</i>
            <span>{x}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
