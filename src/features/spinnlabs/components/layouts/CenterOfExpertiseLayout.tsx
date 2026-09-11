"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpinnLabDetail } from "@/data/spinnlabs-data";
import { ArrowRight, UserPlus } from "lucide-react";

export default function CenterOfExpertiseLayout({ data }: { data: SpinnLabDetail }) {
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
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-lg mb-8">
                {data.hero.description}
              </p>
              <button className="bg-[#00a7e1] hover:bg-[#0090c1] text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors flex items-center gap-2">
                <UserPlus className="size-4" /> Join Us
              </button>
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
                    alt="Center of Expertise Hero Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      {data.expertiseSection && (
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left Column (Text List) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-[2px] bg-[#00a7e1]" />
                  <span className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase">
                    {data.expertiseSection.eyebrow}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#031B3D] mb-12">
                  {data.expertiseSection.heading}
                </h2>

                <div className="flex flex-col space-y-6">
                  {data.expertiseSection.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group relative pl-6 md:pl-8 py-2 transition-all duration-300"
                    >
                      {/* Left Hover Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200 group-hover:bg-[#00a7e1] transition-colors duration-300" />

                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="text-slate-300 group-hover:text-[#00a7e1] transition-colors duration-300 shrink-0 mt-1">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#031B3D] mb-2">{feature.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-sm max-w-xl">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column (Collage) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="flex flex-col gap-4 relative">
                  {/* Cyan dot decoration */}
                  <div className="absolute -left-3 -top-3 w-6 h-6 bg-[#00a7e1] rounded-full z-10 hidden lg:block border-2 border-white shadow-sm" />

                  {/* Top Image (Large, wide) */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src="/images/spinnlabs/5.jpg"
                      alt="Expertise 1"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Bottom Row (Two Images staggered) */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src="/images/products/product.webp"
                        alt="Expertise 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-full aspect-square mt-auto rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src="/images/products/products.webp"
                        alt="Expertise 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* How to Join CTA Banner */}
      {data.expertiseSection && (
        <section className="py-20 pb-32 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#00a7e1] to-[#2563eb] rounded-[2rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle texture/glow inside the banner */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[2px] bg-white" />
                    <span className="text-white text-xs font-bold tracking-widest uppercase">
                      GET STARTED
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    {data.expertiseSection.joinTitle}
                  </h2>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base max-w-2xl font-medium">
                    {data.expertiseSection.joinDescription}
                  </p>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <a
                    href={data.expertiseSection.joinCta.href}
                    className="bg-white hover:bg-slate-50 text-[#00a7e1] px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2 shadow-lg"
                  >
                    {data.expertiseSection.joinCta.label} <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
