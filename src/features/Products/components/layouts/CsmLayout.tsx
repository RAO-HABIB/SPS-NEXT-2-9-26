"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ProductDetailData } from "@/data/products-data";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Search,
  Activity,
  AlertTriangle,
  RotateCcw,
  TrendingUp,
  FileCheck,
  CalendarCheck,
  AlertOctagon,
  Shield,
  Layers,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";

interface NistPillarItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  image: string;
  desc: string;
  highlights: string[];
  framework: string;
  controls: string;
  cadence: string;
  defaultOpen?: boolean;
}

const nistPillars: NistPillarItem[] = [
  {
    id: "identify",
    name: "Identify (ID)",
    category: "Asset Governance & Risk Strategy",
    badge: "Domain 01",
    image: "/images/services/Vapt1.jpg",
    desc: "Develop an organizational understanding to manage cybersecurity risk to systems, people, assets, data, and capabilities.",
    highlights: [
      "Physical and software asset inventory governance",
      "Enterprise-wide threat and vulnerability risk assessment",
      "Organizational security policies and supply chain risk posture",
    ],
    framework: "NIST CSF 2.0",
    controls: "ID.AM · ID.RA · ID.GV · ID.SC",
    cadence: "Continuous Baseline",
    defaultOpen: true,
  },
  {
    id: "protect",
    name: "Protect (PR)",
    category: "Safeguards & Identity Defense",
    badge: "Domain 02",
    image: "/images/products/powering_security.jpg",
    desc: "Develop and implement appropriate safeguards to ensure delivery of critical enterprise services and data protection.",
    highlights: [
      "Identity access management (IAM) and zero-trust verification",
      "Multi-layer data protection and cryptographic controls",
      "Protective technology maintenance and employee security hygiene",
    ],
    framework: "NIST CSF 2.0",
    controls: "PR.AC · PR.DS · PR.IP · PR.PT",
    cadence: "Continuous Active Defense",
  },
  {
    id: "detect",
    name: "Detect (DE)",
    category: "Monitoring & Anomaly Hunting",
    badge: "Domain 03",
    image: "/images/services/vapt2.webp",
    desc: "Develop and implement appropriate activities to identify the occurrence of a cybersecurity event promptly.",
    highlights: [
      "24/7 SIEM/XDR continuous security event telemetry",
      "Real-time anomalous activity detection and behavioral baselines",
      "Proactive vulnerability scanning and threat hunting",
    ],
    framework: "NIST CSF 2.0",
    controls: "DE.AE · DE.CM · DE.DP",
    cadence: "24/7/365 Real-Time",
  },
  {
    id: "respond",
    name: "Respond (RS)",
    category: "Mitigation & Incident Action",
    badge: "Domain 04",
    image: "/images/services/vapt3.jpg",
    desc: "Develop and implement appropriate activities to take action regarding a detected cybersecurity incident.",
    highlights: [
      "Dynamic incident response plan execution and containment",
      "Coordinated stakeholder and regulatory communications",
      "Forensic root-cause analysis and threat neutralization",
    ],
    framework: "NIST CSF 2.0",
    controls: "RS.MA · RS.AN · RS.CO · RS.MI",
    cadence: "Rapid SLA Triggered",
  },
  {
    id: "recover",
    name: "Recover (RC)",
    category: "Resiliency & Restoration",
    badge: "Domain 05",
    image: "/images/services/vapt4.webp",
    desc: "Develop and implement appropriate activities to maintain plans for resilience and to restore capabilities impaired due to an incident.",
    highlights: [
      "Business continuity orchestration and snapshot restoration",
      "Post-incident recovery improvements and policy hardening",
      "Public relations and customer trust preservation protocols",
    ],
    framework: "NIST CSF 2.0",
    controls: "RC.RP · RC.IM · RC.CO",
    cadence: "Tested Bi-Annually",
  },
];

