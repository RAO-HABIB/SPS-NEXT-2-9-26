"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, ArrowRight, ArrowLeft } from "lucide-react";

export default function Hero({ data }: { data?: any }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [initialDelayPassed, setInitialDelayPassed] = useState(false);

  useEffect(() => {
    const start = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setInitialDelayPassed(true), { timeout: 3000 });
      } else {
        setTimeout(() => setInitialDelayPassed(true), 2500);
      }
    };
    const onLoad = () => setTimeout(start, 1000);
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    if (data?.items?.length) {
      const interval = setInterval(() => {
        if (progress >= 100) {
          nextSlide();
        } else {
          setProgress(p => p + 1);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [active, progress, data]);

  const items = data?.items || [];
  const intro = data?.intro || {};

  const goToSlide = (index: number) => {
    setActive(index);
    setProgress(0);
  };

  const nextSlide = () => {
    if (items.length) goToSlide((active + 1) % items.length);
  };

  const prevSlide = () => {
    if (items.length) goToSlide((active - 1 + items.length) % items.length);
  };

  if (!items.length) return null;

  const currentSlide = items[active];

  return (
    <section className="relative w-full h-[100dvh] min-h-[550px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-slate-950 flex items-center">
      <div className="absolute inset-0 z-0">
        {items.map((slide: any, index: number) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 z-10 ${index === active ? 'opacity-100' : 'opacity-0'}`}
          >
            {slide.background_image && (
              slide.background_image.match(/\.(mp4|webm|ogg)$/i) ? (
                <video
                  // 👇 key URL-based — video change hote hi remount
                  key={`bg-vid-${slide.background_image}`}
                  src={slide.background_image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : slide.background_image.match(/\.avif$/i) ? (
                <img
                  key={`bg-img-${slide.background_image}`}
                  src={slide.background_image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  key={`bg-nextimg-${slide.background_image}`}
                  src={slide.background_image}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              )
            )}
          </div>
        ))}
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
          <div key={intro.title} className="hero-fade">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-cyan-300">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-300 animate-pulse" />
              {intro.eyebrow}
            </div>

            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[64px] font-bold leading-tight text-white lg:leading-[1.1]">
              {intro.title}{" "}
              <span className="text-cyan-300 block">{intro.highlight}</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl leading-relaxed text-slate-200 lg:max-w-xl mx-auto lg:mx-0">
              {intro.description}
            </p>

            <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {intro.primary_cta_label && intro.primary_cta_href && (
                <Link
                  href={intro.primary_cta_href}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#0057B8] px-4 sm:px-6 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:bg-[#004494] hover:shadow-lg hover:shadow-[#0057B8]/30"
                >
                  {intro.primary_cta_label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {intro.secondary_cta_label && intro.secondary_cta_href && (
                <Link
                  href={intro.secondary_cta_href}
                  className="flex items-center justify-center rounded-lg border-2 border-white/70 px-4 sm:px-6 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:bg-white/10"
                >
                  {intro.secondary_cta_label}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ============ RIGHT — Image Slider Card ============ */}
        <div className="hidden lg:flex w-full max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] shrink-0 justify-end">
          <div className="relative h-[450px] lg:h-[480px] xl:h-[510px] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 group">
            {currentSlide.background_image && (
              currentSlide.background_image.match(/\.(mp4|webm|ogg)$/i) ? (
                <video
                  // 👇 key URL-based — naya URL = naya video element
                  key={`card-vid-${currentSlide.background_image}`}
                  src={currentSlide.background_image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 opacity-100 z-10"
                />
              ) : currentSlide.background_image.match(/\.avif$/i) ? (
                <img
                  key={`card-img-${currentSlide.background_image}`}
                  src={currentSlide.background_image}
                  alt="Slide bg"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 opacity-100 z-10"
                />
              ) : (
                <Image
                  key={`card-nextimg-${currentSlide.background_image}`}
                  src={currentSlide.background_image}
                  alt="Slide bg"
                  fill
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 opacity-100 z-10"
                />
              )
            )}

            <div className="absolute inset-0 z-15 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
              <div className="flex items-center justify-between relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  LIVE PREVIEW
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <div key={`card-${currentSlide.id}`} className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {currentSlide.category_label}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight">
                  {currentSlide.title}{" "}
                  <span className="text-cyan-300">{currentSlide.highlight}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 line-clamp-3">
                  {currentSlide.description}
                </p>

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

                  <div className="flex gap-1.5">
                    {items.map((s: any, i: number) => (
                      <button
                        key={s.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToSlide(i);
                        }}
                        aria-label={`Go to slide ${i}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${i === active ? "w-7 bg-cyan-300" : "w-4 bg-white/40 hover:bg-white/60"}`}
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