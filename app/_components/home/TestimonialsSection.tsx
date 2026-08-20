import { customers } from "../../_data/home";

export function TestimonialsSection() {
  return (
    <section className="proof customer-proof">
      <div className="proof-heading compact">
        <div>
          <p className="kicker">CUSTOMER STORIES / REAL OPERATORS</p>
          <h2>
            Less to manage.
            <br />
            <em>More confidence every day.</em>
          </h2>
        </div>
        <p>
          Hear from taxi operators using MyCabify to make booking and dispatch
          feel simpler.
        </p>
      </div>
      <div className="testimonial-grid">
        {customers.map((story) => (
          <article key={story.name}>
            <img src={story.logo} alt={`${story.name} logo`} />
            <blockquote>“{story.quote}”</blockquote>
            <footer>
              <b>{story.name}</b>
              <span>{story.detail}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
