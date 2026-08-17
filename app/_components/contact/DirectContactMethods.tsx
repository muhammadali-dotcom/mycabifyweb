// TODO: set the confirmed WhatsApp business number (e.g. via
// NEXT_PUBLIC_WHATSAPP_NUMBER) once available, then enable this button and
// link it to https://wa.me/<number>.
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function DirectContactMethods() {
  return (
    <section className="mc-section direct-methods">
      <p className="kicker pale">DIRECT CONTACT / SPEAK WITH US</p>
      <h2>Reach MyCabify however suits you best.</h2>
      <div className="method-grid">
        <article>
          <b>CALL OUR TEAM</b>
          <a className="method-value" href="tel:02084558888">
            020 8455 8888
          </a>
          <p>Speak directly with MyCabify about your operation.</p>
        </article>
        <article>
          <b>EMAIL US</b>
          <a className="method-value" href="mailto:info@mycabify.com">
            info@mycabify.com
          </a>
          <p>Send us your requirements and company details.</p>
        </article>
        <article>
          <b>WHATSAPP</b>
          {whatsappNumber ? (
            <a className="method-value" href={`https://wa.me/${whatsappNumber}`}>
              Start a WhatsApp chat
            </a>
          ) : (
            <button className="method-value" disabled aria-disabled="true">
              WhatsApp — number to be configured
            </button>
          )}
          <p>Start a direct conversation with our team.</p>
        </article>
      </div>
    </section>
  );
}
