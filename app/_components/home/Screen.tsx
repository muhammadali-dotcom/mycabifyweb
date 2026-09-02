import Image from "next/image";
import styles from "./Screen.module.css";

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
      <div className={`${styles.screen} ${styles[type] ?? ""} ${styles.hasImage}`}>
        <Image
          src={image}
          alt=""
          fill
          className={styles.screenShot}
          draggable={false}
          priority={priority}
          sizes={sizes}
        />
      </div>
    );
  }
  return (
    <div className={`${styles.screen} ${styles[type] ?? ""}`}>
      <div className={styles.screenTop}>
        <i />
        <i />
        <i />
        <b>MYCABIFY</b>
        <span>LIVE OPERATION</span>
      </div>
      <div className={styles.screenBody}>
        <aside>
          <strong>
            <Image src="/mycabify-logo.png" alt="" width={24} height={24} />
          </strong>
          {[1, 2, 3, 4, 5].map((x) => (
            <i key={x} />
          ))}
        </aside>
        <div className={styles.screenMain}>
          <div className={styles.metrics}>
            <i />
            <i />
            <i />
          </div>
          <div className={styles.map}>
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
          <div className={styles.rows}>
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
