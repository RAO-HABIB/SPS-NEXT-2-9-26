const fs = require('fs');

const template = `"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  __ICON_IMPORTS__
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
__CARDS_DATA__
];

const CUSTOMERS = [
__CUSTOMERS_DATA__
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

export default function __COMPONENT_NAME__() {
  return (
    <main className="w-full min-h-screen bg-[#F8F9FB]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="__HERO_IMAGE__"
            alt="__PAGE_TITLE__ Hero Background"
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
              <span className="text-white uppercase">__PAGE_TITLE_UPPER__</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              __PAGE_TITLE__
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-light max-w-2xl">
              __HERO_DESC__
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#services-grid"
                className="inline-flex items-center justify-center bg-[#00a7e1] hover:bg-[#008dbf] text-white rounded-md px-7 py-3 text-sm font-semibold shadow-lg shadow-[#00a7e1]/30 transition-all hover:scale-105"
              >
                Explore __PAGE_TITLE__ Solutions
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
              __SECTION_TITLE__
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Enterprise-grade cognitive intelligence, data management, and operational security designed to accelerate performance, compliance, and strategic outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-__NUM_COLS__ gap-6 lg:gap-8 max-w-7xl mx-auto">
            {CARDS.map((card) => (
              <HoverCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CUSTOMERS SECTION */}
      {CUSTOMERS.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#F8F9FB] text-slate-900 border-b border-slate-200/80">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#031B3D] mb-3">
              Customers we are proud to work with.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal mb-14 sm:mb-16">
              Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 max-w-5xl mx-auto">
              {CUSTOMERS.map((customer, idx) => (
                <motion.div
                  key={customer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative flex flex-col items-center cursor-pointer"
                >
                  <div className="relative size-28 sm:size-36 md:size-40 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-slate-200/90 flex items-center justify-center p-5 sm:p-7 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_14px_40px_rgba(0,167,225,0.22)] group-hover:border-[#00a7e1]">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={customer.image}
                        alt={customer.name}
                        fill
                        sizes="(max-width: 640px) 112px, 160px"
                        className="object-contain filter contrast-105 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <span className="mt-3.5 text-xs sm:text-sm font-bold text-slate-900 tracking-tight group-hover:text-[#00a7e1] transition-colors text-center">
                    {customer.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}`;

