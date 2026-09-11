"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SpinnLabDetail } from "@/data/spinnlabs-data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Verticals from "@/features/Verticals/verticals";
import CreatePlanView from "@/features/spinnlabs/components/steps/CreatePlanView";
import EquityModelView from "@/features/spinnlabs/components/steps/EquityModelView";
import SignAgreementView from "@/features/spinnlabs/components/steps/SignAgreementView";
import ExecutePlanView from "@/features/spinnlabs/components/steps/ExecutePlanView";
import LaunchStartupView from "@/features/spinnlabs/components/steps/LaunchStartupView";
import ProposeIdeaForm from "../steps/ProposeIdeaForm";
// Simple mapping for the known icons
const icons: Record<string, any> = {
  lightbulb: dynamic(() => import("lucide-react").then((mod) => mod.Lightbulb)),
  "file-edit": dynamic(() => import("lucide-react").then((mod) => mod.FileEdit)),
  "pie-chart": dynamic(() => import("lucide-react").then((mod) => mod.PieChart)),
  "file-signature": dynamic(() => import("lucide-react").then((mod) => mod.FileSignature)),
  "play-circle": dynamic(() => import("lucide-react").then((mod) => mod.PlayCircle)),
  rocket: dynamic(() => import("lucide-react").then((mod) => mod.Rocket)),
};

// Helper to dynamically load lucide icons from strings
const IconLoader = ({ name, className }: { name: string, className?: string }) => {
  const iconName = name.replace("lucide:", "");
  const Icon = icons[iconName];
  if (!Icon) return null;
  return <Icon className={className} />;
};

