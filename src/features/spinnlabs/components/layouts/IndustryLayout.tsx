"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpinnLabDetail } from "@/data/spinnlabs-data";
import { ArrowRight } from "lucide-react";

export default function IndustryLayout({ data }: { data: SpinnLabDetail }) {
  return (
    <main className="w-full bg-white text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 bg-[#02122c]">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-md">
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
                    alt="Industry Hero Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Special Interest Groups Section */}
      {data.outreachSection && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

              {/* Left Column (Text) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 sticky top-32"
              >
                <div className="text-[#00a7e1] text-[10px] font-bold tracking-widest uppercase bg-[#00a7e1]/10 px-3 py-1.5 rounded-full inline-block mb-4">
                  # {data.outreachSection.eyebrow}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#031B3D] mb-6 relative pb-6">
                  {data.outreachSection.heading}
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#031B3D]" />
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {data.outreachSection.description}
                </p>
              </motion.div>

              {/* Right Column (Cards) */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.outreachSection.sigs.map((sig, idx) => {
                    const isFullWidth = idx === 4; // 5th card spans full width
                    return (
                      <motion.div
                        key={sig.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 relative group hover:-translate-y-1 transition-transform ${isFullWidth ? "md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-8" : "flex flex-col h-full"
                          }`}
                      >
                        <div className="absolute top-6 right-6 text-slate-200 text-lg font-bold font-mono select-none">
                          0{idx + 1}
                        </div>

                        <div className={`relative shrink-0 ${isFullWidth ? "size-20 md:size-24" : "size-16 mb-6"}`}>
                          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-[#00a7e1]/20 rounded-full mix-blend-multiply opacity-50 group-hover:scale-110 transition-transform" />
                          {sig.icon ? (
                            <Image src={sig.icon} alt={sig.title} fill className="object-contain p-3 relative z-10" />
                          ) : (
                            <div className="w-full h-full bg-slate-200 rounded-full relative z-10"></div>
                          )}
                        </div>

                        <div className={`flex flex-col ${isFullWidth ? "flex-1 pr-8" : "flex-1"}`}>
                          <h3 className="text-xl font-bold text-[#031B3D] mb-3">{sig.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-sm mb-6">
                            {sig.description}
                          </p>
                          <a href={sig.href} className={`text-[#00a7e1] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all ${isFullWidth ? "mt-0" : "mt-auto"} w-fit`}>
                            Explore <ArrowRight className="size-4" />
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

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

      {/* Note: Industry does not have the Clients Section in this design */}
    </main>
  );
}

