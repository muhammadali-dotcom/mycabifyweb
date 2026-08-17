import { ProductVisual } from "../ProductVisual";

export function ContactHero() {
  return (
    <section className="contact-hero">
      <div>
        <p className="kicker">CONTACT MYCABIFY / START A CONVERSATION</p>
        <h1>Let's talk about what your operation needs.</h1>
        <p>
          Whether you want a demo, a quote, or help moving from your current
          system, our team is ready to talk. Call{" "}
          <a href="tel:02084558888">020 8455 8888</a> or email{" "}
          <a href="mailto:info@mycabify.com">info@mycabify.com</a>.
        </p>
      </div>
      <ProductVisual kind="dispatch-system" />
    </section>
  );
}
