"use client";
import { useEffect, useRef, useState } from "react";

export function ProductFilmEmbed({ videoId, title }: { videoId: string; title: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: isMuted ? "1" : "0",
    loop: "1",
    playlist: videoId,
    playsinline: "1",
  });

  return (
    <div ref={wrapperRef} className="product-film-embed">
      {isVisible ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
            title={`${title} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0 }}
          />
          {isMuted && (
            <button
              type="button"
              className="product-film-unmute"
              onClick={() => setIsMuted(false)}
            >
              🔇 Tap to unmute
            </button>
          )}
        </>
      ) : (
        <>
          <span>▶</span>
          <b>{title}</b>
        </>
      )}
    </div>
  );
}
