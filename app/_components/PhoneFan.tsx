import { ProductVisual } from "./ProductVisual";
import styles from "./PhoneFan.module.css";

type Shot = string | undefined;

export function PhoneFan({
  kind,
  images,
  priority = false,
}: {
  kind: string;
  images: { front: Shot; left: [Shot, Shot, Shot]; right: [Shot, Shot, Shot] };
  priority?: boolean;
}) {
  const { front, left, right } = images;
  return (
    <div className={styles.phoneFan}>
      <div className={`${styles.phoneFanItem} ${styles.backLeft3}`}>
        <ProductVisual kind={`${kind}-l3`} phone image={left[2]} />
      </div>
      <div className={`${styles.phoneFanItem} ${styles.backRight3}`}>
        <ProductVisual kind={`${kind}-r3`} phone image={right[2]} />
      </div>
      <div className={`${styles.phoneFanItem} ${styles.backLeft2}`}>
        <ProductVisual kind={`${kind}-l2`} phone image={left[1]} />
      </div>
      <div className={`${styles.phoneFanItem} ${styles.backRight2}`}>
        <ProductVisual kind={`${kind}-r2`} phone image={right[1]} />
      </div>
      <div className={`${styles.phoneFanItem} ${styles.backLeft}`}>
        <ProductVisual kind={`${kind}-l1`} phone image={left[0]} />
      </div>
      <div className={`${styles.phoneFanItem} ${styles.backRight}`}>
        <ProductVisual kind={`${kind}-r1`} phone image={right[0]} />
      </div>
      <div className={`${styles.phoneFanItem} ${styles.center}`}>
        <ProductVisual kind={`${kind}-front`} phone image={front} priority={priority} />
      </div>
    </div>
  );
}
