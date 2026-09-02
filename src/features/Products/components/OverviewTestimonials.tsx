"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Kenneth Fong",
    role: "AI Developer",
    image: "/images/products/azalio.webp",
    avatar: "/images/avatar/small/avatar1.webp",
    title: "Outstanding AI Performance",
    quote: "Our AI engine improved processing speeds by 200%, allowing teams to automate workflows, detect threats faster, and scale cloud workloads effortlessly."
  },
  {
    id: 2,
    name: "Sarah Liu",
    role: "Cloud Architect",
    image: "/images/products/csm.webp",
    avatar: "/images/avatar/small/avatar2.webp",
    title: "Cloud Scalability",
    quote: "By shifting to our cloud-native framework, their organization reduced infrastructure costs by 40% and achieved near-zero downtime performance."
  },
  {
    id: 3,
    name: "Farhan Akmal",
    role: "Cybersecurity Analyst",
    image: "/images/products/bms.webp",
    avatar: "/images/avatar/small/avatar3.webp",
    title: "Threat Detection Excellence",
    quote: "Our threat-intelligence engine helped them block 98% of attacks in real time, improving security posture across the entire enterprise network."
  }
];

export default function OverviewTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mainTestimonial = testimonials[currentIndex];
  const chip1Testimonial = testimonials[(currentIndex + 1) % testimonials.length];
  const chip2Testimonial = testimonials[(currentIndex + 2) % testimonials.length];

  return (
    <section className="relative py-20 sm:py-32 bg-[#031B3D] flex flex-col items-center min-h-screen justify-center font-sans overflow-hidden">


      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero/Hero8.png"
          alt="Background"
          fill
          className="object-fit opacity-30 mix-blend-screen"
        />
      </div>

      <div className="w-full max-w-4xl px-4 sm:px-6 mx-auto relative z-10">

        {/* Top Label */}
        <p className="text-white/80 text-base font-medium mb-4 pl-2">Customer Feedback</p>

        {/* Main White Card */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative mb-16 group">

          {/* Header */}
          <div className="flex items-center gap-5 mb-8">
            <div className="size-16 rounded-full overflow-hidden relative shrink-0 border border-slate-100 shadow-sm">
              <Image src={mainTestimonial.image} alt={mainTestimonial.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-[#031B3D] text-xl">{mainTestimonial.name}</h3>
              <p className="text-sm text-slate-500 mt-0.5">
                From: {mainTestimonial.role} &bull; To: SPS Platform
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="text-slate-800 text-base sm:text-lg leading-relaxed space-y-6">
            <p className="font-medium text-[#031B3D]">Hi there,</p>
            <p>
              {mainTestimonial.quote}
            </p>
            <div className="pt-2">
              <p className="font-medium text-[#031B3D]">Best,</p>
              <p className="font-bold text-[#031B3D]">{mainTestimonial.name}</p>
            </div>
          </div>

          {/* Navigation Buttons (Shows on hover) */}
          <div className="absolute top-8 right-8 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="size-10 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-[#00a7e1] hover:border-[#00a7e1] hover:text-white flex items-center justify-center transition-all shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)} className="size-10 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-[#00a7e1] hover:border-[#00a7e1] hover:text-white flex items-center justify-center transition-all shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Middle Text Area */}
        <div className="flex items-start md:items-center gap-4 sm:gap-6 mb-12 pl-2">
          {/* 4-Diamond Sparkle Icon */}
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00a7e1] shrink-0 mt-1 md:mt-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            <path d="M4.5 3L5.5 6L8.5 7L5.5 8L4.5 11L3.5 8L0.5 7L3.5 6L4.5 3Z" />
            <path d="M19.5 3L20.5 6L23.5 7L20.5 8L19.5 11L18.5 8L15.5 7L18.5 6L19.5 3Z" />
          </svg>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight">
            Incredible impact! Let's have a look at what<br className="hidden md:block" /> other teams are achieving with SPS.
          </h2>
        </div>

        {/* The Two Overlapping Floating Chips */}
        <div className="relative w-full max-w-[760px] h-[350px] sm:h-[260px] mx-auto sm:ml-16">

          {/* Lime Green Chip (Left/Top) */}
          <div className="absolute left-0 top-0 w-[90%] sm:w-[380px] bg-[#CCFF00] text-[#031B3D] p-6 sm:p-8 rounded-[32px] z-20 shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full overflow-hidden relative shrink-0 border-2 border-white/50">
                <Image src={chip1Testimonial.avatar} alt={chip1Testimonial.name} fill className="object-cover" />
              </div>
              <h4 className="font-bold text-xl">{chip1Testimonial.title}</h4>
            </div>
            <p className="text-[15px] text-[#031B3D]/80 font-medium leading-relaxed">
              {chip1Testimonial.quote}
            </p>
          </div>

          {/* Blue Chip (Right/Bottom) */}
          <div className="absolute right-0 sm:left-[340px] top-40 sm:top-16 w-[90%] sm:w-[380px] bg-[#4F85FC] border border-white/10 text-white p-6 sm:p-8 rounded-[32px] z-10 shadow-xl backdrop-blur-sm transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full overflow-hidden relative shrink-0 border-2 border-white/20">
                <Image src={chip2Testimonial.avatar} alt={chip2Testimonial.name} fill className="object-cover" />
              </div>
              <h4 className="font-bold text-xl">{chip2Testimonial.title}</h4>
            </div>
            <p className="text-[15px] text-white/90 leading-relaxed font-medium">
              {chip2Testimonial.quote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

