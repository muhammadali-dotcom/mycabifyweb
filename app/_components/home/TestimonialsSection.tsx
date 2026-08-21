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
      </div>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {[...customers, ...customers].map((story, i) => (
            <div className="testimonial-line" key={`${story.name}-${i}`}>
              <img src={story.logo} alt={`${story.name} logo`} />
              <b>{story.name}</b>
              <blockquote>{story.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
