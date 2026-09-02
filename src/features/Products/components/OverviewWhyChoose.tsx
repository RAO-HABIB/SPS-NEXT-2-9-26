"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon as IconifyIcon } from "@iconify-icon/react";

export default function OverviewWhyChoose() {
  return (
    <section className="bg-[#F8F9FB] py-20 lg:py-32 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Side: Text and Lottie Placeholder */}
          <div className="w-full lg:w-[40%] lg:sticky top-32">
            <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#031B3D] mb-6 leading-tight tracking-tight">
              Why Choose Our <br className="hidden lg:block" /> Products and Solutions
            </h2>
            <p className="text-slate-600 text-lg mb-12 max-w-md">
              Learn more about everything from seamless enterprise integrations to scaling your business with future-proof innovation.
            </p>

            {/* SVG Illustration */}
            <div className="w-full max-w-md relative aspect-square">
              <Image
                src="/images/products/why-choose-us.svg"
                alt="Why Choose Us"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side: Staggered Stripe-style Grid */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-6 xl:gap-8 items-start">

              {/* Column 1 (Pushed down slightly to create staggered masonry effect) */}
              <div className="w-full sm:w-1/2 flex flex-col gap-6 lg:gap-6 xl:gap-8 pt-0 sm:pt-24">

                {/* Card 1 */}
                <div className="bg-[#00a7e1] border border-[#00a7e1] rounded-[24px] p-8 sm:p-10 relative overflow-hidden min-h-[380px] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative z-10">
                    <p className="text-white/80 text-xs font-bold mb-4 tracking-wider uppercase">Enterprise Solutions</p>
                    <h3 className="text-[28px] font-bold mb-4 leading-tight text-white">Enterprise-Grade Products</h3>
                    <p className="text-white/90 font-light leading-relaxed">Robust, scalable, and secure solutions designed for modern business environments.</p>
                  </div>
                  {/* SVG Pattern */}
                  <div className="absolute -bottom-10 -left-10 w-[150%] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-transparent stroke-white stroke-[1.5]">
                      <circle cx="50" cy="150" r="40" />
                      <circle cx="50" cy="150" r="60" />
                      <circle cx="50" cy="150" r="80" />
                      <circle cx="150" cy="100" r="30" />
                      <circle cx="150" cy="100" r="50" />
                      <circle cx="150" cy="100" r="70" />
                      <path d="M 0 150 Q 100 50 200 150" />
                    </svg>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#031B3D] border border-[#031B3D] rounded-[24px] p-8 sm:p-10 relative overflow-hidden min-h-[440px] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative z-10">
                    <p className="text-[#00a7e1] text-xs font-bold mb-4 tracking-wider uppercase">Integration</p>
                    <h3 className="text-[28px] font-bold mb-4 leading-tight text-white">Seamless Integration</h3>
                    <p className="text-white/90 font-light leading-relaxed">Easily integrate with existing systems, platforms, and workflows to unify your digital infrastructure.</p>
                  </div>
                  {/* SVG Pattern */}
                  <div className="absolute bottom-0 left-0 w-[120%] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-4">
                    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-transparent stroke-white stroke-[1.5]">
                      <path d="M 0 100 A 50 50 0 0 1 100 100" />
                      <path d="M -20 100 A 70 70 0 0 1 120 100" />
                      <path d="M 100 100 A 40 40 0 0 1 180 100" />
                      <path d="M 80 100 A 60 60 0 0 1 200 100" />
                      <line x1="0" y1="90" x2="200" y2="90" />
                      <line x1="0" y1="80" x2="200" y2="80" />
                      <line x1="0" y1="70" x2="200" y2="70" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Column 2 */}
              <div className="w-full sm:w-1/2 flex flex-col gap-6 lg:gap-6 xl:gap-8">

                {/* Card 3 */}
                <div className="bg-[#00a7e1] border border-[#00a7e1] rounded-[24px] p-8 sm:p-10 relative overflow-hidden min-h-[440px] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative z-10">
                    <p className="text-white/80 text-xs font-bold mb-4 tracking-wider uppercase">Future-Proof</p>
                    <h3 className="text-[28px] font-bold mb-4 leading-tight text-white">Innovation Driven</h3>
                    <p className="text-white/90 font-light leading-relaxed">Built with the latest technologies to support future growth, allowing you to scale effortlessly.</p>
                  </div>
                  {/* SVG Pattern */}
                  <div className="absolute -bottom-4 -right-4 w-[120%] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110">
                    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-transparent stroke-white stroke-[1.5]">
                      <rect x="20" y="100" width="20" height="50" />
                      <rect x="50" y="70" width="20" height="80" />
                      <rect x="80" y="40" width="20" height="110" />
                      <rect x="110" y="90" width="20" height="60" />
                      <rect x="140" y="50" width="20" height="100" />
                      <path d="M 0 150 A 80 80 0 0 1 160 150" />
                      <path d="M -20 150 A 100 100 0 0 1 180 150" />
                      <circle cx="160" cy="40" r="20" />
                    </svg>
                  </div>
                </div>

                {/* Card 4 (Dark Theme Variant to match the theme) */}
                <div className="bg-[#031B3D] border border-[#031B3D] rounded-[24px] p-8 sm:p-10 text-white relative overflow-hidden min-h-[380px] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between">
                  <div className="relative z-10">
                    <p className="text-[#00a7e1] text-xs font-bold mb-4 tracking-wider uppercase">Customer Success</p>
                    <h3 className="text-[28px] font-bold mb-4 leading-tight text-white">Dedicated Support Services</h3>
                    <p className="text-slate-300 font-light leading-relaxed mb-8">Expert guidance and round-the-clock support to ensure your operational success.</p>
                  </div>

                  <div className="relative z-10">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all hover:text-[#00a7e1]">
                      Read now <IconifyIcon icon="lucide:chevron-right" width={18} />
                    </Link>
                  </div>

                  {/* SVG Pattern */}
                  <div className="absolute bottom-0 right-0 w-[130%] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-4">
                    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-transparent stroke-white stroke-[1.5]">
                      <path d="M 50 150 L 100 100 L 150 150" />
                      <path d="M 20 150 L 100 70 L 180 150" />
                      <path d="M -10 150 L 100 40 L 210 150" />
                      <rect x="80" y="80" width="40" height="40" transform="rotate(45 100 100)" />
                      <circle cx="50" cy="100" r="15" />
                      <circle cx="150" cy="80" r="25" />
                    </svg>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
