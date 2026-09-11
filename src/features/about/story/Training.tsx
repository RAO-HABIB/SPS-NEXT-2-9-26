'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutData } from "@/data/about-data";

const springTransition = { type: "spring" as const, bounce: 0.2, duration: 0.4 };

export default function Training() {
  const { training } = aboutData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth;
        const targetWidth = 1288;
        // Scale down smoothly on smaller viewports down to 0.32, capped at 1
        const calculatedScale = Math.min(1, Math.max(0.32, (availableWidth - 24) / targetWidth));
        setScale(calculatedScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden py-16 sm:py-24 font-sans antialiased select-none"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Subtle Ambient Radial Glow */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #1BA6C7 0%, rgba(27,166,199,0) 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[#1BA6C7] font-bold block mb-3">
              Learning Culture & Workshops
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
              {training.title}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {training.description}
            </p>
          </div>
        </div>

        {/* Clothesline Hanging Gallery Wrapper */}
        <div 
          ref={containerRef}
          className="w-full flex justify-center items-start overflow-visible my-4"
          style={{ height: 501 * scale + 20 }}
        >
          <div
            style={{
              width: 1288,
              height: 501,
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* Curved Hanging Rope */}
            <div 
              style={{
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flex: "none",
                flexDirection: "column",
                height: "min-content",
                justifyContent: "center",
                left: "50%",
                transform: "translateX(-50%)",
                overflow: "visible",
                padding: 0,
                position: "absolute",
                top: 0,
                width: 1200,
                pointerEvents: "none",
              }}
            >
              <svg 
                viewBox="0 0 1326 303.5" 
                overflow="visible" 
                style={{ height: 304, width: 1326 }}
              >
                <path 
                  d="M 1326 0 C 1326 167.618 1029.165 303.5 663 303.5 C 296.835 303.5 0 167.618 0 0" 
                  fill="transparent" 
                  strokeWidth="2" 
                  stroke="rgba(255, 255, 255, 0.45)"
                />
              </svg>
            </div>

            {/* Card 1 */}
            <div 
              style={{
                position: "absolute",
                left: 9,
                top: 94, // 51.6966% of 501 - 165
                width: 266,
                height: 330,
                transform: "rotate(-3deg)",
                overflow: "visible",
                zIndex: 10,
              }}
            >
              <motion.div
                initial={{ rotate: 29 }}
                whileHover={{ rotate: 59, scale: 1.3, y: 59, transition: springTransition }}
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: 4,
                  padding: 14,
                  width: 177,
                  height: 181,
                  position: "absolute",
                  bottom: 32,
                  left: "calc(45.4887% - 88.5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                  cursor: "pointer",
                  transformOrigin: "center center",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 2 }}>
                  <Image 
                    src="/images/clothesline/card1.png" 
                    alt="Knowledge Sharing" 
                    fill 
                    sizes="180px"
                    className="object-cover" 
                  />
                </div>
              </motion.div>
              <div 
                style={{
                  position: "absolute",
                  width: 133,
                  height: 133,
                  left: 109,
                  top: 25,
                  transform: "rotate(29deg)",
                  pointerEvents: "none",
                  zIndex: 20,
                }}
              >
                <Image 
                  src="/images/clothesline/clip.png" 
                  alt="Gold Clip" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

            {/* Card 2 */}
            <div 
              style={{
                position: "absolute",
                left: 263,
                bottom: 14,
                width: 209,
                height: 311,
                overflow: "visible",
                zIndex: 10,
              }}
            >
              <motion.div
                initial={{ rotate: 11 }}
                whileHover={{ rotate: -9, scale: 1.3, x: -12, y: 28, transition: springTransition }}
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: 4,
                  padding: 14,
                  width: 177,
                  height: 181,
                  position: "absolute",
                  bottom: 16,
                  left: "calc(49.76% - 88.5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                  cursor: "pointer",
                  transformOrigin: "center center",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 2 }}>
                  <Image 
                    src="/images/clothesline/card2.png" 
                    alt="Workshops & Labs" 
                    fill 
                    sizes="180px"
                    className="object-cover" 
                  />
                </div>
              </motion.div>
              <div 
                style={{
                  position: "absolute",
                  width: 133,
                  height: 133,
                  left: 62,
                  top: 12,
                  transform: "rotate(11deg)",
                  pointerEvents: "none",
                  zIndex: 20,
                }}
              >
                <Image 
                  src="/images/clothesline/clip.png" 
                  alt="Gold Clip" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

            {/* Card 3 (Center) */}
            <div 
              style={{
                position: "absolute",
                left: "calc(49.3788% - 91px)",
                bottom: 0,
                width: 182,
                height: 289,
                overflow: "visible",
                zIndex: 10,
              }}
            >
              <motion.div
                initial={{ rotate: -1 }}
                whileHover={{ rotate: 18, scale: 1.3, x: -12, y: 28, transition: springTransition }}
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: 4,
                  padding: 14,
                  width: 177,
                  height: 181,
                  position: "absolute",
                  bottom: 2,
                  left: "calc(50% - 88.5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                  cursor: "pointer",
                  transformOrigin: "center center",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 2 }}>
                  <Image 
                    src="/images/clothesline/card3.png" 
                    alt="Innovation Culture" 
                    fill 
                    sizes="180px"
                    className="object-cover" 
                  />
                </div>
              </motion.div>
              <div 
                style={{
                  position: "absolute",
                  width: 133,
                  height: 133,
                  left: "calc(46.1538% - 66.5px)",
                  top: 2,
                  transform: "rotate(-1deg)",
                  pointerEvents: "none",
                  zIndex: 20,
                }}
              >
                <Image 
                  src="/images/clothesline/clip.png" 
                  alt="Gold Clip" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

            {/* Card 4 */}
            <div 
              style={{
                position: "absolute",
                right: 281,
                bottom: 6,
                width: 216,
                height: 311,
                overflow: "visible",
                zIndex: 10,
              }}
            >
              <motion.div
                initial={{ rotate: -12 }}
                whileHover={{ rotate: -26, scale: 1.3, x: -12, y: 28, transition: springTransition }}
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: 4,
                  padding: 14,
                  width: 177,
                  height: 181,
                  position: "absolute",
                  bottom: 16,
                  left: "calc(51.3888% - 88.5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                  cursor: "pointer",
                  transformOrigin: "center center",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 2 }}>
                  <Image 
                    src="/images/clothesline/card4.png" 
                    alt="Sprint & Execution" 
                    fill 
                    sizes="180px"
                    className="object-cover" 
                  />
                </div>
              </motion.div>
              <div 
                style={{
                  position: "absolute",
                  width: 133,
                  height: 133,
                  right: 70,
                  top: 13,
                  transform: "rotate(-12deg)",
                  pointerEvents: "none",
                  zIndex: 20,
                }}
              >
                <Image 
                  src="/images/clothesline/clip.png" 
                  alt="Gold Clip" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

            {/* Card 5 */}
            <div 
              style={{
                position: "absolute",
                right: 30,
                top: 110, // 53.0938% of 501 - 155.5
                width: 216,
                height: 311,
                transform: "rotate(-12deg)",
                overflow: "visible",
                zIndex: 10,
              }}
            >
              <motion.div
                initial={{ rotate: -12 }}
                whileHover={{ rotate: -41, scale: 1.3, x: -12, y: 51, transition: springTransition }}
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: 4,
                  padding: 14,
                  width: 177,
                  height: 181,
                  position: "absolute",
                  bottom: 17,
                  left: "calc(50.9259% - 88.5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                  cursor: "pointer",
                  transformOrigin: "center center",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 2 }}>
                  <Image 
                    src="/images/clothesline/card5.jpg" 
                    alt="Mentorship & Learning" 
                    fill 
                    sizes="180px"
                    className="object-cover" 
                  />
                </div>
              </motion.div>
              <div 
                style={{
                  position: "absolute",
                  width: 133,
                  height: 133,
                  right: 70,
                  top: 13,
                  transform: "rotate(-12deg)",
                  pointerEvents: "none",
                  zIndex: 20,
                }}
              >
                <Image 
                  src="/images/clothesline/clip.png" 
                  alt="Gold Clip" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-xs sm:text-sm font-medium tracking-wide text-slate-400">
            <span className="text-white font-semibold">Continuous Learning.</span><br />
            Empowering Innovation.
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {training.points.map((point) => (
              <span
                key={point}
                className="text-xs sm:text-sm text-slate-300 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-[#1BA6C7]/50 hover:bg-[#1BA6C7]/10 hover:text-white transition-all cursor-default"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}