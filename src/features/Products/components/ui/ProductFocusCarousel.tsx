"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface FocusProductItem {
  id: string | number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string[];
  buttonLabel?: string;
  href: string;
  bgColor?: string;
}

interface ProductFocusCarouselProps {
  products: FocusProductItem[];
  cardRadius?: number;
  gap?: number;
  activeScale?: number;
  inactiveScale?: number;
  showButton?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export default function ProductFocusCarousel({
  products,
  cardRadius = 24,
  gap = 40,
  activeScale = 1,
  inactiveScale = 0.8,
  showButton = true,
  autoplay = false,
  autoplaySpeed = 4000,
}: ProductFocusCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset index when products array changes completely (e.g. on tab switch)
  useEffect(() => {
    setActiveIndex(0);
  }, [products]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isHovered || products.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, isHovered, products.length]);

  const navigateTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const navigateNext = useCallback(() => {
    if (products.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const navigatePrev = useCallback(() => {
    if (products.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number } }) => {
      const threshold = 40;
      if (info.offset.x > threshold) {
        navigatePrev();
      } else if (info.offset.x < -threshold) {
        navigateNext();
      }
    },
    [navigateNext, navigatePrev]
  );

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const count = products.length;
    if (count === 0) return 0;
    const normalizedDiff =
      diff > count / 2
        ? diff - count
        : diff < -count / 2
        ? diff + count
        : diff;
    return normalizedDiff;
  };

  const getCardStyle = (position: number) => {
    const baseWidth = isMobile ? 300 : 390;
    const baseHeight = isMobile ? 430 : 530;

    if (position === 0) {
      return {
        x: 0,
        scale: activeScale,
        zIndex: 10,
        opacity: 1,
        width: baseWidth,
        height: baseHeight,
        filter: "none",
      };
    }

    const absPosition = Math.abs(position);
    const cardDirection = position > 0 ? 1 : -1;
    const translateX =
      cardDirection * (baseWidth * 0.82 + gap * (1 - absPosition * 0.2));
    const scale = inactiveScale * (1 - (absPosition - 1) * 0.12);
    const blur = absPosition > 1 ? 2 : 0;
    const opacity = Math.max(0.45, 1 - absPosition * 0.25);

    return {
      x: translateX,
      scale,
      zIndex: 10 - absPosition,
      opacity,
      width: baseWidth,
      height: baseHeight,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
    };
  };

  if (products.length === 0) {
    return (
      <div className="w-full py-20 text-center text-slate-400 text-sm">
        No solutions available for this category.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center select-none overflow-hidden py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Focus Stage */}
      <div className="relative w-full h-[470px] sm:h-[550px] md:h-[570px] flex items-center justify-center overflow-visible">
        <motion.div
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={handleDragEnd}
        >
          {products.map((product, index) => {
            const position = getCardPosition(index);
            const isVisible = Math.abs(position) <= 2;
            if (!isVisible) return null;

            const style = getCardStyle(position);
            const isActive = position === 0;

            return (
              <motion.div
                key={product.id}
                style={{
                  position: "absolute",
                  width: style.width,
                  height: style.height,
                  borderRadius: cardRadius,
                  zIndex: style.zIndex,
                  filter: style.filter,
                }}
                className={`overflow-hidden cursor-pointer transition-shadow duration-300 ${
                  isActive
                    ? "shadow-2xl shadow-[#031B3D]/35 ring-1 ring-black/10"
                    : "shadow-lg shadow-black/15"
                }`}
                initial={false}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                onClick={() => {
                  if (!isActive) navigateTo(index);
                }}
              >
                {/* Card Outer Shell */}
                <div className="w-full h-full relative bg-[#041530] flex flex-col justify-between overflow-hidden">
                  {/* Background Radial Glow */}
                  <div className="absolute inset-0 bg-radial-[at_center_top] from-[#0a2e63]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Illustration Image Presentation Container */}
                  <div className="relative w-full flex-1 flex items-center justify-center p-6 pt-10 overflow-hidden">
                    <div className="relative w-full h-full max-h-[260px] sm:max-h-[300px]">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 300px, 400px"
                        priority={isActive}
                        className="object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-[#020b18] via-[#020b18]/90 to-transparent pointer-events-none" />

                  {/* Bottom Content Area */}
                  <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-2">
                    {/* Subtitle Badge */}
                    <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#00a7e1] uppercase">
                      {product.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white tracking-tight leading-tight">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 line-clamp-2 leading-relaxed mt-0.5">
                      {product.description}
                    </p>

                    {/* Button on Active Card Only */}
                    {showButton && isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                        className="mt-3"
                      >
                        <Link
                          href={product.href}
                          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#031B3D] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:scale-105 active:scale-95"
                        >
                          {product.buttonLabel || "Explore Solution"}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Pagination Dots (NO ARROWS) */}
      {products.length > 1 && (
        <div className="flex items-center gap-2 pt-6 sm:pt-8">
          {products.map((_, i) => {
            const isSelected = i === activeIndex;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => navigateTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "w-8 bg-[#031B3D]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
