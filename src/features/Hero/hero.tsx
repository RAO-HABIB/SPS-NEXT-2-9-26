"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { HERO_SLIDES } from "@/data/hero";
import LazyVideo from "@/components/LazyVideo";
import HeroVideoDelayed from "@/components/HeroVideoDelayed";

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
    if (active !== 0) {
      const video = videoRefs.current[active];
      if (video) {
        video.currentTime = 0;
        video.play().catch((e) => console.log("Auto-play prevented", e));
      }
    }
  }, [active]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const currentSlide = HERO_SLIDES[active];

  return (
    <section className="relative w-full h-[100dvh] min-h-[550px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-slate-950 flex items-center">
      <div className="absolute inset-0 z-0">
        {active === 0 ? (
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/posters/hero-bg3.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <HeroVideoDelayed />
          </div>
        ) : (
          HERO_SLIDES.map((slide, index) =>
            index === active ? (
              <LazyVideo
                key={slide.id}
                videoRef={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={slide.video}
                webmSrc={slide.webmVideo}
                poster={slide.poster}
                priority={true}
                muted
                playsInline
                onEnded={() => {
                  if (active === index) nextSlide();
                }}
                onTimeUpdate={active === index ? handleTimeUpdate : undefined}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 opacity-100 z-10"
              />
            ) : null
          )
        )}
        <div className="absolute inset-0 z-20 bg-slate-950/60" />
        <div className="absolute inset-0 z-20 bg-linear-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 mt-12 sm:mt-16 lg:mt-20 z-40 p-2 text-white/90 hover:text-white transition-colors cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 mt-12 sm:mt-16 lg:mt-20 z-40 p-2 text-white/90 hover:text-white transition-colors cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      </button>

      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-col items-center gap-6 sm:gap-8 px-8 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-24 mt-12 sm:mt-16 lg:mt-20 lg:flex-row lg:gap-10 lg:justify-between">
        <div className="flex-1 max-w-2xl w-full text-center lg:text-left">
          <div key={currentSlide.id} className="hero-fade">
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
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
                <ArrowRight className="w-4 h-4" />
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
        <div className="hidden lg:flex w-full max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] shrink-0 justify-end">
          <div className="relative h-[450px] lg:h-[480px] xl:h-[510px] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 group">
            {/* Active video slide only */}
            <LazyVideo
              key={`card-video-${currentSlide.id}`}
              src={currentSlide.video}
              webmSrc={currentSlide.webmVideo}
              poster={currentSlide.poster}
              autoPlay={true}
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 opacity-100 z-10"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-15 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

            {/* Card content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
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
              <div key={`card-${currentSlide.id}`} className="relative z-10">
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
                      onClick={(e) => {
                        e.stopPropagation();
                        prevSlide();
                      }}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md transition hover:bg-white/30 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 text-white" />
                    </button>
                    <button
                      aria-label="Next slide"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextSlide();
                      }}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md transition hover:bg-white/30 cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Dots */}
                  <div className="flex gap-1.5">
                    {HERO_SLIDES.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToSlide(i);
                        }}
                        aria-label={`Go to ${s.eyebrow}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === active ? "w-7 bg-cyan-300" : "w-4 bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    key={`progress-${active}`}
                    className="h-full bg-cyan-300 transition-all duration-100 ease-linear"
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