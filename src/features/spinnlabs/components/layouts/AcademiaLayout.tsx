"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpinnLabDetail } from "@/data/spinnlabs-data";
import { ArrowRight } from "lucide-react";

export default function AcademiaLayout({ data }: { data: SpinnLabDetail }) {
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
                    alt="Academia Hero Image"
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
                className="lg:col-span-4"
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
                  {data.outreachSection.sigs.map((sig, idx) => (
                    <motion.div
                      key={sig.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-transparent hover:border-[#00a7e1]/20 hover:shadow-[0_20px_40px_rgba(0,167,225,0.12)] relative group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden"
                    >
                      {/* Optional subtle gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00a7e1]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon Circle */}
                        <div className="bg-[#00a7e1]/10 group-hover:bg-[#00a7e1] w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                          {sig.icon ? (
                            <Image src={sig.icon} alt={sig.title} width={24} height={24} className="object-contain filter group-hover:brightness-0 group-hover:invert transition-all" />
                          ) : (
                            <div className="w-6 h-6 bg-[#00a7e1] group-hover:bg-white rounded-sm transition-colors duration-300" />
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-[#031B3D] mb-4 group-hover:text-[#00a7e1] transition-colors duration-300">{sig.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-sm flex-1 mb-8">
                          {sig.description}
                        </p>

                        {/* Read More Footer */}
                        <div className="flex items-center gap-3 mt-auto">
                          <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#00a7e1] transition-colors duration-300">
                            <span className="text-lg font-light leading-none mb-0.5">+</span>
                          </div>
                          <a href={sig.href} className="text-sm font-bold text-slate-900 group-hover:text-[#00a7e1] transition-colors duration-300">
                            Read More
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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

      {/* 3. CUSTOMERS SECTION (CIRCULAR BADGES STYLE) */}
      {data.clientsSection && data.clientsSection.clients && (
        <section className="py-20 sm:py-28 bg-[#F8F9FB] text-slate-900 border-t border-slate-200/80">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00a7e1]/10 text-[#00a7e1] border border-[#00a7e1]/20 mb-4">
              Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#031B3D] mb-3">
              {data.clientsSection.heading || "Customers we are proud to work with."}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal mb-14 sm:mb-16">
              {data.clientsSection.subheading || "Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients."}
            </p>

            {/* Circular Customer Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 max-w-5xl mx-auto">
              {data.clientsSection.clients.map((customer, idx) => (
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
                        className="object-contain filter transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Customer Brand Name */}
                  <span className="mt-4 text-sm font-bold text-slate-900 tracking-tight group-hover:text-[#00a7e1] transition-colors text-center">
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
}

