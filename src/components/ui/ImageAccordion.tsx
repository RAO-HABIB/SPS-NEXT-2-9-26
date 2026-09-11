'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface AccordionItem {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
}

interface ImageAccordionProps {
  items: AccordionItem[];
  imageRotation?: number;
}

export default function ImageAccordion({ items, imageRotation = -6 }: ImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) {
    return null;
  }

  const currentItem = items[activeIndex] || items[0];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-6">
      {/* Left Column: Floating Showcase Image Stage (Framer style) */}
      <div className="w-full lg:w-[48%] flex items-center justify-center relative min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] py-4">
        {/* Ambient Decorative Glow behind image */}
        <div className="absolute w-72 h-72 rounded-full bg-[#1BA6C7]/20 blur-3xl pointer-events-none -z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: imageRotation 
            }}
            exit={{ opacity: 0, scale: 0.92, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="relative max-w-[440px] w-full bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] cursor-pointer select-none transition-shadow duration-300 hover:shadow-[0_30px_70px_rgba(27,166,199,0.3)]"
          >
            {/* Top Bar with Badge */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[11px] font-black tracking-widest uppercase text-[#1BA6C7] bg-[#1BA6C7]/15 px-3 py-1 rounded-full border border-[#1BA6C7]/30">
                {currentItem.subtitle || 'Award'}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {activeIndex + 1} / {items.length}
              </span>
            </div>

            {/* Certificate / Award Image Display */}
            <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden bg-white/90 shadow-inner flex items-center justify-center p-2">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Bottom Caption */}
            <div className="mt-3 px-1 text-center">
              <p className="text-xs font-semibold text-slate-300 truncate">
                {currentItem.title}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Column: Accordion List */}
      <div className="w-full lg:w-[52%] flex flex-col justify-center">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div 
              key={item.title}
              className="border-b border-white/15 last:border-b-0 transition-colors"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                aria-expanded={isActive}
                className="w-full py-6 px-2 text-left flex items-center justify-between group cursor-pointer transition-all duration-200"
              >
                <div className="pr-4">
                  {item.subtitle && (
                    <span 
                      className={`inline-block text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 mb-1 ${
                        isActive ? 'text-[#1BA6C7]' : 'text-slate-400 group-hover:text-[#1BA6C7]'
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  )}
                  <h3 
                    className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Framer Animated SVG Plus/Minus Toggle Icon */}
                <div 
                  className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#1BA6C7] text-white shadow-[0_0_20px_rgba(27,166,199,0.5)] scale-105' 
                      : 'bg-white/10 text-slate-300 group-hover:bg-white/20 group-hover:text-white'
                  }`}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300"
                  >
                    {/* Horizontal line (always present) */}
                    <line 
                      x1="8" 
                      y1="16" 
                      x2="24" 
                      y2="16" 
                      stroke="currentColor" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                    />
                    {/* Vertical line (collapses when active, turning + into -) */}
                    <motion.line 
                      x1="16" 
                      y1="8" 
                      x2="16" 
                      y2="24" 
                      stroke="currentColor" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                      animate={{ 
                        scaleY: isActive ? 0 : 1,
                        opacity: isActive ? 0 : 1,
                        rotate: isActive ? 90 : 0
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ originX: "16px", originY: "16px" }}
                    />
                  </svg>
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 px-2 pr-6">
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {item.description || "Recognized for outstanding technical innovation, cloud expertise, and successful collaboration."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
