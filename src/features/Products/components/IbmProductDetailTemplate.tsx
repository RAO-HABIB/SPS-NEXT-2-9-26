"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type IbmDetailedProduct } from "@/data/ibm-detailed-products";
import { Play, Sparkles, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import {
  WorkCommunicationIllustration,
  BusinessStrategyEssentials1,
  ProfessionalLeader1,
  ProfessionalEmployeeEssentials12,
} from "@/components/ui/illustrations";

/**
 * Resolves a unique illustration for each card in the 4-card department grid
 * ensuring every card receives a DISTINCT illustration matching its concept.
 */
function getDepartmentIllustrations(
  cards: Array<{ title: string; badge?: string; description?: string }>
) {
  const illustrationTypes = [
    {
      key: "employee",
      component: ProfessionalEmployeeEssentials12,
      keywords: [
        "human",
        "hr",
        "employee",
        "onboard",
        "worker",
        "staff",
        "talent",
        "engineer",
        "developer",
        "operations",
        "tech",
      ],
    },
    {
      key: "leader",
      component: ProfessionalLeader1,
      keywords: [
        "leader",
        "procurement",
        "sourcing",
        "executive",
        "govern",
        "compliance",
        "legal",
        "risk",
        "audit",
        "management",
        "director",
        "decision",
      ],
    },
    {
      key: "strategy",
      component: BusinessStrategyEssentials1,
      keywords: [
        "sales",
        "strategy",
        "revenue",
        "finance",
        "banking",
        "market",
        "intelligence",
        "tuning",
        "growth",
        "business",
        "data",
        "ops",
      ],
    },
    {
      key: "communication",
      component: WorkCommunicationIllustration,
      keywords: [
        "customer",
        "service",
        "support",
        "chat",
        "nlp",
        "dialog",
        "conversat",
        "assist",
        "message",
        "prompt",
        "contact",
        "desk",
      ],
    },
  ];

  const usedKeys = new Set<string>();

  // Score each card against all 4 illustration types
  const cardScores = cards.map((card) => {
    const text = `${card.title} ${card.badge || ""} ${card.description || ""}`.toLowerCase();
    return illustrationTypes.map((type) => {
      let score = 0;
      for (const kw of type.keywords) {
        if (text.includes(kw)) score += 10;
      }
      return { key: type.key, score, component: type.component };
    });
  });

  const cardIndices = cards.map((_, i) => i);
  // Sort cards by highest conviction score first
  cardIndices.sort((a, b) => {
    const maxA = Math.max(...cardScores[a].map((s) => s.score));
    const maxB = Math.max(...cardScores[b].map((s) => s.score));
    return maxB - maxA;
  });

  const resultMap = new Map<number, React.ComponentType<{ className?: string }>>();

  for (const cardIdx of cardIndices) {
    const available = cardScores[cardIdx]
      .filter((s) => !usedKeys.has(s.key))
      .sort((a, b) => b.score - a.score);

    if (available.length > 0 && available[0].score > 0) {
      const chosen = available[0];
      usedKeys.add(chosen.key);
      resultMap.set(cardIdx, chosen.component);
    } else {
      const fallback =
        illustrationTypes.find((t) => !usedKeys.has(t.key)) ||
        illustrationTypes[cardIdx % illustrationTypes.length];
      usedKeys.add(fallback.key);
      resultMap.set(cardIdx, fallback.component);
    }
  }

  return cards.map(
    (_, idx) =>
      resultMap.get(idx) ||
      illustrationTypes[idx % illustrationTypes.length].component
  );
}

function FramerHoverTestimonialCard({
  client,
  profile,
}: {
  client: { clientName: string; logoText: string; description: string };
  profile: { name: string; role: string; image: string };
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      className={`relative h-[430px] w-full rounded-[30px] bg-black text-white overflow-hidden cursor-pointer shadow-xl border border-slate-800 transition-all duration-500 flex flex-col items-center justify-center ${
        isHovered ? "p-8 gap-5" : "p-3 gap-0"
      }`}
      style={{
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 167, 225, 0.18)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* 1. Image Container (Spring animation morphs from full bleed to centered avatar) */}
      <motion.div
        layout
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        className={`relative overflow-hidden transition-all duration-500 ${
          isHovered
            ? "size-32 shrink-0 rounded-2xl border-2 border-white/40 shadow-2xl ring-4 ring-cyan-500/20"
            : "w-full h-full rounded-[20px]"
        }`}
      >
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          className="object-cover"
        />

        {/* Ambient Vignette & Label when unhovered */}
        {!isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
            <span className="text-xl font-extrabold text-white tracking-tight">
              {client.logoText}
            </span>
            <span className="text-xs text-slate-300 font-medium flex items-center gap-1 mt-1">
              Hover to view testimonial ↗
            </span>
          </div>
        )}
      </motion.div>

      {/* 2. Text Details revealed on Hover (Exact Framer Structure) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center gap-2.5 w-full"
          >
            {/* Testimonial Quote */}
            <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed italic max-w-xs sm:max-w-sm px-2">
              “{client.description}”
            </p>

            {/* Speaker Name */}
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-1">
              {profile.name}
            </h4>

            {/* Designation Capsule */}
            <div className="bg-white text-black px-3.5 py-1 rounded-full shadow-md mt-0.5">
              <span className="text-[11px] font-bold tracking-wide">
                {profile.role}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function IbmProductDetailTemplate({
  product,
}: {
  product: IbmDetailedProduct;
}) {
  const [hoveredTabId, setHoveredTabId] = useState<string | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[#F8F9FB] text-slate-800">
        {/* 1. Hero Dark Purple/Navy Banner (Exact Match to Screenshot) */}
        <section className="relative w-full bg-[#0c0728] pt-28 sm:pt-32 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0728] via-[#150a36] to-[#0c0728] opacity-90 pointer-events-none" />
          <div className="absolute -right-20 -top-20 size-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 size-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Breadcrumb */}
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
              <Link href="/products" className="hover:text-white transition-colors">
                PRODUCTS
              </Link>
              <span className="text-slate-500">›</span>
              <span className="text-slate-400">IBM</span>
              <span className="text-slate-500">›</span>
              <Link
                href={`/products/ibm/${product.slug}`}
                className="text-[#00a7e1] hover:text-white transition-colors uppercase"
              >
                {product.breadcrumbCategory}
              </Link>
            </div>

            {/* Banner Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {product.title}
            </h1>
          </div>
        </section>

        {/* 2. Main Content Card Container (Exact Match to Screenshot) */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 pb-24 relative z-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-10 lg:p-12 space-y-16">
            
            {/* Header Row: Title & Price Estimator Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#00a7e1]/10 text-[#00a7e1] border border-[#00a7e1]/20 mb-2">
                  <Sparkles className="size-3" />
                  {product.headerTag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031B3D] tracking-tight">
                  {product.title}
                </h2>
              </div>

              <Link
                href="/contact"
                className="self-start sm:self-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#130d2d] hover:bg-[#00a7e1] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-cyan-500/20"
              >
                Price Estimator
              </Link>
            </div>

            {/* Section 1: Core Value Proposition & Video Player ("Put AI to work") */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Core Description */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#031B3D] tracking-tight">
                  {product.coreSection.heading}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                  {product.coreSection.leadParagraph}
                </p>
                <p className="text-[#031B3D] text-sm sm:text-base font-semibold leading-relaxed pt-1">
                  {product.coreSection.outcomeParagraph}
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#00a7e1] hover:text-[#008dbf] text-sm font-bold transition-colors group"
                  >
                    <span>Request Solution Architecture Briefing</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: YouTube / Interactive Video Preview Card */}
              <div className="lg:col-span-6">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 group">
                  {isPlayingVideo ? (
                    <iframe
                      src={`${product.coreSection.videoEmbedUrl}&autoplay=1`}
                      title={product.coreSection.videoTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div
                      onClick={() => setIsPlayingVideo(true)}
                      className="relative w-full h-full cursor-pointer select-none"
                    >
                      {/* Background Visual */}
                      <Image
                        src="/images/products/ibm-automation-card.jpg"
                        alt={product.coreSection.videoTitle}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

                      {/* Video Title Header */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-medium z-10">
                        <span className="truncate pr-4 drop-shadow-md">
                          {product.coreSection.videoTitle}
                        </span>
                        <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-white/90">
                          Watch on YouTube
                        </span>
                      </div>

                      {/* YouTube Play Icon Center */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="size-16 sm:size-20 rounded-2xl bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                          <Play className="size-8 sm:size-10 fill-current ml-1" />
                        </div>
                      </div>

                      {/* Bottom Tag */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 text-xs z-10">
                        <span>IBM Certified Demonstration</span>
                        <span>Full HD 1080p</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Department / Functional Cards (4 Horizontal Cards) */}
            <div className="pt-6 border-t border-slate-100">
              {(() => {
                const deptIllustrations = getDepartmentIllustrations(product.departmentCards);
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {product.departmentCards.map((card, idx) => {
                      const DeptIllustration = deptIllustrations[idx];
                      return (
                        <div
                          key={idx}
                          className="rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#00a7e1]/40 transition-all duration-300 group bg-white"
                        >
                      {/* Top Illustration Box with Vector Graphic perfectly conveying concept */}
                      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/30 flex flex-col items-center justify-center p-4 border border-slate-100/90 mb-5 group-hover:border-[#00a7e1]/30 transition-all">
                        <div className="w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center text-[#00a7e1] drop-shadow-sm group-hover:scale-108 transition-transform duration-300">
                          <DeptIllustration className="w-full h-full object-contain text-[#00a7e1]" />
                        </div>
                        {card.badge && (
                          <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-white/95 px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-xs">
                            {card.badge}
                          </span>
                        )}
                      </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#031B3D] mb-2 tracking-tight group-hover:text-[#00a7e1] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
                  </div>
                );
              })()}
            </div>

            {/* Section 3: Feature & Architecture Deep-Dive (Framer Expand-OnHover List Style) */}
            <div className="pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#00a7e1] block mb-1">
                    CAPABILITIES ARCHITECTURE
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#031B3D] tracking-tight">
                    {product.capabilitiesSection.heading}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
                  Hover or select an agent capability to inspect orchestration logic, modular skills, and enterprise connectors.
                </p>
              </div>

              {/* Expand OnHover List Component */}
              <div 
                className="border-t border-slate-200 divide-y divide-slate-200"
                onMouseLeave={() => setHoveredTabId(null)}
              >
                {product.capabilitiesSection.tabs.map((tab, idx) => {
                  const isOpen = tab.id === hoveredTabId;
                  const slNo = String(idx + 1).padStart(2, "0");
                  
                  const previewImages = [
                    "/images/products/ibm-automation-card.jpg",
                    "/images/products/powering_ibm.jpg",
                    "/images/products/ibm-data-ai-card.jpg",
                  ];
                  const previewImg = previewImages[idx % previewImages.length];

                  return (
                    <div
                      key={tab.id}
                      onMouseEnter={() => setHoveredTabId(tab.id)}
                      onClick={() => setHoveredTabId((prev) => (prev === tab.id ? null : tab.id))}
                      className={`relative py-6 sm:py-7 transition-all duration-300 cursor-pointer group ${
                        isOpen ? "bg-slate-50/80 px-2 sm:px-4 rounded-xl" : "hover:bg-slate-50/40"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 px-3 sm:px-4">
                        
                        {/* 1. SL No (Serial Number) */}
                        <div className="flex items-center gap-4 md:gap-8 shrink-0 md:pt-1">
                          <span
                            className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${
                              isOpen ? "text-[#031B3D]" : "text-slate-300 group-hover:text-slate-400"
                            }`}
                          >
                            {slNo}
                          </span>
                        </div>

                        {/* 2. Content Block: Title & Expandable Description */}
                        <div className="flex-1 min-w-0 md:pt-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span
                              className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors ${
                                isOpen
                                  ? "bg-[#00a7e1]/10 text-[#00a7e1] border-[#00a7e1]/30"
                                  : "bg-slate-100 text-slate-500 border-slate-200/80"
                              }`}
                            >
                              {tab.label}
                            </span>
                          </div>

                          <h4
                            className={`mt-2 text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                              isOpen
                                ? "text-[#031B3D]"
                                : "text-slate-600 group-hover:text-slate-900"
                            }`}
                          >
                            {tab.headline}
                          </h4>

                          {/* Smooth expandable text */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 pt-3 border-t border-slate-200/80">
                                  <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                                    {tab.description}
                                  </p>

                                  <div className="flex items-center gap-2 mt-4 pt-2">
                                    <CheckCircle2 className="size-4 text-[#00a7e1] shrink-0" />
                                    <span className="text-xs font-semibold text-slate-700">
                                      Zero-micromanagement orchestration with audited role permissions
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* 3. Floating Tilted Image Preview (Exact Framer Style) */}
                        <div className="hidden lg:flex items-center justify-center shrink-0">
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.88, rotate: 10, y: 15 }}
                                animate={{ opacity: 1, scale: 1, rotate: -4, y: 0 }}
                                exit={{ opacity: 0, scale: 0.88, rotate: 10, y: 15 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="relative w-64 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-xl ring-1 ring-slate-200/80 bg-slate-900"
                              >
                                <Image
                                  src={previewImg}
                                  alt={tab.headline}
                                  fill
                                  sizes="256px"
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white/90 drop-shadow">
                                  <span className="truncate">{tab.label}</span>
                                  <span className="text-cyan-300 font-mono text-[10px]">LIVE</span>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* 4. Circular Toggle / Action Icon */}
                        <div className="shrink-0 flex items-center md:pt-1 self-end md:self-start">
                          <div
                            className={`size-10 sm:size-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen
                                ? "bg-[#031B3D] text-white shadow-md rotate-45"
                                : "bg-slate-100 text-slate-400 group-hover:bg-[#00a7e1]/10 group-hover:text-[#00a7e1]"
                            }`}
                          >
                            <ArrowRight className="size-4 transition-transform" />
                          </div>
                        </div>

                      </div>

                      {/* Active Highlight Line */}
                      {isOpen && (
                        <motion.div
                          layoutId="active-hover-line"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00a7e1]"
                          transition={{ type: "spring", stiffness: 350, damping: 35 }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 4: Client Success (Framer Hover-Testimonials Style: https://framer.com/m/Hover-testimoniasl-hkDWVa.js) */}
            <div className="pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#00a7e1] block mb-1">
                    CLIENT STORIES & TESTIMONIALS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#031B3D] tracking-tight">
                    Real clients. Real results.
                  </h3>
                </div>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  Hover cards to reveal executive testimonials & impact metrics
                </span>
              </div>

              {/* Framer Hover Testimonials Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {product.clientResults.map((client, cIdx) => {
                  const CLIENT_PROFILES: Record<
                    number,
                    { name: string; role: string; image: string }
                  > = {
                    0: {
                      name: "Kenneth Fong",
                      role: "VP Engineering, Avid Solutions",
                      image: "/images/products/kenneth-fong.jpg",
                    },
                    1: {
                      name: "Sarah Liu",
                      role: "Head of Procurement, D&B",
                      image: "/images/products/sarah-liu.jpg",
                    },
                    2: {
                      name: "Marcus Vance",
                      role: "Global HR Systems Lead, IBM",
                      image: "/images/products/marcus-vance.png",
                    },
                  };

                  const profile = CLIENT_PROFILES[cIdx] || {
                    name: client.clientName,
                    role: `Executive Lead, ${client.logoText}`,
                    image: "/images/products/marcus-vance.png",
                  };

                  return (
                    <FramerHoverTestimonialCard
                      key={cIdx}
                      client={client}
                      profile={profile}
                    />
                  );
                })}
              </div>
            </div>

            {/* Bottom Back & Exploration Bar */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href={`/products/ibm/${product.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00a7e1] hover:underline"
              >
                ← Back to {product.breadcrumbCategory} Suite
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-[#00a7e1] hover:bg-[#008dbf] text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
                >
                  Schedule Solution Demo
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
