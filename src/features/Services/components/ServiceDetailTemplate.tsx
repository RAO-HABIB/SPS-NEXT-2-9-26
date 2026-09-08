"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Download, Server, LayoutTemplate, MessageSquare, ChevronLeft, ArrowUpRight } from "lucide-react";
import { DetailedServiceData, DetailedServiceSection2 } from "@/data/detailed-services";
import { Button } from "@/components/ui/button";
import RequestQuoteModal from "@/components/ui/RequestQuoteModal";

function FramerServicesSection({ section2 }: { section2: DetailedServiceSection2 }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const highlights = section2.highlights || [];
  const currentHighlight = highlights[activeIdx] || highlights[0];
  const currentImage = currentHighlight?.image || section2.image || "/images/services/network-ops.jpg";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F8F9FB] border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-3 block">
            CORE CAPABILITIES & METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#031B3D] tracking-tight uppercase">
            {section2.title}
          </h2>
        </div>

        {/* 2-Column Split Layout matching Framer component */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Column: Dynamic Interactive Image (matching Framer framer-5l4nk3) */}
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
                    alt={currentHighlight?.title || "Service Showcase"}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle dark vignette overlay for high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02122c]/90 via-[#02122c]/20 to-transparent" />
                  
                  {/* Floating Caption on Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="inline-block text-[11px] font-mono tracking-widest uppercase text-[#00a7e1] bg-[#02122c]/90 px-3 py-1 rounded-full border border-[#00a7e1]/40 backdrop-blur-sm mb-2">
                      Capability 0{activeIdx + 1}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                      {currentHighlight?.title}
                    </h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Framer Services List (matching Framer framer-28ftnc) */}
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
                    {/* Number: Monospace font (Roboto Mono) */}
                    <div className="mb-2">
                      <span
                        className={`font-mono text-xs sm:text-sm tracking-wider transition-colors duration-300 ${
                          isActive ? "text-[#00a7e1] font-bold" : "text-slate-400"
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

                      {/* Arrow Icon in circular button */}
                      <div
                        className={`size-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-[#00a7e1] text-white rotate-45 shadow-md shadow-[#00a7e1]/30"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-700"
                        }`}
                      >
                        <ArrowUpRight className="size-5 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Description: Framer accordion expansion */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-3.5 max-w-xl">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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

export default function ServiceDetailTemplate({ 
  data,
  category = "cybersecurity",
  slug = "network-security",
}: { 
  data: DetailedServiceData;
  category?: string;
  slug?: string;
}) {
  if (!data) return <div>Service details not found</div>;

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const categoryLabel = (category || "cybersecurity").replace(/-/g, " ").toUpperCase();
  const slugLabel = (slug || "network-security").replace(/-/g, " ").toUpperCase();

  // Render the Minimal "Design" Layout
  if (data.layoutType === "design") {
    return (
      <main className="w-full bg-white text-slate-900">
        {/* HERO SECTION */}
        <section className="relative w-full pt-28 pb-20 md:pt-36 md:pb-24 bg-[#02122c] overflow-hidden">
          {/* Abstract Diamond Grid Background */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
            <Image
              src={data.hero.bgImage || "/images/Hero/Hero4.jpg"}
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#02122c]/90 via-[#0a2540]/80 to-[#02122c]/90" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Breadcrumb matching Network Security */}
              <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <Link href="/services" className="hover:text-white transition-colors">
                  SERVICES
                </Link>
                <span>›</span>
                <Link
                  href={`/services/${category}`}
                  className="hover:text-white transition-colors"
                >
                  {categoryLabel}
                </Link>
                <span>›</span>
                <Link
                  href={`/services/${category}/${slug}`}
                  className="text-white hover:text-[#00a7e1] transition-colors"
                >
                  {slugLabel}
                </Link>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                {data.hero.title}
              </h1>
              <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
                {data.hero.subtitle}
              </p>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center bg-[#00a7e1] hover:bg-[#0090c1] text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 cursor-pointer"
              >
                <MessageSquare className="mr-2 size-5" />
                Request a Quote
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: Content & Isometric Image */}
        {data.section1 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-6 leading-tight">
                    {data.section1.title}
                  </h2>
                  <p className="text-[#555555] text-sm md:text-base leading-relaxed mb-4">
                    {data.section1.description}
                  </p>
                  {data.section1.description2 && (
                    <p className="text-[#555555] text-sm md:text-base leading-relaxed">
                      {data.section1.description2}
                    </p>
                  )}
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-lg aspect-[16/9]">
                    <Image
                      src={data.section1.singleImage || "/images/services/network-design.jpg"}
                      alt="Isometric Network Diagram"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TABLE SECTION */}
        {data.tableData && (
          <section className="pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <div className="overflow-x-auto shadow-lg border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-[#241d40] text-white">
                      {data.tableData.columns?.map((col) => (
                        <th key={col.key} className="p-4 font-semibold text-xs tracking-wide border-r border-white/10 last:border-0">
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data.tableData.rows?.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 transition-colors border-b border-slate-200 last:border-0">
                        {data.tableData!.columns?.map((col, cIdx) => (
                          <td key={col.key} className={`p-4 text-xs leading-relaxed border-r border-slate-200 last:border-0 \${cIdx === 0 ? 'text-[#333] font-medium' : 'text-[#666]'}`}>
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

        {/* BULLETS PLATFORM SECTION */}
        {data.section4 && data.section4.variant === "bullets" && (
          <section className="pb-24">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200 shadow-inner">
                <h3 className="text-lg font-bold text-[#333] mb-4">
                  {data.section4.title}
                </h3>
                <ul className="list-none space-y-2 ml-2">
                  {data.section4.platforms?.map((platform, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#555]">
                      <div className="size-1.5 rounded-full bg-slate-400 shrink-0" />
                      {platform.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
        <RequestQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          serviceTitle={data.hero.title}
        />
      </main>
    );
  }

  // Render the "Training" Layout (Screenshot 3 - Highlights & Catalog)
  if (data.layoutType === "training") {
    return (
      <main className="w-full bg-white text-slate-900">
        {/* HERO SECTION */}
        <section className="relative w-full pt-28 pb-20 md:pt-36 md:pb-24 bg-[#02122c] overflow-hidden">
          {/* Abstract Diamond Grid Background */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
            <Image
              src={data.hero.bgImage || "/images/Hero/Hero4.jpg"}
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#02122c]/90 via-[#0a2540]/80 to-[#02122c]/90" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl"
            >
              {/* Breadcrumb matching Network Security */}
              <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <Link href="/services" className="hover:text-white transition-colors">
                  SERVICES
                </Link>
                <span>›</span>
                <Link
                  href={`/services/${category}`}
                  className="hover:text-white transition-colors"
                >
                  {categoryLabel}
                </Link>
                <span>›</span>
                <Link
                  href={`/services/${category}/${slug}`}
                  className="text-white hover:text-[#00a7e1] transition-colors"
                >
                  {slugLabel}
                </Link>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                {data.hero.title}
              </h1>
              <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed mb-8">
                {data.hero.subtitle}
              </p>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center bg-[#00a7e1] hover:bg-[#0090c1] text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 cursor-pointer"
              >
                <MessageSquare className="mr-2 size-5" />
                Request a Quote
              </button>
            </motion.div>
          </div>
        </section>

        {/* HIGHLIGHTS & PRODUCT SHOWCASE SECTION */}
        {data.section1 && (
          <section className="py-16 md:py-24 bg-[#F8F9FB]">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <div className="bg-white rounded-3xl p-8 md:p-14 shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-3/5">
                  <h2 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-6 tracking-tight">
                    {data.section1.title || "Highlights:"}
                  </h2>
                  <ul className="space-y-4">
                    {data.section1.checklists?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-slate-700 text-sm md:text-base leading-relaxed">
                        <div className="size-2 rounded-full bg-slate-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-2/5 flex justify-center">
                  <div className="relative w-full max-w-md aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white flex items-center justify-center p-2">
                    <Image
                      src={data.section1.singleImage || "/images/services/keysight-catalog.jpg"}
                      alt="Keysight Product Catalog"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <RequestQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          serviceTitle={data.hero.title}
        />
      </main>
    );
  }

  // DEFAULT Render: The "Operations" Layout (Screenshot 1)
  return (
    <main className="w-full bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 bg-[#02122c] overflow-hidden">
        {/* Abstract Diamond Grid Background */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
          <Image
            src={data.hero.bgImage || "/images/Hero/Hero4.jpg"}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient to match design */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#02122c]/90 via-[#0a2540]/80 to-[#02122c]/90" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb matching Network Security */}
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link href="/services" className="hover:text-white transition-colors">
                SERVICES
              </Link>
              <span>›</span>
              <Link
                href={`/services/${category}`}
                className="hover:text-white transition-colors"
              >
                {categoryLabel}
              </Link>
              <span>›</span>
              <Link
                href={`/services/${category}/${slug}`}
                className="text-white hover:text-[#00a7e1] transition-colors"
              >
                {slugLabel}
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {data.hero.title}
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl font-light leading-relaxed mb-8">
              {data.hero.subtitle}
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center justify-center bg-[#00a7e1] hover:bg-[#0090c1] text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="mr-2 size-5" />
              Request a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION 1: Health Check (Checklists) */}
      {data.section1 && (
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Images */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative grid grid-cols-2 gap-4 h-[500px]"
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image src={data.section1.image1 || "/images/products/ibm-security-card.jpg"} alt="Visibility" fill className="object-cover" />
                </div>
                <div className="relative h-4/5 self-end rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image src={data.section1.image2 || "/images/products/ibm-automation-card.jpg"} alt="Operations" fill className="object-cover" />
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#00a7e1] font-bold text-sm tracking-wider uppercase mb-3 block">
                  {data.section1.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#031B3D] mb-6 leading-tight">
                  {data.section1.title}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {data.section1.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {(data.section1.checklists || [])?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 shrink-0 bg-[#00a7e1]/10 rounded-full p-0.5">
                        <CheckCircle2 className="size-4 text-[#00a7e1]" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SECTION 2: Configuration & Testing (Framer Services List Design) */}
      {data.section2 && (
        <FramerServicesSection section2={data.section2} />
      )}

      {/* 4. SECTION 3: Insights & Map */}
      {data.section3 && (
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#031B3D] mb-4">
                  {data.section3.title}
                </h2>
                <span className="text-[#00a7e1] font-bold text-sm tracking-widest uppercase mb-6 block">
                  {data.section3.subtitle}
                </span>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {data.section3.description}
                </p>
                <Button variant="outline" className="rounded-full border-slate-300 text-slate-700 hover:bg-slate-50 px-6">
                  Download Sample Architecture Map
                  <Download className="ml-2 size-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] w-full"
              >
                <Image
                  src={data.section3.image || "/images/products/map.webp"}
                  alt="Insights Map"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 5. SECTION 4: Comparison Table */}
      {data.tableData && (
        <section className="py-16 md:py-20 bg-[#f4f7f9]">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-[#031B3D] text-white">
                      {data.tableData.columns?.map((col) => (
                        <th key={col.key} className="p-5 font-semibold text-sm tracking-wide border-r border-white/10 last:border-0">
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.tableData.rows?.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-0">
                        {data.tableData!.columns?.map((col, cIdx) => (
                          <td key={col.key} className={`p-5 text-sm border-r border-slate-100 last:border-0 \${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-600'}`}>
                            {row[col.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. SECTION 5: Platforms (Card variant) */}
      {data.section4 && data.section4.variant !== "bullets" && (
        <section className="py-20 md:py-28 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#00a7e1] font-bold text-sm tracking-wider uppercase mb-3 block">
                  Platforms
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#031B3D] mb-6">
                  {data.section4.title}
                </h2>
                {data.section4.description && (
                  <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                    {data.section4.description}
                  </p>
                )}

                <div className="space-y-6">
                  {data.section4.platforms?.map((platform, pIdx) => (
                    <div key={pIdx} className="flex gap-4">
                      <div className="shrink-0 mt-1 size-8 rounded-full bg-[#00a7e1] flex items-center justify-center text-white shadow-md">
                        <CheckCircle2 className="size-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{platform.name}</h4>
                        <p className="text-slate-600 text-sm">{platform.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-black"
              >
                <Image
                  src={data.section4.image || "/images/services/network-design.jpg"}
                  alt="Supported Platforms"
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceTitle={data.hero.title}
      />
    </main>
  );
}
