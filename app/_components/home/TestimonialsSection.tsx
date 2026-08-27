import Image from "next/image";
import { customers } from "../../_data/home";

export function TestimonialsSection() {
  const track = [...customers, ...customers];

  return (
    <section className="proof customer-proof">
      <div className="proof-heading compact">
        <div>
          <p className="kicker proof-heading-kicker">TRUSTED BY</p>
          <h2>Our Clients</h2>
          <span className="proof-heading-underline" />
        </div>
      </div>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {track.map((story, i) => (
            <div className="testimonial-card" key={`${story.name}-${i}`}>
              <div className="quote-logo">
                <Image src={story.logo} alt={`${story.name} logo`} width={72} height={72} />
                <b>{story.name}</b>
              </div>
              <blockquote>
                <span className="quote-mark">&ldquo;</span>
                <span>{story.quote}</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
