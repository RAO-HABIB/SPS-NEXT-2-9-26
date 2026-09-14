'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface LazyVideoProps {
  src: string;
  webmSrc?: string;
  poster: string;
  className?: string;
  priority?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  onEnded?: () => void;
  onTimeUpdate?: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
  videoRef?: (el: HTMLVideoElement | null) => void;
  style?: React.CSSProperties;
}

export default function LazyVideo({
  src,
  webmSrc,
  poster,
  className,
  priority = false,
  autoPlay = true,
  muted = true,
  loop = false,
  playsInline = true,
  onEnded,
  onTimeUpdate,
  videoRef,
  style,
}: LazyVideoProps) {
  const localRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority) return;
    const el = localRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '50px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [priority]);

  const setRefs = (el: HTMLVideoElement | null) => {
    localRef.current = el;
    if (videoRef) {
      videoRef(el);
    }
  };

  return (
    <video
      ref={setRefs}
      poster={poster}
      preload="none"
      muted={muted}
      playsInline={playsInline}
      autoPlay={shouldLoad && autoPlay}
      loop={loop}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      className={className}
      style={style}
      aria-hidden="true"
    >
      {shouldLoad && webmSrc && <source src={webmSrc} type="video/webm" />}
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
