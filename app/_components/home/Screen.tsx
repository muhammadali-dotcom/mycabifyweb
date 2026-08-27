import Image from "next/image";

export function Screen({
  type = "desktop",
  image,
  priority = false,
  sizes = "(max-width: 640px) 60vw, 320px",
}: {
  type?: string;
  image?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (image) {
    return (
      <div className={`screen ${type} has-image`}>
        <Image
          src={image}
          alt=""
          fill
          className="screen-shot"
          draggable={false}
          priority={priority}
          sizes={sizes}
        />
      </div>
    );
  }
  return (
    <div className={`screen ${type}`}>
      <div className="screen-top">
        <i />
        <i />
        <i />
        <b>MYCABIFY</b>
        <span>LIVE OPERATION</span>
      </div>
      <div className="screen-body">
        <aside>
          <strong>
            <Image src="/mycabify-logo.png" alt="" width={24} height={24} />
          </strong>
          {[1, 2, 3, 4, 5].map((x) => (
            <i key={x} />
          ))}
        </aside>
        <div className="screen-main">
          <div className="metrics">
            <i />
            <i />
            <i />
          </div>
          <div className="map">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
          <div className="rows">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <small>REAL MYCABIFY SCREEN</small>
    </div>
  );
}
