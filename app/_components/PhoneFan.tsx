import { ProductVisual } from "./ProductVisual";

type Shot = string | undefined;

export function PhoneFan({
  kind,
  images,
}: {
  kind: string;
  images: { front: Shot; left: [Shot, Shot, Shot]; right: [Shot, Shot, Shot] };
}) {
  const { front, left, right } = images;
  return (
    <div className="phone-fan">
      <div className="phone-fan-item back-left-3">
        <ProductVisual kind={`${kind}-l3`} phone image={left[2]} />
      </div>
      <div className="phone-fan-item back-right-3">
        <ProductVisual kind={`${kind}-r3`} phone image={right[2]} />
      </div>
      <div className="phone-fan-item back-left-2">
        <ProductVisual kind={`${kind}-l2`} phone image={left[1]} />
      </div>
      <div className="phone-fan-item back-right-2">
        <ProductVisual kind={`${kind}-r2`} phone image={right[1]} />
      </div>
      <div className="phone-fan-item back-left">
        <ProductVisual kind={`${kind}-l1`} phone image={left[0]} />
      </div>
      <div className="phone-fan-item back-right">
        <ProductVisual kind={`${kind}-r1`} phone image={right[0]} />
      </div>
      <div className="phone-fan-item center">
        <ProductVisual kind={`${kind}-front`} phone image={front} />
      </div>
    </div>
  );
}
