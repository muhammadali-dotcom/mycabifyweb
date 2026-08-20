import Link from "next/link";

export function AboutClosingCta() {
  return (
    <section className="connected">
      <p className="kicker pale">WORK WITH MYCABIFY</p>
      <h2>Let’s build the right platform around your business.</h2>
      <p>
        Tell us about your fleet, current system and operational requirements.
        We’ll show you how MyCabify can fit your business.
      </p>
      <div>
        <Link className="cream-btn" href="/contact#enquiry">
          Book a Demo ↗
        </Link>
      </div>
    </section>
  );
}
