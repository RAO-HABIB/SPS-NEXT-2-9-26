"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon as IconifyIcon } from "@iconify-icon/react";
import { motion, AnimatePresence } from "framer-motion";

const BMS_FEATURES = [
  {
    id: "core",
    icon: "lucide:cpu",
    title: "Core Business Engine",
    description: "The central nervous system for your enterprise operations, handling complex data routing with zero latency.",
    image: "/images/placeholder.webp",
    codeSnippet: `// Initialize Core Engine
const bms = new SPSCore({
  latency: 'zero',
  routing: 'dynamic',
  security: 'quantum-safe'
});

await bms.ignite();`,
  },
  {
    id: "automation",
    icon: "lucide:bot",
    title: "Cognitive Automation",
    description: "Automate repetitive tasks with AI that learns from your team's behavior and optimizes workflows autonomously.",
    image: "/images/placeholder.webp",
    codeSnippet: `// Deploy Automation Agent
const agent = bms.spawnAgent('workflow-optimizer');

agent.on('task', (data) => {
  return AI.process(data).optimize();
});`,
  },
  {
    id: "analytics",
    icon: "lucide:bar-chart-3",
    title: "Predictive Analytics",
    description: "Turn raw data into actionable foresight. Forecast trends before they happen with our advanced ML models.",
    image: "/images/placeholder.webp",
    codeSnippet: `// Forecast Trends
const forecast = await bms.analytics.predict({
  dataset: 'q3-revenue',
  horizon: '6-months',
  confidence: 0.99
});

console.log(forecast);`,
  },
  {
    id: "security",
    icon: "lucide:shield-check",
    title: "Zero-Trust Architecture",
    description: "Every request, every time. Complete visibility and control over your enterprise security posture.",
    image: "/images/placeholder.webp",
    codeSnippet: `// Enforce Zero-Trust
bms.security.enforce({
  policy: 'strict',
  auth: 'mfa-required',
  encryption: 'AES-256-GCM'
});`,
  }
];

export default function BmsFeaturesInteractive() {
  const [activeFeatureId, setActiveFeatureId] = useState(BMS_FEATURES[0].id);

  const activeFeature = BMS_FEATURES.find(f => f.id === activeFeatureId) || BMS_FEATURES[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Enterprise Intelligence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Automated</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Experience the next generation of business management. Modular, scalable, and built for the future.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3">
          {BMS_FEATURES.map((feature) => {
            const isActive = feature.id === activeFeatureId;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeatureId(feature.id)}
                className={`flex flex-col text-left p-6 rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? "bg-[#0A2540] border-blue-500/30 shadow-lg shadow-blue-900/20"
                    : "bg-[#031B3D]/50 border-white/5 hover:bg-[#031B3D] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-2 rounded-lg ${isActive ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-slate-400"}`}>
                    <IconifyIcon icon={feature.icon} width={24} />
                  </div>
                  <h3 className={`font-bold text-lg ${isActive ? "text-white" : "text-slate-300"}`}>
                    {feature.title}
                  </h3>
                </div>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-slate-400 text-sm mt-2 leading-relaxed pl-14"
                  >
                    {feature.description}
                  </motion.p>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:w-2/3">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-square xl:aspect-[16/10] rounded-3xl bg-[#03152E] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-8">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl relative z-10 flex flex-col items-center"
              >
                {/* 3D Illustration Placeholder */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8 transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={activeFeature.image} 
                    alt={activeFeature.title}
                    fill
                    sizes="(max-width: 640px) 192px, 256px"
                    className="object-contain filter drop-shadow-2xl"
                  />
                </div>

                {/* Code Window */}
                <div className="w-full bg-[#010C1A] border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-500">bms-{activeFeature.id}.ts</span>
                  </div>
                  <div className="p-4 sm:p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-emerald-400 leading-relaxed">
                      <code>{activeFeature.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
