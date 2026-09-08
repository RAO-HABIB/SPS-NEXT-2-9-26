"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const tabData = [
  {
    id: "sps",
    step: "01",
    title: "SPS Products",
    tagline: "Enterprise Operating System & Intelligent Workflows",
    description:
      "Proprietary SPS platforms engineered to streamline business operations, automate workflows, and maximize operational efficiency across all departments.",
    image: "/images/products/powering_sps.jpg",
    teamName: "SPS Product Engineering",
    teamRole: "Enterprise Solutions",
    items: [
      { name: "MYID Self Verify", slug: "myid-self-verify", href: "https://www.myidselfverify.com/" },
      { name: "Azalio", slug: "azalio", href: "https://www.azal.io/" },
      { name: "Fabrico", slug: "fabrico", href: "https://fabrico.spsnet.com/" },
      { name: "CSM", slug: "csm" },
    ],
  },
  {
    id: "ibm",
    step: "02",
    title: "IBM Technology",
    tagline: "Cognitive AI, Hybrid Cloud & Enterprise Infrastructure",
    description:
      "Enterprise-grade software and AI-powered infrastructure delivered through strategic IBM technology partnerships to power mission-critical workloads.",
    image: "/images/products/powering_ibm.jpg",
    teamName: "IBM Alliance Team",
    teamRole: "Cloud & Cognitive AI",
    items: [
      { name: "Automation", slug: "automation" },
      { name: "Data & AI", slug: "data-and-ai" },
      { name: "Security", slug: "security" },
      { name: "Sustainability", slug: "sustainability" },
    ],
  },
  {
    id: "other",
    step: "03",
    title: "Other Solutions",
    tagline: "Zero-Trust Security, Compliance & Digital Forensics",
    description:
      "End-to-end security, regulatory compliance, and business process solutions tailored to protect and optimize your enterprise digital footprint.",
    image: "/images/products/powering_security.jpg",
    teamName: "Solutions Architecture",
    teamRole: "Compliance & Security",
    items: [
      { name: "Identity Verification Solutions", slug: "identity-verification-solutions" },
      { name: "Digital Identity Management", slug: "digital-identity-management" },
      { name: "Manufacturing & Operations", slug: "manufacturing-and-operations-solutions" },
      { name: "Business Management Systems", slug: "business-management-systems" },
      { name: "Compliance & Security Management", slug: "compliance-and-security-management" },
    ],
  },
];

export default function OverviewPoweringBusiness() {
  const [activeTabId, setActiveTabId] = useState("sps");

  const currentTab = tabData.find((t) => t.id === activeTabId) || tabData[0];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F4F7FA] relative overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-[#00a7e1] font-bold uppercase tracking-wider text-xs sm:text-sm mb-3">
            <Sparkles className="size-4" />
            Our Products
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B3D] tracking-tight leading-[1.15] mb-4">
            Powering Businesses with AI, Cloud & Security Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Explore industry-leading technology platforms built to scale your organization with
            intelligent automation, cognitive insights, and resilient governance.
          </p>
        </div>

        {/* Framer-Style Vertical Accordion & Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Vertical Interactive Accordion Cards (5 Cols) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-4">
            {tabData.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${isActive
                      ? "bg-white border-[#00a7e1] shadow-xl shadow-[#00a7e1]/10 ring-1 ring-[#00a7e1]/20"
                      : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-sm"
                    }`}
                >
                  {/* Card Header Row */}
                  <div className="p-6 sm:p-7 flex items-center justify-between gap-4 select-none">
                    <div className="flex items-center gap-4">
                      <span
                        className={`size-9 sm:size-10 rounded-xl flex items-center justify-center font-mono text-xs sm:text-sm font-bold transition-colors ${isActive
                            ? "bg-[#00a7e1] text-white shadow-md shadow-[#00a7e1]/30"
                            : "bg-slate-100 text-slate-500"
                          }`}
                      >
                        {tab.step}
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${isActive ? "text-[#031B3D]" : "text-slate-700"
                            }`}
                        >
                          {tab.title}
                        </h3>
                        {!isActive && (
                          <p className="text-xs sm:text-sm text-slate-500 font-light truncate max-w-xs sm:max-w-sm mt-0.5">
                            {tab.tagline}
                          </p>
                        )}
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive
                          ? "bg-[#00a7e1]/10 text-[#00a7e1]"
                          : "bg-slate-100 text-slate-400"
                        }`}
                    >
                      <ChevronDown className="size-4" />
                    </motion.div>
                  </div>

                  {/* Expandable Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-slate-100">
                          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-5">
                            {tab.description}
                          </p>

                          {/* Product Items List */}
                          <div className="mb-6">
                            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2.5">
                              Included Technologies
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {tab.items.map((item, idx) => {
                                const destination = "href" in item && item.href ? item.href : `/products/${tab.id}/${item.slug}`;
                                const isExternal = destination.startsWith("http");
                                return (
                                  <Link
                                    key={idx}
                                    href={destination}
                                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#00a7e1]/10 border border-slate-200/90 hover:border-[#00a7e1]/40 text-xs font-medium text-slate-700 hover:text-[#00a7e1] transition-all group"
                                  >
                                    <CheckCircle2 className="size-3.5 text-[#00a7e1]" />
                                    {item.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Team Footer & Action Link */}
                          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div>
                              <p className="text-xs font-bold text-[#031B3D]">{tab.teamName}</p>
                              <p className="text-[11px] font-medium text-[#00a7e1]">
                                {tab.teamRole}
                              </p>
                            </div>

                            <Link
                              href={`/products/${tab.id}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a7e1] hover:text-[#008dbf] group"
                            >
                              Explore Hub
                              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Bottom Global Link */}
            <div className="pt-2 pl-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[#00a7e1] text-sm font-bold hover:text-[#008dbf] transition-colors group"
              >
                View All SPS Solutions
                <ArrowRight className="size-4 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Showcase Visual Card (7 Cols) */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative w-full rounded-3xl sm:rounded-[32px] overflow-hidden bg-[#031B3D] border border-slate-800/60 shadow-2xl min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col justify-between">
              {/* Dynamic Image with Crossfade Transition */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTab.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentTab.image}
                      alt={currentTab.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 58vw"
                      priority
                      className="object-cover object-center opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031B3D] via-[#031B3D]/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Top Row: Floating Link Button */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-end">
                <Link
                  href={`/products/${currentTab.id}`}
                  className="size-11 rounded-full bg-white/15 hover:bg-[#00a7e1] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 shadow-lg"
                >
                  <ArrowUpRight className="size-5" />
                </Link>
              </div>

              {/* Bottom Glassmorphic Control Bar */}
              <div className="relative z-10 p-6 sm:p-8">
                <div className="bg-[#031B3D]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 text-white shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                      Featured Technology Suite
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
                      {currentTab.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-snug line-clamp-1 max-w-md">
                      {currentTab.tagline}
                    </p>
                  </div>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-md px-7 py-3 text-sm font-semibold transition-all hover:scale-105 backdrop-blur-xs shrink-0 flex items-center gap-2"
                    >
                      <Calendar className="size-4" />
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
