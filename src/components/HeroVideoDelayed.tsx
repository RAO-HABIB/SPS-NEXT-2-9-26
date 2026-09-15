'use client';

import { useEffect, useState } from 'react';

interface Props {
  onEnded?: () => void;
  onTimeUpdate?: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
}

export default function HeroVideoDelayed({ onEnded, onTimeUpdate }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Wait for full idle well after LCP window (5000ms timeout)
    const start = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setShow(true), { timeout: 5000 });
      } else {
        setTimeout(() => setShow(true), 4000);
      }
    };

    // Wait extra 1.5s AFTER window load event
    const onLoad = () => setTimeout(start, 1500);

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }
    return () => window.removeEventListener('load', onLoad);
  }, []);

  if (!show) return null;

  return (
    <video
      autoPlay
      muted
      playsInline
      preload="none"
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      poster="/images/posters/hero-bg3.webp"
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
      aria-hidden="true"
    >
      <source src="/videos/hero-bg3-hero.webm" type="video/webm" />
      <source src="/videos/hero-bg3-hero.mp4" type="video/mp4" />
    </video>
  );
}
