"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BusinessStrategyEssentials1,
  WorkCommunicationIllustration,
  ProfessionalLeader1,
} from "@/components/ui/illustrations";

interface SmaasCardItem {
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

const SMAAS_CARDS: SmaasCardItem[] = [
  {
    id: 'sec-policy-mgmt',
    title: 'Sec Policy Mgmt as a Service',
    badge: 'Security Policy Management',
    illustration: BusinessStrategyEssentials1,
    impactMetric: { value: '24/7', label: 'Enforcement' },
    bgImage: '/images/services/network-ops.jpg',
    href: '/services/cybersecurity/network-security/network-visibility-ops',
    description: 'Security Policy Management as a Service (Sec Policy Mgmt) offers cloud-based solutions to streamline the creation, enforcement, and monitoring of security policies across diverse environments.',
    highlights: ['Cloud-based Solutions', 'Policy Creation', 'Monitoring'],
  },
  {
    id: 'smjs',
    title: 'SMJS',
    badge: 'Security Management Jump Start',
    illustration: ProfessionalLeader1,
    impactMetric: { value: '100%', label: 'Assessment' },
    bgImage: '/images/services/network-design.jpg',
    href: '/services/cybersecurity/network-security/network-visibility-ops',
    description: 'This is a pre-requisite to Security Management as a Service. Using the NIST cybersecurity framework, we meet with the enterprise stakeholders to assess the state of security management in your organization, establish a baseline and formulate a framework to roll out Security Management as a Service.',
    highlights: ['NIST Framework', 'Stakeholder Assessment', 'Baseline Establishment'],
  },
  {
    id: 'smaas-service',
    title: 'SMaaS',
    badge: 'Security Management as a Service',
    illustration: WorkCommunicationIllustration,
    impactMetric: { value: '24/7', label: 'Management' },
    bgImage: '/images/services/keysight-training.jpg',
    href: '/services/cybersecurity/network-security/network-visibility-ops',
    description: 'Our Security Management as a Service is a customized program that optimally integrates decades of our cybersecurity expertise and strategic processes into your team. It is designed to help you MANAGE security of your organization based on the NIST cybersecurity framework (CSF).',
    highlights: ['Customized Program', 'Strategic Processes', 'NIST CSF Based'],
  },
];

const FEATURED_CUSTOMERS = [
  {
    name: 'Total Vision',
    role: 'Eyecare Professionals',
    image: '/images/customers/total-vision.webp',
  },
];

function SmaasHoverCard({ card }: { card: SmaasCardItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const IllustrationComp = card.illustration;

  return (
    <Link
      href={card.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] sm:rounded-[24px] cursor-pointer select-none border border-slate-200/80 hover:border-cyan-400/50 bg-[#03132e] shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/15 min-h-[470px] sm:min-h-[510px] w-full block"
    >
      {/* 1. Ambient Background Image with Deep Gradient */}
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

      {/* 2. Deep Gradient Mask */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#061838]/85 via-[#031026]/90 to-[#020a1a] pointer-events-none" />

      {/* 3. Top Floating Metric Pill */}
      <div className="relative top-4 right-4 z-20 flex items-center justify-end pointer-events-none px-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md bg-slate-900/80 text-white border border-white/20 shadow-lg">
          {card.impactMetric.value} {card.impactMetric.label}
        </span>
      </div>

      {/* 4. Center Glowing Vector Illustration */}
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

      {/* 5. Framer Glassmorphism Bottom Information Overlay */}
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
          {/* Card Header: Role Tag + Title & 180° Rotating Arrow Button */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase text-white mb-2 bg-white/10 backdrop-blur-md whitespace-nowrap shrink-0 max-w-full">
                {card.badge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h3>
            </div>

            {/* Framer 180° Rotating Arrow Button */}
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

          {/* Revealable Content on Hover */}
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

                {/* Highlights Pills */}
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

                {/* Bottom CTA */}
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

export default function SmaasLayout() {
  return (
    <main className="w-full min-h-screen bg-[#F8F9FB]">
      {/* 1. HERO SECTION - MATCHING IBM HERO DESIGN */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/Hero4.jpg"
            alt="SMaaS Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#031B3D]/75 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link href="/services" className="hover:text-white transition-colors">
                SERVICES
              </Link>
              <span>›</span>
              <Link
                href="/services/cybersecurity"
                className="hover:text-white transition-colors"
              >
                CYBERSECURITY
              </Link>
              <span>›</span>
              <span className="text-white">SMAAS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              SMaaS
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-light max-w-2xl">
              Security Management as a Service designed to optimally integrate cybersecurity expertise and strategic processes into your organization based on the NIST cybersecurity framework.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-[#00a7e1] hover:bg-[#008dbf] text-white rounded-md px-7 py-3 text-sm font-semibold shadow-lg shadow-[#00a7e1]/30 transition-all hover:scale-105"
                onClick={() => {
                  const element = document.getElementById("services-grid");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore SMaaS Solutions
              </Button>
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
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00a7e1]/10 text-[#00a7e1] border border-[#00a7e1]/20 mb-4">
              <Sparkles className="size-3.5" />
              SPS Cybersecurity Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031B3D] tracking-tight mb-4">
              Our SMaaS Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Comprehensive security policy management, jump-start programs, and customized management frameworks for enterprise resilience.
            </p>
          </div>

          {/* Cards Grid: 3-column layout exactly matching IBM automation cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {SMAAS_CARDS.map((card) => (
              <SmaasHoverCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CUSTOMERS SECTION (5 CIRCLES AS REQUESTED) */}
      <section className="py-20 sm:py-28 bg-[#F8F9FB] text-slate-900 border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#031B3D] mb-3">
            Customers we are proud to work with.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal mb-14 sm:mb-16">
            Our mission is to deliver compelling narratives, remarkable experiences, and outstanding
            results for our clients.
          </p>

          {/* 5 Circular Customer Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 max-w-5xl mx-auto">
            {FEATURED_CUSTOMERS.map((customer, idx) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                {/* Circular Container */}
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

                {/* Customer Brand Name */}
                <span className="mt-3.5 text-xs sm:text-sm font-bold text-slate-900 tracking-tight group-hover:text-[#00a7e1] transition-colors text-center">
                  {customer.name}
                </span>
                {/* Role / Category */}
                <span className="text-[10px] sm:text-xs text-slate-500 text-center font-medium">
                  {customer.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
