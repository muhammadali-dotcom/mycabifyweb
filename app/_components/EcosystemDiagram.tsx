const nodes = [
  { label: "Dispatch System", no: "01", pos: "tl" },
  { label: "Driver App", no: "02", pos: "tr" },
  { label: "Passenger App", no: "03", pos: "bl" },
  { label: "Web Booker", no: "04", pos: "br" },
];

export function EcosystemDiagram() {
  return (
    <div className="ecosystem-diagram">
      <svg className="eco-lines" viewBox="0 0 460 460" preserveAspectRatio="none">
        <line className="eco-line l0" x1="115" y1="115" x2="230" y2="230" />
        <line className="eco-line l1" x1="345" y1="115" x2="230" y2="230" />
        <line className="eco-line l2" x1="115" y1="345" x2="230" y2="230" />
        <line className="eco-line l3" x1="345" y1="345" x2="230" y2="230" />
      </svg>
      <div className="eco-hub">
        <b>MyCabify</b>
        <span>Connected Core</span>
      </div>
      <div className="eco-nodes">
        {nodes.map((n) => (
          <div className={`eco-node ${n.pos}`} key={n.label}>
            <span>{n.no}</span>
            <b>{n.label}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
