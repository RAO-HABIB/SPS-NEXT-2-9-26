"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { HERO_SLIDES } from "@/data/hero";

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
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 z-20 bg-slate-950/60" />
        <div className="absolute inset-0 z-20 bg-linear-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 p-2 text-white/90 hover:text-white transition-colors"
        aria-label="Previous Slide"
      >
        <Icon icon="ph:caret-left-light" className="text-2xl sm:text-3xl md:text-4xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 p-2 text-white/90 hover:text-white transition-colors"
        aria-label="Next Slide"
      >
        <Icon icon="ph:caret-right-light" className="text-2xl sm:text-3xl md:text-4xl" />
      </button>

      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-col items-center gap-6 sm:gap-8 px-8 sm:px-12 md:px-16 lg:px-24 pb-12 sm:pb-14 pt-20 sm:pt-24 lg:flex-row lg:gap-16 lg:pb-20 lg:pt-28">
        <div className="flex-1 max-w-2xl w-full text-center lg:text-left">
          <div key={currentSlide.id} className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-cyan-300">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-300 animate-pulse" />
              {currentSlide.eyebrow}
            </div>

            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[64px] font-bold leading-tight text-white lg:leading-[1.1]">
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
                    <span className="text-sm sm:text-base lg:text-sm xl:text-base leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl leading-relaxed text-slate-200 lg:max-w-xl mx-auto lg:mx-0">
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

        {/* ============ RIGHT — Video Slider Card ============ */}
        <div className="hidden lg:flex w-full max-w-[300px] lg:max-w-[320px] xl:max-w-[340px] shrink-0 justify-end">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 group">
            {/* Video slides */}
            {HERO_SLIDES.map((s, i) => (
              <video
                key={s.id}
                src={s.video}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

            {/* Card content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              {/* Top */}
              <div className="flex items-center justify-between relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  LIVE PREVIEW
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(HERO_SLIDES.length).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom */}
              <div key={`card-${currentSlide.id}`} className="animate-fade-in relative z-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {currentSlide.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight">
                  {currentSlide.title}{" "}
                  <span className="text-cyan-300">{currentSlide.highlight}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 line-clamp-3">
                  {currentSlide.description}
                </p>

                {/* Controls */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      aria-label="Previous slide"
                      onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md transition hover:bg-white/30"
                    >
                      <Icon icon="ph:arrow-left-light" width={16} />
                    </button>
                    <button
                      aria-label="Next slide"
                      onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md transition hover:bg-white/30"
                    >
                      <Icon icon="ph:arrow-right-light" width={16} />
                    </button>
                  </div>

                  {/* Dots */}
                  <div className="flex gap-1.5">
                    {HERO_SLIDES.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={(e) => { e.stopPropagation(); goToSlide(i); }}
                        aria-label={`Go to ${s.eyebrow}`}
                        className={`h-1.5 rounded-full transition-all ${i === active
                            ? "w-7 bg-cyan-300"
                            : "w-4 bg-white/40 hover:bg-white/60"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    key={`progress-${active}`}
                    className={`h-full bg-cyan-300 transition-all duration-100 ease-linear`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}