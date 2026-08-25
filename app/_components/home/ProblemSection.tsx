import { featureIcons } from "../../_data/featureIcons";

const problems = [
  [
    "01",
    "Too many places to look",
    "Calls, spreadsheets and separate tools leave the team asking where the right information is.",
    "scattered",
  ],
  [
    "02",
    "The same work, repeated",
    "Re-entering details and chasing updates steals time when the phones are already busy.",
    "duplicate",
  ],
  [
    "03",
    "Always reacting",
    "Without a clear live view, small issues become urgent problems before anyone sees them coming.",
    "alert",
  ],
  [
    "04",
    "Growth feels heavier",
    "More bookings should grow the business, not multiply stress for controllers, drivers and owners.",
    "heavy",
  ],
];

export function ProblemSection() {
  return (
    <section className="problem dark">
      <div className="intro">
        <p className="kicker pale">THE OPERATIONAL PROBLEM</p>
        <h2>
          Busy is part of the business.{" "}
          <em>Feeling out of control shouldn&apos;t be.</em>
        </h2>
      </div>
      <div className="problem-list">
        {problems.map((x) => (
          <article key={x[0]}>
            <div className="problem-icon">
              {featureIcons[x[3]]}
            </div>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
          </article>
        ))}
      </div>
      <div className="answer">
        <span className="answer-mark">
          <img src="/mycabify-logo.png" alt="MyCabify" />
        </span>
        <div>
          <p className="kicker pale">ONE CONNECTED ANSWER</p>
          <h2>Give your team clarity when the pressure is highest.</h2>
        </div>
        <p>
          MyCabify keeps the complete operation connected, so everyone knows
          what is happening and what needs to happen next.
        </p>
      </div>
    </section>
  );
}
