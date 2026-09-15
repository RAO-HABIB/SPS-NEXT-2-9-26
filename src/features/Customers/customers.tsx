"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CUSTOMERS = [
  { name: "UNLV", src: "/images/customers/unlv.webp" },
  { name: "IBM", src: "/images/customers/ibm1.webp" },
  { name: "Altria", src: "/images/customers/altria.webp" },
  { name: "County of Spotsylvania", src: "/images/customers/county-of-spotsylvania.webp" },
  { name: "Maryland Judiciary", src: "/images/customers/maryland-judiciary.webp" },
  { name: "Telenor", src: "/images/customers/telenor.webp" },
  { name: "TransUnion", src: "/images/customers/transunion.webp" },
  { name: "Avnet", src: "/images/customers/avnet.webp" },
  { name: "Askari Bank", src: "/images/customers/Askari-Bank4.webp" },
  { name: "Highmark Health", src: "/images/customers/highmark-health.webp" },
  { name: "Virginia", src: "/images/customers/virginia.webp" },
  { name: "Keysight", src: "/images/customers/Keysight.webp" },
];

export default function Customers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const cachedSetWidth = useRef(0);

  // Only animate when the section is actually visible in the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Measure scrollWidth once on resize, not on every rAF frame
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        cachedSetWidth.current = containerRef.current.scrollWidth / 2;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!isVisible || isHovered) return;

    let animationId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (containerRef.current && !isDragging.current) {
        let currentScroll = containerRef.current.scrollLeft;
        currentScroll += delta * 0.05;

        const setWidth = cachedSetWidth.current;
        if (setWidth > 0) {
          if (currentScroll >= setWidth * 1.5) {
            currentScroll -= setWidth;
          } else if (currentScroll <= 0) {
            currentScroll += setWidth;
          }
        }
        
        containerRef.current.scrollLeft = currentScroll;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (!containerRef.current) return;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
    containerRef.current.style.userSelect = "none";
  };
  
  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsHovered(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.userSelect = "auto";
    }
  };
  
  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.userSelect = "auto";
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    containerRef.current.scrollLeft = scrollLeft.current - walk;
    
    // Check bounds during manual drag
    const setWidth = cachedSetWidth.current;
    if (setWidth > 0) {
      if (containerRef.current.scrollLeft >= setWidth * 2) {
        containerRef.current.scrollLeft -= setWidth;
      } else if (containerRef.current.scrollLeft <= setWidth) {
        containerRef.current.scrollLeft += setWidth;
      }
    }
  };

  return (
    <section className="below-fold w-full">
      <div className="bg-[#031B3D] px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold leading-relaxed sm:leading-loose text-white">
            We have an award-winning team that includes IBM-certified inventors and champions who have won multiple worldwide competitions.
          </h2>
          <p className="mx-auto max-w-4xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose text-slate-300">
            As an enterprise-class innovator and solution creator with expertise across all phases of product design, development, deployment, security, operations, monitoring, and support, we have been helping our clients build, deploy and secure applications. Our development, quality, cybersecurity, training, operations, monitoring, and support teams work in tandem to create high-performance, secure, reliable, scalable, and manageable systems.
          </p>
        </div>
      </div>

      <div className="bg-[#F4F7FA] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#031B3D]">
            Customers We Are Proud To Work With.
          </h2>
        </div>

        <div className="relative max-w-[100vw] overflow-hidden">
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          
          <div 
            ref={containerRef}
            className="flex w-full overflow-x-auto py-6 sm:py-8 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 no-scrollbar cursor-grab"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollBehavior: 'auto' }}
          >
            {[...CUSTOMERS, ...CUSTOMERS].map((customer, idx) => (
              <div
                key={idx}
                className="flex h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 sm:p-5 lg:p-6 transition-transform duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={customer.src}
                    alt={customer.name}
                    fill
                    className="object-contain pointer-events-none"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
