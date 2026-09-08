"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface IbmHoverCardProps {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  accentColor?: string;
  subItems?: { name: string; href?: string }[];
  className?: string;
  aspectRatio?: string;
}

export default function IbmHoverCard({
  id,
  name,
  role,
  description,
  image,
  href,
  badge,
  accentColor = "#00a7e1",
  subItems = [],
  className = "",
  aspectRatio = "aspect-[3/4] min-h-[460px] sm:min-h-[497px]",
}: IbmHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Transition matching Framer's cubic bezier: [.33, 1, .68, 1]
  const framerTransition: Transition = {
    duration: 0.5,
    ease: [0.33, 1, 0.68, 1],
  };

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-[16px] sm:rounded-[20px] cursor-pointer select-none border border-white/15 bg-slate-950 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${aspectRatio} ${className}`}
      aria-label={`${name} - ${role}`}
    >
      {/* 1. Background Image with Framer Zoom Transition */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        animate={{
          scale: isHovered ? 1.08 : 1,
        }}
        transition={framerTransition}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* 2. Framer Dynamic Masking Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        animate={{
          background: isHovered
            ? "linear-gradient(180deg, rgba(3, 18, 47, 0) 25%, rgba(3, 18, 47, 0.85) 60%, rgba(3, 18, 47, 0.98) 100%)"
            : "linear-gradient(180deg, rgba(3, 18, 47, 0) 40%, rgba(3, 18, 47, 0.45) 75%, rgba(3, 18, 47, 0.88) 100%)",
        }}
        transition={framerTransition}
      />

      {/* Top Floating Badge (Optional Indicator) */}
      {badge && (
        <div className="absolute top-3.5 left-3.5 z-20">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md bg-slate-900/60 text-cyan-300 border border-cyan-400/30 shadow-lg">
            {badge}
          </span>
        </div>
      )}

      {/* 3. Framer Glassmorphism Bottom Information Overlay */}
      <div className="relative z-20 p-3 sm:p-3.5 w-full">
        <motion.div
          className="w-full rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/20 bg-slate-900/40 backdrop-blur-md shadow-2xl transition-all duration-300"
          animate={{
            backgroundColor: isHovered
              ? "rgba(15, 23, 42, 0.72)"
              : "rgba(15, 23, 42, 0.45)",
            borderColor: isHovered
              ? "rgba(255, 255, 255, 0.35)"
              : "rgba(255, 255, 255, 0.2)",
          }}
          transition={framerTransition}
          style={{
            WebkitBackdropFilter: "blur(12px)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Card Header: Role Tag + Title (Left) and Rotating Arrow (Right) */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              {/* Role Tag */}
              <div className="inline-flex items-center rounded-full border border-white/40 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-white/90 mb-1.5 backdrop-blur-xs">
                {role}
              </div>

              {/* Pillar Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                {name}
              </h3>
            </div>

            {/* Framer-exact 180° Rotating Icon */}
            <motion.div
              className="size-9 sm:size-10 rounded-full flex items-center justify-center shrink-0 border border-white/25 bg-white/10 text-white shadow-md transition-colors"
              animate={{
                rotate: isHovered ? 180 : 0,
                backgroundColor: isHovered ? "#00a7e1" : "rgba(255, 255, 255, 0.1)",
                borderColor: isHovered ? "#38bdf8" : "rgba(255, 255, 255, 0.25)",
                color: isHovered ? "#ffffff" : "#ffffff",
              }}
              transition={framerTransition}
            >
              <ArrowUpRight className="size-4 sm:size-5" />
            </motion.div>
          </div>

          {/* 4. Framer Revealable Content on Hover: Description & Links */}
          <AnimatePresence initial={false}>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: 12,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                }}
                transition={framerTransition}
                className="overflow-hidden"
              >
                {/* Description */}
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light mb-3.5">
                  {description}
                </p>

                {/* Sub-product Quick Links / Tags */}
                {subItems.length > 0 && (
                  <div className="pt-2.5 border-t border-white/15 flex flex-wrap items-center gap-1.5">
                    {subItems.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/10 text-slate-100 hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors border border-white/10"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom CTA Row */}
                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-cyan-300">
                  <span>Explore Solution</span>
                  <span className="text-xs group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Link>
  );
}
