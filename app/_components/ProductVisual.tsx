export function ProductVisual({
  kind,
  phone,
  image,
}: {
  kind: string;
  phone?: boolean;
  image?: string;
}) {
  return (
    <div
      className={`solution-ui ${kind}${phone ? " phone" : ""}${image ? " has-image" : ""}`}
    >
      {image ? (
        <img src={image} alt="" className="phone-shot" />
      ) : (
        <>
          <div>
            <i />
            <i />
            <i />
            <b>MYCABIFY / {kind.replaceAll("-", " ").toUpperCase()}</b>
          </div>
          <section>
            <aside>
              <img src="/mycabify-logo.png" alt="" />
              <i />
              <i />
              <i />
              <i />
            </aside>
            <main>
              <span />
              <span />
              <div />
              <small>REAL PRODUCT SCREEN</small>
            </main>
          </section>
        </>
      )}
    </div>
  );
}
