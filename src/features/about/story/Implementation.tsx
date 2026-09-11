'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutData } from "@/data/about-data";

interface StepDetail {
  points: string[];
}

const STEP_DETAILS: StepDetail[] = [
  {
    points: [
      "Submit your project vision and business challenge requirements.",
      "Schedule a dedicated discovery consultation with our senior solutions architects.",
      "Conduct in-depth technical viability, feasibility, and risk assessments.",
      "Define measurable project objectives, target KPIs, and success criteria.",
      "Receive a structured scope definition and strategic technology roadmap.",
    ],
  },
  {
    points: [
      "Audit existing legacy infrastructure, database schemas, and external APIs.",
      "Architect cloud-native solution blueprints with security-first foundations.",
      "Perform technical planning and select modern tech stacks (Next.js, Cloud, AI).",
      "Map out sprint backlogs, dependencies, and milestone delivery estimates.",
      "Finalize transparent project timelines and dedicated engineering allocations.",
    ],
  },
  {
    points: [
      "Craft interactive user journeys, wireframes, and UX flow diagrams.",
      "Design high-fidelity design systems and responsive component libraries in Figma.",
      "Build clickable interactive prototypes for direct stakeholder feedback.",
      "Validate usability metrics and refine user experience before writing code.",
      "Approve finalized design specifications and production-ready component assets.",
    ],
  },
  {
    points: [
      "Bootstrap scalable backend architecture with clean API integrations.",
      "Develop rapid, high-performance web and mobile frontend interfaces.",
      "Establish automated CI/CD deployment pipelines and automated test suites.",
      "Deliver functional feature increments with bi-weekly progress demonstrations.",
      "Release fully working MVP version for real user evaluation and market feedback.",
    ],
  },
  {
    points: [
      "Execute iterative sprint cycles with daily standups and transparent boards.",
      "Implement rapid feedback integration and feature priority adjustments.",
      "Perform rigorous automated unit, regression, and cross-browser QA testing.",
      "Maintain active stakeholder communication through bi-weekly milestone reviews.",
      "Deliver stable, production-ready release candidates on schedule.",
    ],
  },
  {
    points: [
      "Enforce multi-tier peer code reviews and automated static code analysis.",
      "Execute automated performance tuning, load testing, and database optimization.",
      "Implement enterprise-grade cybersecurity controls, encryption, and compliance.",
      "Deploy containerized microservices across secure AWS, Azure, or IBM Cloud setups.",
      "Ensure 99.99% system resilience, fault tolerance, and automated disaster recovery.",
    ],
  },
  {
    points: [
      "Coordinate smooth zero-downtime production deployment and DNS handover.",
      "Activate 24/7 real-time telemetry, error monitoring, and performance alerts.",
      "Provide comprehensive technical documentation, API specs, and team training.",
      "Deliver dedicated SLA maintenance, security updates, and bug resolutions.",
      "Partner continuously for post-launch scaling and feature innovation roadmap.",
    ],
  },
];

export default function Process() {
  const { process } = aboutData;
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = process.steps[activeStep] || process.steps[0];
  const currentDetails = STEP_DETAILS[activeStep] || STEP_DETAILS[0];

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32 font-sans antialiased text-white"

    >
      {/* Background Subtle Tech Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1BA6C7]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Dark Frame Container */}
        <div
          className="relative rounded-[32px] md:rounded-[40px] border border-white/15 p-7 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
          style={{ backgroundColor: "#0c1527" }}
        >
          {/* Ambient Purple & Cyan Glow behind Card Stack */}
          <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] rounded-full bg-purple-600/30 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-[#1BA6C7]/20 blur-[100px] pointer-events-none" />

          {/* Top Header Row */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 md:mb-16">
            {/* Left Header */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#0a1b3d] font-black text-xs tracking-[0.2em] uppercase mb-4 shadow-md">
                PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] max-w-xl drop-shadow-sm">
                Your Journey from Problem Idea to Enterprise Scale
              </h2>
            </div>

            {/* Right Header Description */}
            <div className="max-w-md lg:text-right">
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                {process.description}
              </p>
            </div>
          </div>

          {/* Two-Column Interactive Body */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Numbered Step List with Vertical Indicator Bars */}
            <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6">
              {process.steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none transition-all duration-300"
                  >
                    {/* Step Title & Short Description */}
                    <div className="pr-4 sm:pr-6">
                      <h3
                        className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${isActive
                          ? 'text-white'
                          : 'text-slate-400 group-hover:text-slate-200'
                          }`}
                      >
                        {index + 1}. {step.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed mt-1 transition-colors duration-300 max-w-md ${isActive
                          ? 'text-slate-300'
                          : 'text-slate-500 group-hover:text-slate-400'
                          }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Vertical Glowing Indicator Bar */}
                    <div className="shrink-0 flex items-center justify-center pl-2">
                      <div
                        className={`w-1 rounded-full transition-all duration-300 ${isActive
                          ? 'h-14 bg-[#1BA6C7] shadow-[0_0_16px_rgba(27,166,199,0.9)]'
                          : 'h-9 bg-white/20 group-hover:bg-white/40'
                          }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: 3D Stacked White Paper Card Deck */}
            <div className="lg:col-span-6 flex items-center justify-center relative py-6">
              <div className="relative w-full max-w-[440px]">
                {/* Layer 2: Backmost Paper Card (Tilted 7deg) */}
                <div
                  className="absolute inset-0 bg-white/70 rounded-3xl transform rotate-[7deg] translate-x-4 translate-y-3 shadow-lg pointer-events-none border border-black/5"
                  aria-hidden="true"
                />

                {/* Layer 1: Middle Paper Card (Tilted 3.5deg) */}
                <div
                  className="absolute inset-0 bg-white/90 rounded-3xl transform rotate-[3.5deg] translate-x-2 translate-y-1.5 shadow-xl pointer-events-none border border-black/5"
                  aria-hidden="true"
                />

                {/* Front Active Paper Card */}
                <div className="relative bg-white rounded-3xl p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-slate-200/80">
                  {/* Card Header */}
                  <div className="text-center mb-6 pb-4 border-b border-black">
                    <h4 className=" text-md font-semibold sm:text-base tracking-[0.2em] text-black uppercase">
                      HOW IT WORKS
                    </h4>
                  </div>

                  {/* Animated Execution Checklist (5 Points) */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      {currentDetails.points.map((point, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-3.5">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-[#0a1b3d] text-white text-xs font-black flex items-center justify-center shadow-sm">
                            {pIndex + 1}
                          </span>
                          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                            {point}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  {/* Card Bottom Progress Footer */}
                  <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                    <span>SPS Delivery Methodology</span>
                    <span className="font-mono font-bold text-[#1BA6C7]">
                      0{activeStep + 1} / 0{process.steps.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}