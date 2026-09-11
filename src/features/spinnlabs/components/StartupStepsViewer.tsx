"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { startupStepsData } from "@/data/spinnlabs-data";
import { Lightbulb, FileEdit, PieChart, PenTool, PlayCircle, Rocket } from "lucide-react";

export default function StartupStepsViewer() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = startupStepsData[activeStep];

  const icons = [Lightbulb, FileEdit, PieChart, PenTool, PlayCircle, Rocket];

  return (
    <div className="w-full bg-[#02122c] py-20 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-12 hide-scrollbar snap-x gap-4 justify-start lg:justify-center">
          {startupStepsData.map((step, idx) => {
            const Icon = icons[idx];
            const isActive = activeStep === idx;
            return (
              <button
                key={step.slug}
                onClick={() => setActiveStep(idx)}
                className={`snap-center shrink-0 flex flex-col items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 relative ${
                  isActive ? "bg-[#00a7e1] shadow-[0_0_20px_rgba(0,167,225,0.4)]" : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <Icon className={`size-6 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span className={`text-sm font-semibold whitespace-nowrap tracking-wide ${isActive ? "text-white" : "text-slate-400"}`}>
                  {step.hero.title}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-[#00a7e1]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Viewer */}
        <div className="bg-[#0a1930] rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl overflow-hidden relative min-h-[400px]">
          {/* Abstract glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00a7e1]/20 rounded-full blur-[80px] pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#00a7e1] text-xs font-mono font-bold tracking-widest uppercase bg-[#00a7e1]/10 px-3 py-1 rounded-full">
                  Step 0{activeStep + 1}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                {currentStep.hero.title}
              </h2>
              <p className="text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
                {currentStep.hero.description}
              </p>

              {/* Placeholder for specific phase complex UI if needed */}
              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-sm text-slate-400 font-mono">
                  {'>'} {currentStep.metaDescription}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
