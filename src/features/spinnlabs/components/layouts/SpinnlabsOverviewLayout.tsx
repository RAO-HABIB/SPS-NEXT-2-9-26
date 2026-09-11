"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SpinnLabDetail } from "@/data/spinnlabs-data";
import { ArrowRight, CheckCircle2, Clock, Calendar, Lightbulb } from "lucide-react";

interface Props {
  data: SpinnLabDetail;
}

export default function SpinnlabsOverviewLayout({ data }: Props) {
  return (
    <main className="w-full bg-[#FAFAFA] text-slate-900 overflow-hidden">
      {/* Hero Section — BMS style dark hero */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 bg-[#02122c] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/Hero8.webp"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-fit object-center"
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
              <div className="bg-[#00a7e1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-6 shadow-lg shadow-[#00a7e1]/30">
                # SPINN LABS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {data.hero.title}
              </h1>
              <p className="text-base md:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
                {data.hero.description}
              </p>
            </motion.div>

            {data.hero.collageImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[300px] lg:h-[350px] w-full max-w-lg ml-auto"
              >
                <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <Image
                    src={data.hero.collageImage}
                    alt="SPINN Labs Collage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Text Image Blocks (Enterprise Advanced Track) - Framer Testimonial Style */}
      <section className="py-20 md:py-28 relative -mt-16 z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-12">
          {data.textImageBlocks && data.textImageBlocks.map((block, idx) => {
            const isFirst = idx === 0;
            return (
              <motion.div
                key={block.id}
                initial="rest"
                whileInView="rest"
                whileHover="hover"
                viewport={{ once: true }}
                className={`group bg-[#F8F9FB] rounded-[2rem] p-2 flex flex-col md:flex-row gap-2 transition-all duration-500 overflow-hidden relative shadow-lg ${isFirst ? 'border-2 border-[#00a7e1]' : 'border border-slate-200'} md:h-[500px] w-full`}
              >
                {/* Content Side */}
                <motion.div
                  variants={{
                    rest: { flex: 1.2 },
                    hover: { flex: 1.6 }
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  className={`bg-white rounded-[1.5rem] p-8 lg:p-12 border border-slate-100 flex flex-col justify-center shadow-sm relative overflow-hidden w-full md:w-auto h-auto md:h-full order-2 ${block.reverse ? 'md:order-2' : 'md:order-1'}`}
                >
                  <div className="max-w-xl mx-auto w-full">
                    {/* Top Pill */}
                    <div className="bg-[#F8F9FB] rounded-xl px-4 py-2 flex items-center gap-3 w-fit text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                      COURSE SPECIALIZATION
                    </div>

                    {/* Title */}
                    <motion.h3
                      className={`text-2xl md:text-3xl lg:text-4xl font-black mb-4 ${isFirst ? 'text-[#00a7e1]' : 'text-[#031B3D]'}`}
                    >
                      {block.title || "Enterprise Advanced Track"}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed mb-8 font-medium">
                      {block.text}
                    </p>

                    {/* Meta Info Columns */}
                    <div className="flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-12 mb-8 border-t border-slate-100 pt-6">
                      {/* Duration */}
                      <div className="flex items-center gap-4">
                        <div className="bg-[#F8F9FB] size-10 rounded-xl flex items-center justify-center shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a7e1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                            DURATION
                          </div>
                          <div className="text-sm font-extrabold text-[#031B3D]">
                            {block.duration || "Self-Paced Learning"}
                          </div>
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="flex items-center gap-4">
                        <div className="bg-[#F8F9FB] size-10 rounded-xl flex items-center justify-center shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a7e1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                            SCHEDULE TIERS
                          </div>
                          <div className="text-sm font-extrabold text-[#031B3D]">
                            {block.schedule || "Upcoming Deployment"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <a href={block.ctaLink || "#"} className="inline-flex items-center justify-center gap-3 bg-[#031B3D] text-white px-7 py-3.5 rounded-xl text-sm font-bold tracking-wide hover:bg-[#02122c] transition-colors shadow-md w-full sm:w-auto">
                      Enroll Now & Validate Paths
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  variants={{
                    rest: { flex: 1.5 },
                    hover: { flex: 1.1 }
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  className={`relative w-full h-[300px] md:h-full rounded-[1.5rem] overflow-hidden shadow-sm order-1 ${block.reverse ? 'md:order-1' : 'md:order-2'}`}
                >
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Tech Hub Banner */}
      {data.techHubBanner && (
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/Hero/Hero3.webp"
              alt="Tech Hub Background"
              fill
              sizes="100vw"
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Banner */}
      {data.statsBanner && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full max-w-md aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-white">
                  <Image
                    src="/images/spinnlabs/3.png"
                    alt="Spinnlabs Overview"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>

              {data.statsBanner.highlight && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-red-700 rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 backdrop-blur-sm border border-white/20 shadow-lg">
                      <Lightbulb className="size-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                      {data.statsBanner.highlight.title}
                    </h2>
                    <p className="text-white/90 text-lg leading-relaxed font-light mb-8">
                      {data.statsBanner.highlight.description}
                    </p>
                    <button className="bg-white text-red-700 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
                      Learn More <ArrowRight className="size-5" />
                    </button>
                  </div>
                </motion.div>
              )}
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