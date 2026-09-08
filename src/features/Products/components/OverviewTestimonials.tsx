"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronUp, ChevronDown, Bot, Cloud, ShieldCheck } from "lucide-react";
import { OVERVIEW_TESTIMONIALS_DATA } from "@/data/products-data";

export default function OverviewTestimonials() {
  const data = OVERVIEW_TESTIMONIALS_DATA;
  const items = data.items;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-running avatar carousel (pauses on user hover)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, items.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  // Get previous, current, and next avatars for the curved arc
  const prevIndex = (activeIndex - 1 + items.length) % items.length;
  const nextIndex = (activeIndex + 1) % items.length;

  const prevItem = items[prevIndex];
  const currentItem = items[activeIndex];
  const nextItem = items[nextIndex];

  const getPillarIcon = (category?: string) => {
    switch (category) {
      case "Cognitive AI":
        return <Bot className="w-3.5 h-3.5" />;
      case "Cloud Infrastructure":
        return <Cloud className="w-3.5 h-3.5" />;
      case "Cybersecurity":
        return <ShieldCheck className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F4F7FA] overflow-hidden font-sans select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ================= LARGE CYAN CURVED SHAPE ON LEFT ================= */}
      <div
        className="absolute -left-44 sm:-left-36 lg:-left-24 top-1/2 -translate-y-1/2 w-80 sm:w-96 lg:w-[460px] h-[500px] sm:h-[620px] lg:h-[720px] bg-gradient-to-r from-[#0089b8] via-[#00a7e1] to-[#00bbf9] rounded-r-full z-0 opacity-90 sm:opacity-100 shadow-[0_10px_60px_rgba(0,167,225,0.3)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ================= MATCHING CYAN CURVED SHAPE ON RIGHT (Balanced Composition) ================= */}
      <div
        className="absolute -right-44 sm:-right-36 lg:-right-24 top-1/2 -translate-y-1/2 w-80 sm:w-96 lg:w-[460px] h-[500px] sm:h-[620px] lg:h-[720px] bg-gradient-to-l from-[#0089b8] via-[#00a7e1] to-[#00bbf9] rounded-l-full z-0 opacity-90 sm:opacity-100 shadow-[0_10px_60px_rgba(0,167,225,0.3)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">

        {/* ================= MAIN WHITE FLOATING CARD ================= */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(3,27,61,0.08)] border border-slate-100/80 relative">

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-14">

            {/* ================= LEFT SIDE: CUSTOMER REVIEWS & CURVED RUNNING AVATARS ================= */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">

              {/* Top Accent Pill & Section Title */}
              <div className="mb-6 sm:mb-8">
                {/* Cyan Accent Bar */}
                <div className="w-9 h-1.5 bg-[#00a7e1] rounded-full mb-3.5" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#031B3D] tracking-tight">
                  Real Teams. Real Innovation.
                </h2>
              </div>

              {/* The Vertical Curved Arc with Running Avatars */}
              <div className="relative py-4 sm:py-6 min-h-[320px] sm:min-h-[360px] flex items-center">

                <div className="flex flex-col justify-between w-full h-[320px] sm:h-[350px] relative z-10">

                  {/* --- TOP AVATAR (Previous Item) --- */}
                  <div
                    onClick={handlePrev}
                    className="flex items-center gap-3 sm:gap-4 ml-2 sm:ml-4 opacity-50 hover:opacity-85 transition-all duration-300 cursor-pointer group"
                    title={`Click to view ${prevItem.author}`}
                  >
                    <div className="relative size-11 sm:size-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-200 group-hover:border-[#00a7e1] transition-colors shadow-xs">
                      <Image
                        src={prevItem.avatar}
                        alt={prevItem.author}
                        fill
                        sizes="48px"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-slate-700 text-sm leading-snug group-hover:text-[#031B3D]">
                        {prevItem.author}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                        <span className="flex items-center text-emerald-600 font-semibold gap-0.5">
                          <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                          {prevItem.rating || 4.9}
                        </span>
                        {prevItem.date && <span>on {prevItem.date}</span>}
                      </div>
                    </div>
                  </div>

                  {/* --- MIDDLE AVATAR (Active Focused Item - Enlarged) --- */}
                  <motion.div
                    key={currentItem.author}
                    initial={{ scale: 0.92, opacity: 0, x: -10 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex items-center gap-4 sm:gap-5 ml-8 sm:ml-12 relative"
                  >
                    {/* Glowing Active Ring */}
                    <div className="relative size-16 sm:size-20 rounded-full overflow-hidden shrink-0 ring-4 ring-[#00a7e1]/25 border-2 border-[#00a7e1] shadow-[0_8px_25px_rgba(0,167,225,0.35)]">
                      <Image
                        src={currentItem.avatar}
                        alt={currentItem.author}
                        fill
                        sizes="80px"
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-semibold text-[#031B3D] text-lg sm:text-xl tracking-tight leading-tight">
                        {currentItem.author}
                      </h3>

                      {/* Rating & Date matching image */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 mt-1">
                        <span className="flex items-center text-emerald-600 font-bold gap-0.5">
                          <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                          {currentItem.rating || 4.9}
                        </span>
                        {currentItem.date && (
                          <span className="text-slate-400 font-medium">on {currentItem.date}</span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#00a7e1] font-semibold mt-1">
                        {getPillarIcon(currentItem.category)}
                        <span>{currentItem.role}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* --- BOTTOM AVATAR (Next Item) --- */}
                  <div
                    onClick={handleNext}
                    className="flex items-center gap-3 sm:gap-4 ml-2 sm:ml-4 opacity-50 hover:opacity-85 transition-all duration-300 cursor-pointer group"
                    title={`Click to view ${nextItem.author}`}
                  >
                    <div className="relative size-11 sm:size-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-200 group-hover:border-[#00a7e1] transition-colors shadow-xs">
                      <Image
                        src={nextItem.avatar}
                        alt={nextItem.author}
                        fill
                        sizes="48px"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-slate-700 text-sm leading-snug group-hover:text-[#031B3D]">
                        {nextItem.author}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                        <span className="flex items-center text-emerald-600 font-semibold gap-0.5">
                          <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                          {nextItem.rating || 4.9}
                        </span>
                        {nextItem.date && <span>on {nextItem.date}</span>}
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Running Status & Navigation Arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPaused ? "bg-amber-400" : "bg-[#00a7e1]"} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isPaused ? "bg-amber-400" : "bg-[#00a7e1]"}`} />
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {isPaused ? "Paused on hover" : "Auto-rotating reviews"}
                  </span>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Review"
                    className="size-8 rounded-full border border-slate-200 text-slate-500 hover:border-[#00a7e1] hover:text-[#00a7e1] hover:bg-sky-50 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Review"
                    className="size-8 rounded-full border border-slate-200 text-slate-500 hover:border-[#00a7e1] hover:text-[#00a7e1] hover:bg-sky-50 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* ================= RIGHT SIDE: TESTIMONIAL FEEDBACK ================= */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center lg:border-l lg:border-slate-100 lg:pl-10 xl:pl-14">

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.author}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col justify-between"
                >
                  {/* Tech Pillar Tag & Metric Banner */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00a7e1]/10 text-[#00a7e1] border border-[#00a7e1]/20">
                      {getPillarIcon(currentItem.category)}
                      {currentItem.categoryTag || currentItem.category}
                    </span>

                    {currentItem.metric && (
                      <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        <strong className="text-[#031B3D] font-bold">{currentItem.metric}</strong> {currentItem.metricLabel}
                      </span>
                    )}
                  </div>

                  {/* The Quotation Layout (Matching the Reference Image style) */}
                  <div className="relative pl-6 sm:pl-8 mt-2">
                    {/* Giant Quotation Mark */}
                    <span
                      className="absolute -top-6 left-0 text-5xl sm:text-6xl lg:text-7xl font-serif text-[#031B3D]/80 leading-none select-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    {/* Review Quote Body Text */}
                    <p className="text-slate-700 font-serif italic text-lg sm:text-xl lg:text-2xl leading-relaxed text-justify sm:text-left">
                      {currentItem.quote}
                    </p>
                  </div>

                  {/* Author Credentials Confirmation */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[#031B3D] text-base sm:text-lg">
                        {currentItem.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500">
                        {currentItem.role} &bull; <span className="text-[#00a7e1] font-semibold">{currentItem.company}</span>
                      </p>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex items-center gap-1.5">
                      {items.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Go to review ${idx + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                            ? "w-6 bg-[#00a7e1]"
                            : "w-2 bg-slate-200 hover:bg-slate-300"
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
