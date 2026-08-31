import Image from "next/image";

export function ProductVisual({
  kind,
  phone,
  image,
  priority,
}: {
  kind: string;
  phone?: boolean;
  image?: string;
  priority?: boolean;
}) {
  return (
    <div className={`solution-ui ${kind}${phone ? " phone" : ""}${image ? " has-image" : ""}`}>
      {image ? (
        <Image
          src={image}
          alt={`${kind.replaceAll("-", " ")} screenshot`}
          fill
          className="phone-shot"
          priority={priority}
          sizes="(max-width: 640px) 60vw, 320px"
        />
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
              <Image src="/mycabify-logo.png" alt="" width={26} height={26} />
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