export default function StartupsLayout({ data }: { data: SpinnLabDetail }) {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  // We type cast any missing properties we added
  const customData = data as any;
  const industrySolutions = customData.industrySolutions;

  return (
    <main className="w-full bg-white text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-8 md:pt-40 md:pb-12 bg-[#02122c]">
        <div className="absolute inset-0">
          <Image
            src={data.hero.backgroundImage || "/images/Hero/Hero8.webp"}
            alt="Hero Background"
            fill
            className="object-fit opacity-80 mix-blend-screen"
            priority
          />
          {/* BMS-style dark navy overlay */}
          <div className="absolute inset-0 bg-[#031B3D]/70 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white text-[#00a7e1] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-6 shadow-md">
                # SPINN LABS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-lg">
                {data.hero.description}
              </p>
            </motion.div>

            {data.hero.collageImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[250px] lg:h-[300px] w-full max-w-lg ml-auto"
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <Image
                    src={data.hero.collageImage}
                    alt="Startups Hero Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>



      {data.hero.heroSteps && (
        <section className="relative z-40 w-full -mt-6 sm:-mt-8 px-3 sm:px-6 lg:px-8">
          <div className="mx-auto flex justify-center max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-full p-2 flex flex-wrap justify-center items-center gap-1 shadow-[0_16px_40px_-10px_rgba(3,27,61,0.12),0_4px_16px_rgba(0,0,0,0.04)] max-w-fit w-full"
            >
              {data.hero.heroSteps.map((step: any, idx: number) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(isActive ? null : idx)}
                    className={`group flex items-center gap-3 cursor-pointer px-5 py-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-[#031B3D] shadow-md text-white' : 'hover:bg-slate-100/90 text-slate-600 hover:text-slate-900'}`}
                  >
                    <div className={`size-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600 group-hover:text-[#0057B8] group-hover:bg-[#0057B8]/10'}`}>
                      <IconLoader name={step.icon} className="size-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {activeTab !== null ? (
        <section className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {activeTab === 0 && <ProposeIdeaForm />}
              {activeTab === 1 && <CreatePlanView />}
              {activeTab === 2 && <EquityModelView />}
              {activeTab === 3 && <SignAgreementView />}
              {activeTab === 4 && <ExecutePlanView />}
              {activeTab === 5 && <LaunchStartupView />}
            </motion.div>
          </AnimatePresence>
        </section>
      ) : (
        <>
          {/* The Process Section */}
          {data.journeySection && (
            <section className="py-24 bg-white relative">
              <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-8 h-[2px] bg-[#00a7e1]" />
                    <span className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase">
                      {data.journeySection.eyebrow}
                    </span>
                    <div className="w-8 h-[2px] bg-[#00a7e1]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#031B3D] mb-6">
                    {data.journeySection.heading}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {data.journeySection.subheading}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.journeySection.steps.map((step, idx) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.06)] border-2 border-transparent hover:border-[#00a7e1]/20 hover:shadow-[0_20px_40px_rgba(0,167,225,0.12)] relative group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden cursor-pointer"
                      onClick={() => setActiveTab(idx)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00a7e1]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="bg-[#00a7e1]/10 group-hover:bg-[#00a7e1] w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 text-[#00a7e1] group-hover:text-white">
                          <IconLoader name={step.icon} className="size-6 transition-colors duration-300" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#031B3D] mb-4 group-hover:text-[#00a7e1] transition-colors duration-300">{step.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-sm flex-1 mb-8">
                          {step.description}
                        </p>

                        <div className="flex items-center gap-3 mt-auto">
                          <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#00a7e1] transition-colors duration-300">
                            <span className="text-lg font-light leading-none mb-0.5">+</span>
                          </div>
                          <span className="text-sm font-bold text-slate-900 group-hover:text-[#00a7e1] transition-colors duration-300 cursor-pointer">
                            Read More
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <Verticals />

          {/* Technologies Section */}
          {data.technologiesSection && (
            <section className="py-24 bg-white">
              <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-8 h-[2px] bg-[#00a7e1]" />
                    <span className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase">
                      {data.technologiesSection.eyebrow}
                    </span>
                    <div className="w-8 h-[2px] bg-[#00a7e1]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#031B3D] mb-6">
                    {data.technologiesSection.heading}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {data.technologiesSection.subheading}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.technologiesSection.technologies.map((tech, idx) => (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.06)] border-2 border-transparent hover:border-[#00a7e1]/20 hover:shadow-[0_20px_40px_rgba(0,167,225,0.12)] relative group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00a7e1]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="bg-[#00a7e1]/10 group-hover:bg-[#00a7e1] w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                          {tech.icon ? (
                            <Image src={tech.icon} alt={tech.title} width={24} height={24} className="object-contain filter group-hover:brightness-0 group-hover:invert transition-all" />
                          ) : (
                            <div className="w-6 h-6 bg-[#00a7e1] group-hover:bg-white rounded-sm transition-colors duration-300" />
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-[#031B3D] mb-4 group-hover:text-[#00a7e1] transition-colors duration-300">{tech.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-sm flex-1 mb-8">
                          {tech.description}
                        </p>

                        <div className="flex items-center gap-3 mt-auto">
                          <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#00a7e1] transition-colors duration-300">
                            <span className="text-lg font-light leading-none mb-0.5">+</span>
                          </div>
                          <span className="text-sm font-bold text-slate-900 group-hover:text-[#00a7e1] transition-colors duration-300 cursor-pointer">
                            Read More
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Tech Hub Banner */}
          {data.techHubBanner && (
            <section className="py-24 bg-black relative overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                <Image
                  src="/images/Hero/Hero3.webp"
                  alt="Tech Hub Background"
                  fill
                  className="object-cover mix-blend-screen"
                />
              </div>
              <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="w-full lg:w-[45%]">
                    <div className="flex items-center bg-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest w-fit mb-6 border border-white/20 backdrop-blur-sm shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00a7e1] mr-2" />
                      SPINNLABS
                    </div>
                    <div className="relative pb-5 mb-2 inline-block">
                      <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-white leading-tight">
                        {data.techHubBanner.tagline}
                      </h2>
                      <div className="absolute bottom-0 left-0 w-16 h-1 bg-[#00a7e1]" />
                    </div>
                  </div>
                  <div className="w-full lg:w-[55%]">
                    <div className="relative h-[280px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-white/10">
                      <Image
                        src={data.techHubBanner.collageImage}
                        alt={data.techHubBanner.collageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
