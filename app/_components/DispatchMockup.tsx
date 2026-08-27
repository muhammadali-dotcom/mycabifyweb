"use client";

import Image from "next/image";

export function DispatchMockup({
  hero = "/dispatch-system/dispatch-hero.png",
}: {
  hero?: string;
}) {
  return (
    <figure className="mc-device-showcase mc-photo-showcase" aria-label="MyCabify dispatch system across control room displays">
      <Image
        className="mc-hardware-photo"
        src={hero}
        alt="Dispatch dashboard and wallboard screens shown on office monitors and laptops"
        fill
        draggable={false}
        sizes="(max-width: 720px) 100vw, 680px"
      />
    </figure>
  );
}
