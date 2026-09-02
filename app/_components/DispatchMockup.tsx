"use client";

import Image from "next/image";
import styles from "./DispatchMockup.module.css";

export function DispatchMockup({
  hero = "/dispatch-system/dispatch-hero.png",
  priority = false,
}: {
  hero?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`${styles.mcDeviceShowcase} mc-photo-showcase`}
      aria-label="MyCabify dispatch system across control room displays"
    >
      <Image
        className={styles.mcHardwarePhoto}
        src={hero}
        alt="Dispatch dashboard and wallboard screens shown on office monitors and laptops"
        fill
        draggable={false}
        priority={priority}
        sizes="(max-width: 720px) 100vw, 680px"
      />
    </figure>
  );
}
