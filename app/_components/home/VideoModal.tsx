import { videoIds } from "../../_data/videos";
import styles from "./VideoModal.module.css";

export function VideoModal({ video, close }: { video: string; close: () => void }) {
  const id = videoIds[video];

  return (
    <div
      className={`overlay ${styles.videoOverlay}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${video} video`}
    >
      <div className={styles.videoModal}>
        <button className="close" onClick={close} aria-label="Close">
          ×
        </button>
        {id ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={`${video} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div>
            <span>▶</span>
            <b>{video.toUpperCase()} FILM</b>
            <small>PUBLIC YOUTUBE EMBED GOES HERE</small>
          </div>
        )}
      </div>
    </div>
  );
}
