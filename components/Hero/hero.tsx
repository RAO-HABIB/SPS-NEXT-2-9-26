"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { HERO_SLIDES } from "../../lib/hero";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goToSlide = (index: number) => {
    setActive(index);
    setProgress(0);
  };

  const nextSlide = () => {
    goToSlide((active + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    goToSlide((active - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const video = videoRefs.current[active];
    if (video) {
      video.currentTime = 0;
      video.play().catch(e => console.log("Auto-play prevented", e));
    }
  }, [active]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const currentSlide = HERO_SLIDES[active];
  const nextPreviewSlide = HERO_SLIDES[(active + 1) % HERO_SLIDES.length];

  return (
    <section className="relative w-full h-[100dvh] min-h-[550px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-slate-950 flex items-center">
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <video preload="none"
            key={slide.id}
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            src={slide.video}
            muted
            playsInline
            onEnded={() => {
              if (active === index) nextSlide();
            }}
            onTimeUpdate={active === index ? handleTimeUpdate : undefined}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              active === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 z-20 bg-slate-950/60" />
        <div className="absolute inset-0 z-20 bg-linear-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
      </div>

      <button 
        onClick={prevSlide}
        className="hidden lg:block absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 p-2 text-white/90 hover:text-white transition-colors"
        aria-label="Previous Slide"
      >
        <Icon icon="lucide:chevron-left" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light" />
      </button>

      <button 
        onClick={nextSlide}
        className="hidden lg:block absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 p-2 text-white/90 hover:text-white transition-colors"
        aria-label="Next Slide"
      >
        <Icon icon="lucide:chevron-right" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light" />
      </button>

      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-col items-center gap-6 sm:gap-8 px-8 sm:px-12 md:px-16 lg:px-24 pb-12 sm:pb-14 pt-20 sm:pt-24 lg:flex-row lg:gap-16 lg:pb-20 lg:pt-28">
        <div className="flex-1 max-w-2xl w-full text-center lg:text-left">
          <div key={currentSlide.id} className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-cyan-300">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-300 animate-pulse" />
              {currentSlide.eyebrow}
            </div>

            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight text-white lg:leading-[1.1]">
              {currentSlide.title}{" "}
              <span className="text-cyan-300 block">{currentSlide.highlight}</span>
            </h1>

            {currentSlide.bullets ? (
              <ul className="mt-5 sm:mt-7 space-y-2 sm:space-y-3 text-left inline-block lg:block">
                {currentSlide.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-slate-200">
                    <span className="mt-0.5 sm:mt-1 grid h-4 w-4 sm:h-5 sm:w-5 shrink-0 place-items-center rounded-full bg-cyan-400/15 text-cyan-300">
                      <Icon icon="lucide:check" width={12} className="sm:w-[14px]" />
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-200 lg:max-w-xl mx-auto lg:mx-0">
                {currentSlide.description}
              </p>
            )}

            <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href={currentSlide.primaryCta.href}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#0057B8] px-4 sm:px-6 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:bg-[#004494] hover:shadow-lg hover:shadow-[#0057B8]/30"
              >
                {currentSlide.primaryCta.label}
                <Icon icon="lucide:arrow-right" />
              </Link>
              <Link
                href={currentSlide.secondaryCta.href}
                className="flex items-center justify-center rounded-lg border-2 border-white/70 px-4 sm:px-6 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:bg-white/10"
              >
                {currentSlide.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        <div 
          className="hidden lg:flex w-full max-w-[320px] shrink-0 justify-end cursor-pointer transition-transform hover:-translate-y-1" 
          onClick={nextSlide}
        >
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 group">
            <video preload="none"
              key={nextPreviewSlide.id}
              src={nextPreviewSlide.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold tracking-wider backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  UP NEXT
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  {String(((active + 1) % HERO_SLIDES.length) + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mb-1 relative z-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  {nextPreviewSlide.eyebrow}
                </p>
                <h2 className="mt-2 text-xl font-bold leading-tight">
                  {nextPreviewSlide.title} <span className="text-cyan-300">{nextPreviewSlide.highlight}</span>
                </h2>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1.5 w-full bg-white/20">
                <div 
                  className="h-full bg-cyan-300 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}