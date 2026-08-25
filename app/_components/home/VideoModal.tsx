import { videoIds } from "../../_data/videos";

export function VideoModal({ video, close }: { video: string; close: () => void }) {
  const id = videoIds[video];

  return (
    <div className="overlay video-overlay">
      <div className="video-modal">
        <button className="close" onClick={close}>
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
