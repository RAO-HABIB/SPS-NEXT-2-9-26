"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  ProfessionalEmployeeIllustration, ProfessionalEmployeeEssentials12, BusinessStrategyIllustration
} from "@/components/ui/illustrations";

interface ServiceCardItem {
  id: string;
  title: string;
  badge: string;
  illustration: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
  impactMetric: { value: string; label: string };
  href: string;
  bgImage: string;
}

const CARDS: ServiceCardItem[] = [
  {
    id: "arch-review",
    title: "Architecture Review",
    badge: "Data Security",
    illustration: ProfessionalEmployeeIllustration,
    impactMetric: { value: "100%", label: "Optimization" },
    bgImage: "/images/services/network-ops.jpg",
    href: "/services/cybersecurity/network-security/network-visibility-ops",
    description: "SPS provides architecture review and technology update on existing Guardium Data Protection, Guardium Data Encryption and Guardium Data Activity Monitoring implementation.",
    highlights: ["Guardium Data Protection", "Technology Update", "IBM Cloud Pak"],
  },
  {
    id: "design-deploy",
    title: "Design & Deployment",
    badge: "Data Security",
    illustration: BusinessStrategyIllustration,
    impactMetric: { value: "100%", label: "Implementation" },
    bgImage: "/images/services/network-design.jpg",
    href: "/services/cybersecurity/network-security/network-visibility-ops",
    description: "SPS can help customers implement Guardium Data Protection, Data Encryption and Data Activity Monitoring solution and achieve business outcomes using our proven skills and implementation methodology.",
    highlights: ["Proven Methodology", "Data Encryption", "Activity Monitoring"],
  },
  {
    id: "remote-monitoring",
    title: "Remote Monitoring, Management & Support",
    badge: "Data Security",
    illustration: ProfessionalEmployeeEssentials12,
    impactMetric: { value: "24/7", label: "Monitoring" },
    bgImage: "/images/services/keysight-training.jpg",
    href: "/services/cybersecurity/network-security/network-visibility-ops",
    description: "SPS team can provide remote monitoring, management and production support for your Data Security systems and environment.",
    highlights: ["Remote Monitoring", "Production Support", "System Growth"],
  }
];



function HoverCard({ card }: { card: ServiceCardItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const IllustrationComp = card.illustration;

  return (
    <Link
      href={card.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] sm:rounded-[24px] cursor-pointer select-none border border-slate-200/80 hover:border-cyan-400/50 bg-[#03132e] shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/15 min-h-[470px] sm:min-h-[510px] w-full block"
    >
      <motion.div
        className="absolute inset-0 z-0 h-full w-full opacity-20"
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      >
        <Image
          src={card.bgImage}
          alt={card.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#061838]/85 via-[#031026]/90 to-[#020a1a] pointer-events-none" />

      <div className="relative top-4 right-4 z-20 flex items-center justify-end pointer-events-none px-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md bg-slate-900/80 text-white border border-white/20 shadow-lg">
          {card.impactMetric.value} {card.impactMetric.label}
        </span>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center pt-2 pb-4 px-6 overflow-hidden pointer-events-none min-h-[175px]">
        <div className="absolute size-44 rounded-full bg-[#00a7e1]/15 blur-2xl pointer-events-none" />
        <motion.div
          className="relative z-10 w-28 sm:w-32 md:w-36 max-h-[160px] flex items-center justify-center text-cyan-300 drop-shadow-[0_8px_20px_rgba(0,167,225,0.35)]"
          animate={{
            scale: isHovered ? 1.08 : 1,
            y: isHovered ? -3 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <IllustrationComp className="w-full h-auto text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300" />
        </motion.div>
      </div>

      <div className="relative z-20 p-3 sm:p-4 w-full">
        <motion.div
          className="w-full rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/20 bg-slate-900/60 backdrop-blur-md shadow-2xl transition-all duration-300"
          animate={{
            backgroundColor: isHovered
              ? "rgba(15, 23, 42, 0.85)"
              : "rgba(15, 23, 42, 0.60)",
            borderColor: isHovered
              ? "rgba(255, 255, 255, 0.35)"
              : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          style={{
            WebkitBackdropFilter: "blur(12px)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase text-white mb-2 bg-white/10 backdrop-blur-md whitespace-nowrap shrink-0 max-w-full">
                {card.badge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h3>
            </div>

            <motion.div
              className="size-9 sm:size-10 rounded-full flex items-center justify-center shrink-0 border border-white/25 bg-white/10 text-white shadow-md"
              animate={{
                rotate: isHovered ? 180 : 0,
                backgroundColor: isHovered ? "#00a7e1" : "rgba(255, 255, 255, 0.1)",
                borderColor: isHovered ? "#38bdf8" : "rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
              }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
              <ArrowUpRight className="size-4 sm:size-5" />
            </motion.div>
          </div>

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
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden"
              >
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light mb-3 line-clamp-3">
                  {card.description}
                </p>

                <div className="pt-2.5 border-t border-white/15 flex flex-wrap items-center gap-1.5 mb-3">
                  {card.highlights.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/10 text-slate-100 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-cyan-300 group-hover:text-cyan-200 pt-1">
                  <span>Learn More & View Specs</span>
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

export default function DataSecurityLayout() {
  return (
    <main className="w-full min-h-screen bg-[#F8F9FB]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/Hero4.jpg"
            alt="Data Security Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#031B3D]/75 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
              <span>›</span>
              <Link href="/services/cybersecurity" className="hover:text-white transition-colors">CYBERSECURITY</Link>
              <span>›</span>
              <span className="text-white uppercase">DATA SECURITY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Data Security
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-light max-w-2xl">
              Protect critical data environments with architecture reviews, robust deployment strategies, and continuous remote monitoring and management.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#services-grid"
                className="inline-flex items-center justify-center bg-[#00a7e1] hover:bg-[#008dbf] text-white rounded-md px-7 py-3 text-sm font-semibold shadow-lg shadow-[#00a7e1]/30 transition-all hover:scale-105"
              >
                Explore Data Security Solutions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-md px-7 py-3 text-sm font-semibold transition-all hover:scale-105 backdrop-blur-xs"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SERVICES CARDS SECTION */}
      <section id="services-grid" className="py-20 sm:py-28 border-b border-slate-200/80 bg-[#F8F9FB]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00a7e1]/10 text-[#00a7e1] border border-[#00a7e1]/20 mb-4">
              <Sparkles className="size-3.5" />
              SPS Cybersecurity Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031B3D] tracking-tight mb-4">
              Our Data Security Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Enterprise-grade cognitive intelligence, data management, and operational security designed to accelerate performance, compliance, and strategic outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {CARDS.map((card) => (
              <HoverCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}