export function Screen({ type = "desktop", image }: { type?: string; image?: string }) {
  if (image) {
    return (
      <div className={`screen ${type} has-image`}>
        <img src={image} alt="" className="screen-shot" draggable={false} />
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
            <img src="/mycabify-logo.png" alt="" />
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
