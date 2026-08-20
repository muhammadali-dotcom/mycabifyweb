import Link from "next/link";
import { solutions } from "../../_data/home";
import { Screen } from "./Screen";

export function EcosystemSection({ onPlayVideo }: { onPlayVideo: (name: string) => void }) {
  return (
    <section id="platform" className="ecosystem">
      <div className="section-head">
        <div>
          <p className="kicker">THE MYCABIFY ECOSYSTEM</p>
          <h2>
            Four connected solutions.
            <br />
            <em>One complete operation.</em>
          </h2>
        </div>
        <p>
          Four products, one shared system — a booking made anywhere shows up
          instantly for your team, your drivers and your passengers.
        </p>
      </div>
      <div className="solution-grid">
        {solutions.map((s) => (
          <article key={s.name}>
            <div className="solution-meta">
              <span>
                {s.no} / {s.role}
              </span>
              <span>{s.time}</span>
            </div>
            <button className="film" onClick={() => onPlayVideo(s.name)}>
              <div>
                <Screen type={s.type} image={s.image} />
              </div>
              <i>▶</i>
              <strong>{s.role}</strong>
            </button>
            <div className="solution-copy">
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <div>
                <button onClick={() => onPlayVideo(s.name)}>Watch film</button>
                <Link href={s.href}>Explore solution ↗</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