const dataList = [
  {
    __COMPONENT_NAME__: "GrcLayout",
    __PAGE_TITLE__: "GRC",
    __PAGE_TITLE_UPPER__: "GRC",
    __HERO_DESC__: "With complex technological environments, innovations like operational technology (OT), Internet of Things (IoT) and Quantum can leave your enterprise open to third-party security and IT regulatory compliance risks.",
    __HERO_IMAGE__: "/images/Hero/Hero1.png",
    __SECTION_TITLE__: "Our GRC Services",
    __ICON_IMPORTS__: "ProfessionalLeader1, SecurityIllustration",
    __NUM_COLS__: "2",
    __CARDS_DATA__: `  {
    id: "iso-27001",
    title: "ISO 27001",
    badge: "Gap Assessment & Compliance Consultancy",
    illustration: SecurityIllustration,
    impactMetric: { value: "100%", label: "Compliance" },
    bgImage: "/images/services/network-ops.jpg",
    href: "/contact",
    description: "Implementation and conducting an ISO 27001 (Internal) audit enables you to assess your company's security equipment, systems, protocols, policies and procedures to ensure that they are in compliance with industry standards.",
    highlights: ["Internal Audit", "Security Protocols", "Industry Standards"],
  },
  {
    id: "soc-2",
    title: "SOC 2",
    badge: "Gap Assessment & Compliance Consultancy",
    illustration: ProfessionalLeader1,
    impactMetric: { value: "100%", label: "Trust Criteria" },
    bgImage: "/images/services/network-design.jpg",
    href: "/contact",
    description: "SOC 2 is a voluntary compliance standard for service organizations, developed by the American Institute of CPAs (AICPA), which specifies how organizations should manage customer data.",
    highlights: ["Security", "Availability", "Privacy"],
  }`,
    __CUSTOMERS_DATA__: `  {
    name: "MyChart",
    image: "/images/customers/mychart.webp",
  }`
  },
  {
    __COMPONENT_NAME__: "IdentityAccessLayout",
    __PAGE_TITLE__: "Identity & Access",
    __PAGE_TITLE_UPPER__: "IDENTITY & ACCESS",
    __HERO_DESC__: "Our Enterprise Security practice has over 20 years of Identity & Access Management experience, and specializes in IBM Security Verify, IBM Security Identity Manager, and more.",
    __HERO_IMAGE__: "/images/Hero/Hero2.jpg",
    __SECTION_TITLE__: "Our Identity & Access Services",
    __ICON_IMPORTS__: "BusinessStrategyEssentials1, SecurityIllustration",
    __NUM_COLS__: "2",
    __CARDS_DATA__: `  {
    id: "pam",
    title: "Privileged Access Management",
    badge: "Privileged Access",
    illustration: BusinessStrategyEssentials1,
    impactMetric: { value: "24/7", label: "Protection" },
    bgImage: "/images/services/network-ops.jpg",
    href: "/contact",
    description: "SPS can help modernize your privilege account management architecture by leveraging SPS's architecture review and technology update services.",
    highlights: ["Architecture Review", "Technology Update", "Health Check"],
  },
  {
    id: "iam",
    title: "Identity & Access Management",
    badge: "Access Management",
    illustration: SecurityIllustration,
    impactMetric: { value: "100%", label: "Coverage" },
    bgImage: "/images/services/network-design.jpg",
    href: "/contact",
    description: "Modernize your access management architecture by leveraging SPS's architecture review and technology update services.",
    highlights: ["IBM Security Verify", "Okta Access", "Federated Identity"],
  }`,
    __CUSTOMERS_DATA__: `  { name: "Allied Bank", image: "/images/customers/Allied-Bank.webp" },
  { name: "Askari Bank", image: "/images/customers/askari.webp" },
  { name: "Spotsylvania", image: "/images/customers/county-of-spotsylvania.webp" },
  { name: "Indiana", image: "/images/customers/indiana.webp" },
  { name: "MyEyeDr.", image: "/images/customers/myeyedr.webp" },
  { name: "Loudoun County", image: "/images/customers/loudon-county.webp" },
  { name: "Total Vision", image: "/images/customers/total-vision.webp" },
  { name: "UNLV", image: "/images/customers/unlv.webp" },
  { name: "Asplundh", image: "/images/customers/asphlundh.webp" },
  { name: "Telenor", image: "/images/customers/telenor.webp" },
  { name: "Ufone", image: "/images/customers/ufone.webp" }`
  },
  {
    __COMPONENT_NAME__: "ThreatManagementLayout",
    __PAGE_TITLE__: "Threat Management",
    __PAGE_TITLE_UPPER__: "THREAT MANAGEMENT",
    __HERO_DESC__: "Safeguard sensitive assets, proactively protect privileged access, streamline threat response with SOAR, and expose external attack surface vulnerabilities.",
    __HERO_IMAGE__: "/images/Hero/Hero3.png",
    __SECTION_TITLE__: "Our Threat Management Services",
    __ICON_IMPORTS__: "WorkCommunicationIllustration, SecurityIllustration",
    __NUM_COLS__: "2",
    __CARDS_DATA__: `  {
    id: "vapt",
    title: "Vulnerability Assessment and Penetration Testing",
    badge: "Security Assessment",
    illustration: SecurityIllustration,
    impactMetric: { value: "100%", label: "Asset Discovery" },
    bgImage: "/images/services/network-ops.jpg",
    href: "/contact",
    description: "SPS cybersecurity assessment consultants conduct and document a formal Security Assessment, Vulnerability Assessment, Penetration Testing and Configuration Reviews for Information Security Assets.",
    highlights: ["Penetration Testing", "Vulnerability Assessment", "Configuration Review"],
  },
  {
    id: "socaas",
    title: "SOC as a Service",
    badge: "Continuous Threat Monitoring",
    illustration: WorkCommunicationIllustration,
    impactMetric: { value: "24/7", label: "Real-time Detection" },
    bgImage: "/images/services/network-design.jpg",
    href: "/contact",
    description: "Security Operations Center as a Service (SOCaaS) provides continuous threat monitoring, detection, and expert response without the need to build your own SOC.",
    highlights: ["Threat Monitoring", "Expert Response", "Real-time Insights"],
  }`,
    __CUSTOMERS_DATA__: `  { name: "Spotsylvania", image: "/images/customers/county-of-spotsylvania.webp" },
  { name: "Asplundh", image: "/images/customers/asphlundh.webp" }`
  },
  {
    __COMPONENT_NAME__: "DataSecurityLayout",
    __PAGE_TITLE__: "Data Security",
    __PAGE_TITLE_UPPER__: "DATA SECURITY",
    __HERO_DESC__: "Protect critical data environments with architecture reviews, robust deployment strategies, and continuous remote monitoring and management.",
    __HERO_IMAGE__: "/images/Hero/Hero4.jpg",
    __SECTION_TITLE__: "Our Data Security Services",
    __ICON_IMPORTS__: "DigitalTransformation1, DataAnalysisIllustration, SecurityIllustration",
    __NUM_COLS__: "3",
    __CARDS_DATA__: `  {
    id: "arch-review",
    title: "Architecture Review",
    badge: "Data Security",
    illustration: DigitalTransformation1,
    impactMetric: { value: "100%", label: "Optimization" },
    bgImage: "/images/services/network-ops.jpg",
    href: "/contact",
    description: "SPS provides architecture review and technology update on existing Guardium Data Protection, Guardium Data Encryption and Guardium Data Activity Monitoring implementation.",
    highlights: ["Guardium Data Protection", "Technology Update", "IBM Cloud Pak"],
  },
  {
    id: "design-deploy",
    title: "Design & Deployment",
    badge: "Data Security",
    illustration: SecurityIllustration,
    impactMetric: { value: "100%", label: "Implementation" },
    bgImage: "/images/services/network-design.jpg",
    href: "/contact",
    description: "SPS can help customers implement Guardium Data Protection, Data Encryption and Data Activity Monitoring solution and achieve business outcomes using our proven skills and implementation methodology.",
    highlights: ["Proven Methodology", "Data Encryption", "Activity Monitoring"],
  },
  {
    id: "remote-monitoring",
    title: "Remote Monitoring, Management & Support",
    badge: "Data Security",
    illustration: DataAnalysisIllustration,
    impactMetric: { value: "24/7", label: "Monitoring" },
    bgImage: "/images/services/keysight-training.jpg",
    href: "/contact",
    description: "SPS team can provide remote monitoring, management and production support for your Data Security systems and environment.",
    highlights: ["Remote Monitoring", "Production Support", "System Growth"],
  }`,
    __CUSTOMERS_DATA__: ""
  }
];

dataList.forEach(data => {
  let content = template;
  for (const [key, value] of Object.entries(data)) {
    content = content.replace(new RegExp(key, 'g'), value);
  }
  fs.writeFileSync(`src/features/Services/components/layouts/${data.__COMPONENT_NAME__}.tsx`, content);
});
console.log('Created 4 new layouts successfully!');
