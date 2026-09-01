"use client";

import Image from "next/image";

const CUSTOMERS = [
  { name: "UNLV", src: "/customers/unlv.webp" },
  { name: "IBM", src: "/customers/ibm1.webp" },
  { name: "Altria", src: "/customers/altria.webp" },
  { name: "County of Spotsylvania", src: "/customers/county-of-spotsylvania.webp" },
  { name: "Maryland Judiciary", src: "/customers/maryland-judiciary.webp" },
  { name: "Telenor", src: "/customers/telenor.webp" },
  { name: "TransUnion", src: "/customers/transunion.webp" },
  { name: "Avnet", src: "/customers/avnet.webp" },
  { name: "Askari Bank", src: "/customers/Askari-Bank4.webp" },
  { name: "Highmark Health", src: "/customers/highmark-health.webp" },
  { name: "Virginia", src: "/customers/virginia.webp" },
  { name: "Keysight", src: "/customers/Keysight.webp" },
];

export default function Customers() {
  return (
    <section className="w-full">
      <div className="bg-[#031B3D] px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold leading-relaxed sm:leading-loose text-white">
            We have an award-winning team that includes IBM-certified inventors and champions who have won multiple worldwide competitions.
          </h2>
          <p className="mx-auto max-w-4xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose text-slate-300">
            As an enterprise-class innovator and solution creator with expertise across all phases of product design, development, deployment, security, operations, monitoring, and support, we have been helping our clients build, deploy and secure applications. Our development, quality, cybersecurity, training, operations, monitoring, and support teams work in tandem to create high-performance, secure, reliable, scalable, and manageable systems.
          </p>
        </div>
      </div>

      <div className="bg-[#F4F7FA] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#031B3D]">
            Customers We Are Proud To Work With.
          </h2>
        </div>

        <div className="relative flex max-w-[100vw] overflow-hidden py-2 sm:py-4">
          <style>{`
            @keyframes slide-marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-marquee {
              display: flex;
              width: max-content;
              animation: slide-marquee 40s linear infinite;
            }
            .animate-slide-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="animate-slide-marquee gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
            {[...CUSTOMERS, ...CUSTOMERS].map((customer, idx) => (
              <div
                key={idx}
                className="flex h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 sm:p-5 lg:p-6 transition-transform duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={customer.src}
                    alt={customer.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
