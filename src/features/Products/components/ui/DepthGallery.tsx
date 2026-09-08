"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export interface DepthGalleryCardItem {
  id: string | number;
  title: string;
  description: string;
  image: string;
  category: string[];
  bgColor: string;
  href: string;
}

interface DepthGalleryProps {
  items: DepthGalleryCardItem[];
  activeScale?: number;
  sideScale?: number;
  sideDepth?: number;
  sideOpacity?: number;
  blurAmount?: number;
  sideRotate?: number;
  perspective?: number;
  borderRadius?: number;
  shadow?: boolean;
  lighting?: boolean;
  parallax?: boolean;
  parallaxIntensity?: number;
  shine?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  transitionDuration?: number;
}

export default function DepthGallery({
  items,
  activeScale = 1,
  sideScale = 0.8,
  sideDepth = 140,
  sideOpacity = 0.65,
  blurAmount = 2,
  sideRotate = 22,
  perspective = 1000,
  borderRadius = 20,
  shadow = true,
  lighting = true,
  parallax = true,
  parallaxIntensity = 10,
  shine = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 4,
  loop = true,
  transitionDuration = 500,
}: DepthGalleryProps) {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shining, setShining] = useState(false);
  const [parallaxReady, setParallaxReady] = useState(true);

  // Responsive dimensions
  const [dimensions, setDimensions] = useState({
    cardWidth: 380,
    cardHeight: 490,
    gap: 340,
  });

  const hovering = useRef(false);
  const swiped = useRef(false);
  const touchX = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const navTimer = useRef<NodeJS.Timeout | null>(null);
  const shineTimer = useRef<NodeJS.Timeout | null>(null);
  const prevActiveRef = useRef(active);
  const transitionRef = useRef(transitionDuration);

  useEffect(() => {
    transitionRef.current = transitionDuration;
  }, [transitionDuration]);

  // Adjust card size and gap based on window width
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setDimensions({
          cardWidth: Math.min(w - 40, 310),
          cardHeight: 450,
          gap: 200,
        });
      } else if (w < 768) {
        setDimensions({
          cardWidth: 340,
          cardHeight: 470,
          gap: 260,
        });
      } else if (w < 1024) {
        setDimensions({
          cardWidth: 360,
          cardHeight: 480,
          gap: 300,
        });
      } else {
        setDimensions({
          cardWidth: 380,
          cardHeight: 490,
          gap: 350,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keep active in bounds when items change
  useEffect(() => {
    if (active >= count) {
      setActive(Math.max(0, count - 1));
    }
  }, [count, active]);

  // Reset active when items array changes completely
  useEffect(() => {
    setActive(0);
  }, [items]);

  // Inject shine keyframe once
  useEffect(() => {
    const id = "dg-shine-keyframes";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = `
      @keyframes dg-shine-anim {
        0% { transform: translateX(-130%) skewX(-15deg); }
        100% { transform: translateX(230%) skewX(-15deg); }
      }
    `;
    document.head.appendChild(el);
  }, []);

  const scheduleParallax = useCallback(() => {
    if (navTimer.current) clearTimeout(navTimer.current);
    navTimer.current = setTimeout(
      () => setParallaxReady(true),
      transitionRef.current + 80
    );
  }, []);

  const prev = useCallback(() => {
    if (count < 2) return;
    setActive((i) => (!loop && i === 0 ? i : (i - 1 + count) % count));
    setTilt({ x: 0, y: 0 });
    setParallaxReady(false);
    scheduleParallax();
  }, [count, loop, scheduleParallax]);

  const next = useCallback(() => {
    if (count < 2) return;
    setActive((i) => (!loop && i === count - 1 ? i : (i + 1) % count));
    setTilt({ x: 0, y: 0 });
    setParallaxReady(false);
    scheduleParallax();
  }, [count, loop, scheduleParallax]);

  const goTo = (i: number) => {
    setActive(i);
    setTilt({ x: 0, y: 0 });
    setParallaxReady(false);
    scheduleParallax();
  };

  // Drag listeners
  useEffect(() => {
    const onUp = (e: MouseEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const dx = e.clientX - dragStartX.current;
      if (Math.abs(dx) > 40) {
        swiped.current = true;
        if (dx < 0) next();
        else prev();
      }
    };
    window.addEventListener("mouseup", onUp);
    return () => window.removeEventListener("mouseup", onUp);
  }, [next, prev]);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || count < 2) return;
    const id = setInterval(() => {
      if (!hovering.current) next();
    }, autoPlayInterval * 1000);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, count, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  // Shine trigger on card switch
  useEffect(() => {
    if (active === prevActiveRef.current || !shine) {
      prevActiveRef.current = active;
      return;
    }
    prevActiveRef.current = active;
    setShining(false);
    if (shineTimer.current) clearTimeout(shineTimer.current);
    const t = setTimeout(() => {
      setShining(true);
      shineTimer.current = setTimeout(() => setShining(false), 700);
    }, 40);
    return () => clearTimeout(t);
  }, [active, shine]);

  const getOffset = (i: number) => {
    if (count === 0) return 0;
    const d = (((i - active) % count) + count) % count;
    return d > count / 2 ? d - count : d;
  };

  const cardStyle = (i: number) => {
    const off = getOffset(i);
    const abs = Math.abs(off);
    const sign = Math.sign(off);
    const tx =
      off === 0 ? 0 : sign * dimensions.gap * (abs === 1 ? 1 : 1 + (abs - 1) * 0.8);
    const tz = -abs * sideDepth;
    const scale = abs === 0 ? activeScale : sideScale * Math.pow(0.88, abs - 1);
    const opacity = abs === 0 ? 1 : sideOpacity * Math.pow(0.55, abs - 1);
    const blur = blurAmount * abs;

    const rotX = abs === 0 ? tilt.y : 0;
    const rotY = abs === 0 ? tilt.x : off * sideRotate;
    const isHoverMode = abs === 0 && parallaxReady && parallax;
    const dur = isHoverMode ? 80 : transitionDuration;
    const ease = isHoverMode ? "ease-out" : "cubic-bezier(0.16, 1, 0.3, 1)";

    return {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius,
      overflow: "hidden",
      cursor: abs === 0 ? "default" : "pointer",
      zIndex: 10 - abs * 2,
      transform: `perspective(${perspective}px) translateX(${tx}px) translateZ(${tz}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`,
      opacity,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
      boxShadow:
        abs === 0 && shadow
          ? "0 30px 80px -15px rgba(3, 27, 61, 0.25), 0 10px 30px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(3, 27, 61, 0.08)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
      transition: `transform ${dur}ms ${ease}, opacity ${transitionDuration}ms ease, filter ${transitionDuration}ms ease, box-shadow ${transitionDuration}ms ease`,
      willChange: "transform, opacity",
    };
  };

  const onActiveMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!parallax || !parallaxReady) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const ny = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    setTilt({ x: nx * parallaxIntensity, y: -ny * parallaxIntensity });
  };

  const onActiveLeave = () => {
    if (parallax) setTilt({ x: 0, y: 0 });
  };

  if (count === 0) {
    return (
      <div className="w-full py-20 text-center text-slate-400 text-sm">
        No solutions available for this category.
      </div>
    );
  }

  const visible = items
    .map((item, i) => ({ item, i, off: getOffset(i) }))
    .filter(({ off }) => Math.abs(off) <= 2);

  return (
    <div
      className="w-full flex flex-col items-center justify-center select-none overflow-visible py-4 sm:py-6"
      onMouseEnter={() => {
        hovering.current = true;
      }}
      onMouseLeave={() => {
        hovering.current = false;
      }}
    >
      {/* 3D Viewport Stage */}
      <div
        className="w-full flex items-center justify-center relative cursor-grab active:cursor-grabbing overflow-visible min-h-[510px] sm:min-h-[530px]"
        onMouseDown={(e) => {
          isDragging.current = true;
          dragStartX.current = e.clientX;
          swiped.current = false;
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
          swiped.current = false;
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) {
            swiped.current = true;
            if (dx < 0) next();
            else prev();
          }
        }}
      >
        <div
          className="relative"
          style={{
            width: dimensions.cardWidth,
            height: dimensions.cardHeight,
          }}
        >
          {visible.map(({ item, i, off }) => {
            const abs = Math.abs(off);
            const shade = Math.min(0.5, abs * 0.25);
            const shadeBg =
              off > 0
                ? `linear-gradient(to right, transparent 20%, rgba(3, 27, 61, ${shade}) 100%)`
                : `linear-gradient(to left, transparent 20%, rgba(3, 27, 61, ${shade}) 100%)`;

            return (
              <div
                key={item.id}
                style={cardStyle(i)}
                onMouseMove={abs === 0 ? onActiveMove : undefined}
                onMouseLeave={abs === 0 ? onActiveLeave : undefined}
                onClick={() => {
                  if (swiped.current) return;
                  if (abs !== 0) goTo(i);
                }}
                className="bg-white border border-slate-200/90 rounded-2xl flex flex-col relative"
              >
                {/* Background Accent Block (Bottom Section) */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[135px] sm:h-[140px] ${item.bgColor} opacity-90`}
                />

                {/* Card Content Container */}
                <div className="relative z-10 flex flex-col h-full w-full justify-between">
                  {/* Top Text Header */}
                  <div className="pt-8 sm:pt-9 px-6 flex flex-col items-center text-center">
                    <div className="h-[58px] sm:h-[64px] flex items-start justify-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="h-[68px] sm:h-[76px] flex items-start justify-center mt-1">
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[260px]">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (abs !== 0) e.preventDefault();
                      }}
                      className="text-[#031B3D] border border-slate-200 hover:border-[#00a7e1] hover:text-[#00a7e1] font-semibold text-xs sm:text-sm py-2 px-5 rounded-full bg-white transition-all mt-3 shadow-2xs hover:scale-105"
                    >
                      Learn more
                    </Link>
                  </div>

                  {/* Bottom Illustration Section */}
                  <div className="relative w-full h-[185px] sm:h-[195px] flex items-center justify-center pointer-events-none px-6 pb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="380px"
                        className="object-contain object-center drop-shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Shading Layer on Side Cards */}
                {lighting && abs > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: shadeBg,
                      pointerEvents: "none",
                      zIndex: 20,
                    }}
                  />
                )}

                {/* Shine Sweep Animation on Active Card Change */}
                {abs === 0 && shine && shining && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      overflow: "hidden",
                      pointerEvents: "none",
                      zIndex: 25,
                      borderRadius,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "50%",
                        height: "100%",
                        background:
                          "linear-gradient(105deg, transparent, rgba(255,255,255,0.3) 50%, transparent)",
                        animation: "dg-shine-anim 0.65s ease-out forwards",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots (No Arrows!) */}
      {showDots && count > 1 && (
        <div className="flex items-center gap-2 pt-6 sm:pt-8">
          {items.map((_, i) => {
            const isSelected = i === active;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "w-7 bg-[#031B3D]"
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
