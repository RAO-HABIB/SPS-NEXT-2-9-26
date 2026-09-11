"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { DetailedVerticalData, DetailedVerticalSection2 } from "@/data/detailed-verticals";
import RequestQuoteModal from "@/components/ui/RequestQuoteModal";

/* =========================================================================
   Interactive Framer-Style Capabilities Component (matching Services List)
   ========================================================================= */
function FramerVerticalSection({ section2 }: { section2: DetailedVerticalSection2 }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const highlights = section2.highlights || [];
  const currentHighlight = highlights[activeIdx] || highlights[0];
  const currentImage = currentHighlight?.image || section2.image || "/images/verticals/public.jpg";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F8F9FB] border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[#0057B8] text-xs font-bold tracking-widest uppercase mb-3 block">
            {section2.subtitle || "CORE CAPABILITIES & SOLUTIONS"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#031B3D] tracking-tight uppercase">
            {section2.title}
          </h2>
        </div>

        {/* 2-Column Split Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Column: Dynamic Interactive Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-[#02122c]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImage}
                    alt={currentHighlight?.title || "Vertical Capability Showcase"}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle dark vignette overlay for high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02122c]/90 via-[#02122c]/20 to-transparent" />

                  {/* Floating Caption on Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="inline-block text-[11px] font-mono tracking-widest uppercase text-cyan-300 bg-[#02122c]/90 px-3 py-1 rounded-full border border-cyan-400/40 backdrop-blur-sm mb-2">
                      Solution 0{activeIdx + 1}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                      {currentHighlight?.title}
                    </h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Interactive Capabilities List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="divide-y divide-slate-200/90 border-t border-b border-slate-200/90">
              {highlights.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className="cursor-pointer py-6 sm:py-7 transition-all duration-300 group select-none"
                  >
                    {/* Number */}
                    <div className="mb-2">
                      <span
                        className={`font-mono text-xs sm:text-sm tracking-wider transition-colors duration-300 ${
                          isActive ? "text-[#0057B8] font-bold" : "text-slate-400"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title + Arrow Row */}
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`text-xl sm:text-2xl lg:text-[25px] font-semibold tracking-tight transition-colors duration-300 ${
                          isActive ? "text-[#031B3D]" : "text-slate-500 group-hover:text-slate-800"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <div
                        className={`flex items-center justify-center size-10 sm:size-11 rounded-full transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-[#0057B8] text-white shadow-md rotate-45"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-700"
                        }`}
                      >
                        <ArrowUpRight className="size-5" />
                      </div>
                    </div>

                    {/* Expandable Description */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   Main Vertical Detail Template
   ========================================================================= */
export default function VerticalDetailTemplate({ data }: { data: DetailedVerticalData }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020B1D] via-[#0A192F] to-[#041026] py-20 md:py-28 lg:py-32">
        {/* Glow ambient background elements */}
        <div className="absolute -top-40 -left-40 size-[500px] rounded-full bg-blue-600/20 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 size-[500px] rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link href="/verticals" className="hover:text-white transition-colors">
                VERTICALS
              </Link>
              <span>›</span>
              <span className="text-white">
                {data.hero.breadcrumb || data.title}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
              {data.hero.subtitle}
            </p>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center justify-center bg-[#0057B8] hover:bg-[#004899] text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="mr-2 size-5" />
              Request a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: Strategic Industry Impact & Overview */}
      {data.section1 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <span className="text-[#0057B8] text-xs font-bold tracking-widest uppercase mb-2 block">
                  {data.section1.subtitle || "STRATEGIC DOMAIN IMPACT"}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#031B3D] mb-6 leading-tight">
                  {data.section1.title}
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                  {data.section1.description}
                </p>
                {data.section1.description2 && (
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {data.section1.description2}
                  </p>
                )}

                {/* Checklists */}
                {data.section1.checklists && (
                  <div className="space-y-3 pt-2">
                    {data.section1.checklists.map((check, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[#0057B8] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700">{check}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:w-1/2 flex justify-center w-full">
                <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                  <Image
                    src={data.section1.singleImage || "/images/verticals/public.jpg"}
                    alt={data.section1.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: Framer Interactive Capabilities Component */}
      {data.section2 && <FramerVerticalSection section2={data.section2} />}

      {/* SECTION 3: Reference Architecture & Modernization Framework */}
      {data.section3 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src={data.section3.image || "/images/verticals/country2.png"}
                  alt={data.section3.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono tracking-widest uppercase text-cyan-300 mb-1 block">
                    ARCHITECTURE SPECIFICATION
                  </span>
                  <h4 className="text-lg font-bold">{data.section3.title}</h4>
                </div>
              </div>

              <div>
                <span className="text-[#0057B8] text-xs font-bold tracking-widest uppercase mb-2 block">
                  {data.section3.subtitle}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#031B3D] mb-6 leading-tight">
                  {data.section3.title}
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {data.section3.description}
                </p>

                {data.section3.bulletPoints && (
                  <ul className="space-y-3.5">
                    {data.section3.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="size-6 rounded-full bg-blue-50 text-[#0057B8] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="size-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: Focused Industry Solutions Grid */}
      {data.section4 && (
        <section className="py-16 md:py-24 bg-[#F8F9FB] border-t border-slate-200/80">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#0057B8] text-xs font-bold tracking-widest uppercase mb-2 block">
                SPECIALIZED PACKAGES
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#031B3D] tracking-tight">
                {data.section4.title}
              </h2>
              {data.section4.description && (
                <p className="text-slate-600 text-sm md:text-base mt-3">
                  {data.section4.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.section4.solutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {sol.tag && (
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-[#0057B8] mb-4">
                        {sol.tag}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-[#031B3D] mb-2">{sol.name}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0057B8]">
                    <span>Explore Track</span>
                    <ChevronRight className="size-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Compliance & Specifications Matrix Table */}
      {data.tableData && (
        <section className="py-16 md:py-24 bg-white border-t border-slate-200/80">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="text-[#0057B8] text-xs font-bold tracking-widest uppercase mb-2 block">
                BENCHMARKS & STANDARDS
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#031B3D] tracking-tight">
                Enterprise Standards & Deliverables Matrix
              </h2>
            </div>

            <div className="overflow-x-auto shadow-lg border border-slate-200 rounded-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#031B3D] text-white">
                    {data.tableData.columns.map((col) => (
                      <th
                        key={col.key}
                        className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider border-b border-slate-700"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {data.tableData.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/70 hover:bg-slate-100/60"}
                    >
                      {data.tableData?.columns.map((col) => (
                        <td
                          key={col.key}
                          className="py-4 px-6 text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          {row[col.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#003e85] via-[#0057B8] to-[#0090c1] py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
              Ready to modernize your {data.hero.breadcrumb || "industry"} operations?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Speak with our senior industry architects to evaluate your technical roadmap and compliance readiness.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-4 rounded-full bg-white text-[#0057B8] font-bold text-sm sm:text-base shadow-xl hover:bg-blue-50 transition-all hover:scale-105 cursor-pointer"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* REQUEST A QUOTE MODAL (White Liquid Glassmorphic Effect) */}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceTitle={data.title}
      />
    </main>
  );
}
