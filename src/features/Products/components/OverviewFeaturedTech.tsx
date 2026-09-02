"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const featuredSolutions = [
  {
    id: 1,
    title: "SPS Digital Solutions",
    description: "AI-powered platforms and cloud-native apps tailored for your business.",
    image: "/images/products/ms_illustration.png",
    category: ["sps"],
    bgColor: "bg-[#1a73e8]" // Green
  },
  {
    id: 2,
    title: "IBM Technology",
    description: "Enterprise-grade AI, automation, and security solutions from IBM.",
    image: "/images/products/ms_illustration.png",
    category: ["ibm"],
    bgColor: "bg-[#1a73e8]" // Blue
  },
  {
    id: 3,
    title: "Microsoft Solutions",
    description: "Secure, scalable cloud solutions enabling modern workplaces.",
    image: "/images/products/ms_illustration.png",
    category: ["other"],
    bgColor: "bg-[#1a73e8]" // Yellow
  },
  {
    id: 4,
    title: "Security Compliance",
    description: "Advanced cybersecurity and compliance solutions to protect your digital assets.",
    image: "/images/products/ms_illustration.png",
    category: ["other"],
    bgColor: "bg-[#1a73e8]" // Red
  }
];

export default function OverviewFeaturedTech() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSolutions = activeTab === "all"
    ? featuredSolutions
    : featuredSolutions.filter(item => item.category.includes(activeTab));

  return (
    <section className="py-10 sm:py-12.5 md:py-17.5 2xl:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 sm:mb-7.5 text-center transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold capitalize text-[#031B3D] mb-4">
            Our Featured <br className="hidden sm:block" /> Technology Solution
          </h2>
          <p className="text-sm sm:text-base xl:text-lg font-light max-w-3xl mx-auto text-slate-600">
            Explore the latest AI, Cloud, and Security solutions from leading technology partners
            to drive innovation and digital transformation.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <ul className="flex flex-wrap justify-center gap-2.5 lg:gap-3.75">
            {[
              { id: "all", label: "All Solutions" },
              { id: "sps", label: "SPS Products" },
              { id: "ibm", label: "IBM Products" },
              { id: "other", label: "Other Solutions" }
            ].map((tab) => (
              <li key={tab.id} className="inline-block">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-5 lg:py-2.5 lg:px-6 rounded-full border border-black/10 text-sm lg:text-lg leading-[1.4] font-normal transition-colors ${activeTab === tab.id
                    ? "bg-[#00a7e1] text-white border-[#00a7e1]"
                    : "bg-transparent text-slate-600 hover:bg-slate-50"
                    }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {filteredSolutions.map((item) => (
            <div key={item.id} className="relative border border-slate-200 rounded-lg overflow-hidden flex flex-col bg-white h-[480px]">

              {/* Background Color Block (Bottom ~25%) */}
              <div className={`absolute bottom-0 left-0 right-0 h-[120px] ${item.bgColor}`}></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full w-full">

                {/* Top Text Section */}
                <div className="pt-10 px-6 flex flex-col items-center text-center">
                  <div className="h-[64px] flex items-start justify-center">
                    <h3 className="text-[26px] text-slate-800 font-normal leading-tight">{item.title}</h3>
                  </div>
                  <div className="h-[76px] flex items-start justify-center">
                    <p className="text-slate-500 text-[15px] leading-relaxed max-w-[240px]">
                      {item.description}
                    </p>
                  </div>
                  <Link href="/products" className="text-[#1a73e8] border border-slate-200 hover:bg-slate-50 font-medium text-sm py-2 px-5 rounded bg-white transition-colors mt-2">
                    Learn more
                  </Link>
                </div>

                {/* Bottom Image Section - Centered on the 120px boundary */}
                {/* 120px from bottom is the boundary. Center of a 200px box is at 120px if bottom is at 20px (120 - 100) */}
                <div className="absolute bottom-[20px] left-0 right-0 w-full h-[200px] flex items-center justify-center pointer-events-none z-10 px-8">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain object-center drop-shadow-xl"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
