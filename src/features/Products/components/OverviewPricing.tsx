"use client";

import { Icon as IconifyIcon } from "@iconify-icon/react";
import Link from "next/link";

export default function OverviewPricing() {
  const allFeatures = [
    "Core Platform Access",
    "Identity & Access Management",
    "Security & Compliance Tools",
    "Cloud & Application Integration",
    "Advanced Analytics & Reporting",
    "Role-Based Access Control",
    "Email & Ticket Support",
    "Dedicated Technical Assistance"
  ];

  const plans = [
    {
      name: "Free",
      subtitle: "Starter",
      price: "Free",
      buttonText: "Get Started",
      bgColor: "bg-[#031B3D]",
      tailLeft: "fill-[#031B3D]",
      tailRight: "fill-[#010e20]", // Darker shadow
      isPopular: false,
      activeFeatures: 3
    },
    {
      name: "$25",
      subtitle: "Month",
      price: "$25 / Month",
      buttonText: "Get Started",
      bgColor: "bg-[#00a7e1]",
      tailLeft: "fill-[#00a7e1]",
      tailRight: "fill-[#0089b8]", // Darker shadow
      isPopular: true,
      activeFeatures: 5
    },
    {
      name: "$40",
      subtitle: "Month",
      price: "$40 / Month",
      buttonText: "Contact Sales",
      bgColor: "bg-[#031B3D]",
      tailLeft: "fill-[#031B3D]",
      tailRight: "fill-[#010e20]", // Darker shadow
      isPopular: false,
      activeFeatures: 8
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden z-0 font-sans">
      
      {/* Title Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold capitalize text-[#031B3D] mb-4">
            Choose the Right Product Plan
          </h2>
          <p className="text-lg font-light max-w-3xl mx-auto text-slate-600">
            Flexible plans designed to meet the needs of businesses of all sizes — from startups to large enterprises.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-center max-w-6xl mx-auto gap-12 lg:gap-8 pt-4">
          
          {plans.map((plan, planIdx) => (
            <div 
              key={planIdx} 
              className={`w-full lg:w-1/3 flex flex-col items-center transition-transform duration-500 hover:-translate-y-4 ${plan.isPopular ? 'lg:-mt-8' : ''}`}
            >
              
              {/* Card + Tail Wrapper with Drop Shadow */}
              <div className="w-full drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] flex flex-col">
                
                {/* Main Card Body */}
                <div className={`${plan.bgColor} rounded-t-sm px-8 pt-12 pb-8 flex flex-col min-h-[600px]`}>
                  <h3 className="text-4xl font-extrabold text-white mb-2 tracking-wider text-center flex items-center justify-center gap-2">
                    {plan.name} 
                    {plan.name !== "Free" && <span className="text-lg font-medium text-white/70">/ {plan.subtitle}</span>}
                  </h3>
                  {plan.name === "Free" && <p className="text-center text-lg font-medium text-white/70 mb-2">/ {plan.subtitle}</p>}
                  
                  {plan.isPopular && (
                    <div className="text-center mb-6 mt-2">
                      <span className="bg-[#031B3D] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {!plan.isPopular && <div className="h-[44px] mb-6 mt-2"></div>}

                  <ul className="flex-1 space-y-5 mb-10 pl-2 sm:pl-6 lg:pl-2">
                    {allFeatures.map((feature, idx) => {
                      const isActive = idx < plan.activeFeatures;
                      return (
                        <li key={idx} className="flex items-center gap-4 text-sm font-medium">
                          <div className={`size-[24px] rounded-full flex items-center justify-center shrink-0 ${isActive ? (plan.isPopular ? 'bg-[#031B3D] text-white' : 'bg-[#00a7e1] text-white') : 'bg-white/10 text-white/30'}`}>
                            <IconifyIcon icon={isActive ? "lucide:check" : "lucide:x"} width={14} />
                          </div>
                          <span className={isActive ? 'text-white' : 'text-white/40'}>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="text-center mt-auto pt-6 border-t border-white/20">
                    <div className="text-3xl font-bold text-white">
                      {plan.price}
                    </div>
                  </div>
                </div>

                {/* 3D Bookmark Tail (SVG) */}
                <div className="w-full h-[60px] relative -mt-[1px]">
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full block">
                    {/* Left Triangle */}
                    <polygon points="0,0 50,30 50,0" className={plan.tailLeft} />
                    {/* Right Triangle (Shadow Fold) */}
                    <polygon points="50,0 50,30 100,0" className={plan.tailRight} />
                  </svg>
                </div>

              </div>
              
              {/* Floating Order Button */}
              <div className="mt-12 relative z-30">
                <Link href="/contact" className={`
                  inline-block rounded-full px-10 py-3.5 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl
                  ${plan.isPopular 
                    ? 'bg-[#00a7e1] text-white hover:bg-[#0089b8] hover:shadow-[#00a7e1]/30' 
                    : 'bg-[#031B3D] text-white hover:bg-[#021124] hover:shadow-[#031B3D]/30'
                  }
                `}>
                  {plan.buttonText}
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
