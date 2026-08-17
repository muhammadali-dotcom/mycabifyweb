export function VideoModal({ video, close }: { video: string; close: () => void }) {
  return (
    <div className="overlay">
      <div className="video-modal">
        <button className="close" onClick={close}>
          ×
        </button>
        <div>
          <span>▶</span>
          <b>{video.toUpperCase()} FILM</b>
          <small>PUBLIC YOUTUBE EMBED GOES HERE</small>
        </div>
      </div>
    </div>
  );
}
