"use client";

export function DispatchMockup({
  hero = "/dispatch-system/dispatch-hero.png",
}: {
  hero?: string;
}) {
  return (
    <figure className="mc-device-showcase mc-photo-showcase" aria-label="MyCabify dispatch system across control room displays">
      <img className="mc-hardware-photo" src={hero} alt="Dispatch dashboard and wallboard screens shown on office monitors and laptops" draggable={false} />
    </figure>
  );
}
