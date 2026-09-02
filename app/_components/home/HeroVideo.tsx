"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

export function HeroVideo({ videoId, title }: { videoId: string; title: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    playsinline: "1",
    loop: "1",
    playlist: videoId,
    modestbranding: "1",
    rel: "0",
  });

  return (
    <div ref={wrapperRef} className={styles.heroVideoFrame}>
      {isVisible && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.heroVideoIframe}
        />
      )}
    </div>
  );
}