function NistShowcaseCard({ pillar }: { pillar: NistPillarItem }) {
  const [isOpen, setIsOpen] = useState(pillar.defaultOpen ?? false);

  return (
    <div className="w-full sm:w-[350px] lg:w-[370px] bg-white rounded-[32px] sm:rounded-[36px] p-3 sm:p-3.5 border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Top Media Container */}
      <div className="relative h-[255px] w-full rounded-[26px] sm:rounded-[28px] overflow-hidden group/img shrink-0">
        <Image
          src={pillar.image}
          alt={pillar.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#031B3D] via-[#031B3D]/50 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-slate-800 backdrop-blur-md border border-white/40 shadow-xs flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#00a7e1]" />
            {pillar.badge}
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#031B3D]/80 text-[#00a7e1] backdrop-blur-md border border-[#00a7e1]/30 shadow-xs flex items-center gap-1">
            <CheckCircle2 className="size-3 text-[#00a7e1]" />
            Standardized
          </span>
        </div>

        {/* Bottom Inside Media Details */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between z-10">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
              {pillar.name}
            </h3>
            <p className="text-xs text-slate-300 font-medium tracking-wide mt-1">
              {pillar.category}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle details"
            className="size-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#031B3D] backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/30 shrink-0 cursor-pointer shadow-sm"
          >
            <ArrowUpRight className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
          </button>
        </div>
      </div>

      {/* Expandable Content Container */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="showcase-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3">
              <div className="bg-slate-50/95 border border-slate-200/80 rounded-[24px] sm:rounded-[26px] p-4 sm:p-5 flex flex-col gap-3.5 text-left">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00a7e1] block mb-1">
                    Domain Scope & Strategy
                  </span>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="border-t border-slate-200/70 pt-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Core Safeguards & Objectives
                  </span>
                  <div className="space-y-1.5">
                    {pillar.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="size-3.5 text-[#00a7e1] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/70">
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-[10px] sm:text-[11px] font-medium text-slate-600 shadow-2xs">
                    {pillar.framework}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-[10px] sm:text-[11px] font-mono font-medium text-[#00a7e1] shadow-2xs">
                    {pillar.controls}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-[10px] sm:text-[11px] font-medium text-slate-500 shadow-2xs">
                    {pillar.cadence}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full mt-3 py-2.5 px-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
          isOpen
            ? "bg-[#031B3D] text-white shadow-sm hover:bg-[#031B3D]/90"
            : "bg-slate-100 hover:bg-[#031B3D] text-slate-700 hover:text-white border border-slate-200/70 shadow-xs"
        }`}
      >
        <span>{isOpen ? "Close Details" : "View Details"}</span>
        {isOpen ? (
          <ChevronUp className="size-4" />
        ) : (
          <ChevronDown className="size-4" />
        )}
      </button>
    </div>
  );
}

const csmFeatures = [
  {
    name: "Maturity Augmentation",
    icon: TrendingUp,
    color: "cyan",
    desc: "CSM enables organizations to enhance the maturity levels of People, Processes, and Technology, ensuring a holistic cybersecurity approach aligned with industry best practices.",
  },
  {
    name: "NIST Framework Alignment",
    icon: ShieldCheck,
    color: "navy",
    desc: "Our CSM services are intricately designed to adhere to the NIST framework, offering a standardized and robust foundation for security management.",
  },
  {
    name: "Comprehensive Risk Assessment",
    icon: AlertOctagon,
    color: "cyan",
    desc: "We conduct comprehensive risk assessments to identify potential threats and vulnerabilities, allowing organizations to proactively address security concerns and prioritize mitigation strategies.",
  },
  {
    name: "System Security Plan (SSP) Creation",
    icon: FileCheck,
    color: "navy",
    desc: "CSM facilitates the creation of a System Security Plan (SSP), providing a detailed roadmap for securing your systems, networks, and data assets.",
  },
  {
    name: "Quarterly POA&M Updates",
    icon: CalendarCheck,
    color: "cyan",
    desc: "Our CSM services ensure that your organization's Plan of Actions and Milestones is consistently reviewed and updated on a quarterly basis, aligning with the dynamic nature of cyber threats.",
  },
];

export default function CsmLayout({ data }: { data: ProductDetailData }) {
  return (
    <main className="w-full min-h-screen bg-[#031B3D]">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/Hero8.png"
            alt="CSM Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#031B3D]/75 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link href="/products" className="hover:text-white transition-colors">
                PRODUCTS
              </Link>
              <span>›</span>
              <span className="text-white">SPS</span>
              <span>›</span>
              <span className="text-[#00a7e1]">CSM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Cognitive Security Management
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-light">
              CSM helps organizations augment security management by standardizing it around the NIST
              framework. Fortify People, Processes, and Technology across Identify, Protect, Detect,
              Respond, and Recover domains with active risk assessments and quarterly POA&M governance.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-[#00a7e1] hover:bg-[#008dbf] text-white rounded-md px-7 py-3 text-sm font-semibold shadow-lg shadow-[#00a7e1]/30 transition-all hover:scale-105"
              >
                Request Security Assessment
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-md px-7 py-3 text-sm font-semibold transition-all hover:scale-105 backdrop-blur-xs"
              >
                Download NIST Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro / NIST 5 Pillars Showcase */}
      <section className="py-20 sm:py-24 bg-[#F8F9FB] border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00a7e1]/10 text-[#00a7e1] border border-[#00a7e1]/20 mb-4">
              <Shield className="size-3.5" />
              NIST Framework Standardization
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#031B3D] tracking-tight mb-4">
              Fortifying Security Across Critical NIST Domains
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              We empower organizations to fortify their security management through our comprehensive
              CSM. Our approach is rooted in standardization, specifically around the NIST
              framework, elevating your posture across the five critical domains:
            </p>
          </div>

          {/* 5 Pillars Showcase Cards */}
          <div className="flex flex-wrap items-start justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
            {nistPillars.map((pillar) => (
              <NistShowcaseCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Key Features of Our CSM Services */}
      <section className="py-24 bg-[#F8F9FB] border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-14">
            {/* Left Column: Feature List */}
            <div className="w-full lg:w-3/5">
              <div className="mb-10">
                <span className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-3 block">
                  CORE CAPABILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031B3D] tracking-tight mb-4">
                  Key Features of Our CSM Services
                </h2>
                <p className="text-slate-600 text-base font-light">
                  A complete, structured methodology ensuring your digital infrastructure remains
                  compliant, fortified, and proactively defended.
                </p>
              </div>

              <div className="space-y-4">
                {csmFeatures.map((item, idx) => {
                  const IconComp = item.icon;
                  const isCyan = item.color === "cyan";
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex items-start gap-5 hover:border-[#00a7e1]/40 hover:shadow-lg transition-all group"
                    >
                      <div
                        className={`size-13 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                          isCyan
                            ? "bg-[#00a7e1] text-white shadow-md shadow-[#00a7e1]/20"
                            : "bg-[#031B3D] text-[#00a7e1] shadow-md shadow-[#031B3D]/30"
                        }`}
                      >
                        <IconComp className="size-6" strokeWidth={2.2} />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-[#031B3D] group-hover:text-[#00a7e1] transition-colors mb-1.5">
                          {item.name}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive SOC Dashboard Visual Container */}
            <div className="w-full lg:w-2/5 flex flex-col items-center">
              <div className="relative w-full max-w-md bg-[#031B3D] border border-blue-950 rounded-[28px] p-7 text-white shadow-2xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00a7e1]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="size-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      NIST CSF v2.0 Active
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#00a7e1]/20 text-[#00a7e1] border border-[#00a7e1]/30">
                    Audit Ready
                  </span>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/80 border border-white/10 mb-6 flex items-center justify-center">
                  <Image
                    src="/images/products/product.webp"
                    alt="CSM Dashboard Mockup"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031B3D] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-xs font-mono text-cyan-300">
                      Real-time SOC Threat Radar & Compliance
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs py-2 border-b border-white/10">
                    <span className="text-slate-400">Security Maturity Score</span>
                    <span className="font-bold text-white">4.9 / 5.0</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-white/10">
                    <span className="text-slate-400">System Security Plan (SSP)</span>
                    <span className="font-bold text-emerald-400">Active & Enforced</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2">
                    <span className="text-slate-400">Quarterly POA&M Cadence</span>
                    <span className="font-bold text-cyan-400">Q3 Milestone Verified</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full mt-6 bg-[#00a7e1] hover:bg-[#008dbf] text-white font-semibold rounded-xl text-xs py-2.5 shadow-md shadow-[#00a7e1]/30"
                >
                  Launch SOC Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Benefits - Signature Vertical Keynote Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-3 block">
              ENTERPRISE VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031B3D] tracking-tight mb-4">
              Benefits of CSM
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light">
              Elevate your security management to new heights with services tailored to fortify your
              organization against evolving threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Vertical Cyan Card */}
            <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#00a7e1] border border-[#00a7e1]/80 p-7 sm:p-9 text-white shadow-xl min-h-[520px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {/* Background Geometric Polygonal Shapes (Deep Navy) */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden">
                <svg
                  className="absolute right-0 top-0 h-full w-full"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <polygon
                    points="160,0 400,0 400,200 240,140"
                    className="fill-[#031B3D]/30"
                  />
                </svg>
              </div>

              <div>
                <div className="relative z-10 flex items-center justify-between w-full mb-6">
                  <Layers className="size-8 text-white/90" />
                  <span className="text-xs font-semibold text-white bg-white/20 border border-white/30 px-3 py-1 rounded-full">
                    Holistic Defense
                  </span>
                </div>

                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-[#031B3D] mb-6">
                  <Image
                    src="/images/products/product.webp"
                    alt="Comprehensive Security"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                <h3 className="relative z-10 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug mb-4">
                  Comprehensive Security Management
                </h3>

                <p className="relative z-10 text-white/90 text-sm leading-relaxed font-light mb-8">
                  Our CSM services go beyond the surface, addressing security at every level –
                  People, Processes, and Technology – creating a comprehensive and resilient defense
                  strategy.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#00a7e1] border border-white rounded-full text-xs font-bold px-5 py-2 shadow-sm transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Card 2 - Vertical Navy Card */}
            <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#031B3D] border border-[#031B3D]/80 p-7 sm:p-9 text-white shadow-xl min-h-[520px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {/* Background Geometric Polygonal Shapes (Vibrant Cyan) */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden">
                <svg
                  className="absolute right-0 top-0 h-full w-full"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <polygon
                    points="160,0 400,0 400,200 240,140"
                    className="fill-[#00a7e1]/20"
                  />
                </svg>
              </div>

              <div>
                <div className="relative z-10 flex items-center justify-between w-full mb-6">
                  <ShieldCheck className="size-8 text-[#00a7e1]" />
                  <span className="text-xs font-semibold text-white bg-white/20 border border-white/30 px-3 py-1 rounded-full">
                    NIST Alignment
                  </span>
                </div>

                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-[#00a7e1] mb-6">
                  <Image
                    src="/images/products/product.webp"
                    alt="Strategic NIST Alignment"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                <h3 className="relative z-10 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug mb-4">
                  Strategic NIST Alignment & Risk Mitigation
                </h3>

                <p className="relative z-10 text-slate-300 text-sm leading-relaxed font-light mb-8">
                  By aligning with the NIST framework, we provide a structured approach that ensures
                  adherence to industry standards and empowers proactive risk mitigation before threats
                  escalate.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#00a7e1] border border-white rounded-full text-xs font-bold px-5 py-2 shadow-sm transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Card 3 - Vertical Cyan Card */}
            <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#00a7e1] border border-[#00a7e1]/80 p-7 sm:p-9 text-white shadow-xl min-h-[520px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {/* Background Geometric Polygonal Shapes (Deep Navy) */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden">
                <svg
                  className="absolute right-0 top-0 h-full w-full"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <polygon
                    points="160,0 400,0 400,200 240,140"
                    className="fill-[#031B3D]/30"
                  />
                </svg>
              </div>

              <div>
                <div className="relative z-10 flex items-center justify-between w-full mb-6">
                  <FileCheck className="size-8 text-white/90" />
                  <span className="text-xs font-semibold text-white bg-white/20 border border-white/30 px-3 py-1 rounded-full">
                    Agile Response
                  </span>
                </div>

                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-[#031B3D] mb-6">
                  <Image
                    src="/images/products/product.webp"
                    alt="System Security Planning"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                <h3 className="relative z-10 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug mb-4">
                  Detailed System Security Planning (SSP)
                </h3>

                <p className="relative z-10 text-white/90 text-sm leading-relaxed font-light mb-8">
                  The creation of a robust System Security Plan (SSP) serves as a blueprint for
                  securing assets, while quarterly updates to POA&M ensure continuous resilience.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#00a7e1] border border-white rounded-full text-xs font-bold px-5 py-2 shadow-sm transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call To Action Banner */}
      <section className="py-20 bg-[#031B3D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031B3D] via-[#042857] to-[#031B3D] opacity-90" />
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Build a Secure Foundation for Your Digital Future
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Join enterprise leaders leveraging Cognitive Security Management to align with NIST,
            protect critical assets, and navigate dynamic cybersecurity threats.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#00a7e1] hover:bg-[#008dbf] text-white rounded-md px-8 py-3 text-sm font-semibold shadow-xl shadow-[#00a7e1]/30 transition-all hover:scale-105"
            >
              Get Started with CSM
            </Button>
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-md px-8 py-3 text-sm font-semibold transition-all hover:scale-105 backdrop-blur-xs"
            >
              Speak to a Security Architect
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
