"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon as IconifyIcon } from "@iconify-icon/react";

const tabData = [
  {
    id: "sps",
    title: "SPS Products",
    description: "SPS products streamline your business operations and maximize efficiency.",
    image: "/images/products/product-placeholder.png",
    teamName: "SPS Team",
    teamRole: "Enterprise Solutions",
    items: [
      "MYID Self Verify",
      "Azalio",
      "Fabrico",
      "CSM"
    ]
  },
  {
    id: "ibm",
    title: "IBM Products",
    description: "IBM solutions provide robust enterprise software and AI-powered tools for businesses.",
    image: "/images/products/product-placeholder.png",
    teamName: "IBM Team",
    teamRole: "Business Solutions",
    items: [
      "Automation",
      "Data & Ai",
      "Security",
      "Sustainability"
    ]
  },
  {
    id: "other",
    title: "Other Solutions",
    description: "Other solutions cover security, compliance, and business process enhancements.",
    image: "/images/products/product-placeholder.png",
    teamName: "Solutions Team",
    teamRole: "Business Enhancements",
    items: [
      "Identity Verification Solutions",
      "Digital Identity Management",
      "Manufacturing & Operations Solutions",
      "Business Management Systems",
      "Compliance & Security Management"
    ]
  }
];

export default function OverviewPoweringBusiness() {
  const [activeTab, setActiveTab] = useState("sps");

  return (
    <section className="py-16 sm:py-20 md:py-24 xl:py-32 bg-[#F4F7FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          
          {/* Left Column: Navigation Tabs */}
          <div className="w-full lg:w-1/3 xl:w-5/12">
            <div className="mb-6 sm:mb-8">
              <div className="text-[#00a7e1] font-semibold uppercase text-lg inline-flex gap-2 mb-2">
                Our Products
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-bold capitalize text-[#031B3D] leading-tight">
                Powering Businesses with AI, Cloud & Security Solutions
              </h2>
            </div>
            
            <nav className="flex flex-col gap-2 mb-6">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex justify-between items-center w-full text-left py-4 px-6 sm:py-5 sm:px-8 rounded-full text-base sm:text-lg lg:text-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#00a7e1] text-white shadow-lg"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {tab.title}
                  <div className={`flex items-center justify-center size-8 rounded-full transition-colors ${
                    activeTab === tab.id ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    <IconifyIcon icon="lucide:arrow-right" className={activeTab === tab.id ? 'text-white' : 'text-slate-400'} width={18} />
                  </div>
                </button>
              ))}
            </nav>

            <Link href="/products" className="inline-flex items-center gap-2 text-[#00a7e1] font-bold hover:text-[#008dbf] transition-colors group">
              View All Products
              <IconifyIcon icon="lucide:arrow-right" width={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Tab Content */}
          <div className="w-full lg:w-2/3 xl:w-7/12">
            <div className="bg-white rounded-3xl p-5 sm:p-8 xl:p-10 shadow-xl min-h-[500px]">
              {tabData.map((tab) => (
                <div 
                  key={tab.id} 
                  className={`transition-opacity duration-500 flex flex-col md:flex-row gap-6 lg:gap-8 h-full ${
                    activeTab === tab.id ? "opacity-100 block" : "opacity-0 hidden"
                  }`}
                >
                  
                  {/* Content Left: Image & Button */}
                  <div className="w-full md:w-1/2 relative h-[300px] md:h-auto min-h-[300px] rounded-2xl overflow-hidden group">
                    <Image 
                      src={tab.image} 
                      alt={tab.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-4 bottom-4">
                      <Link href="/contact" className="bg-white/95 backdrop-blur text-[#031B3D] hover:bg-[#00a7e1] hover:text-white transition-colors py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg w-full text-sm">
                        <IconifyIcon icon="lucide:calendar" width={16} />
                        Book An Appointment
                      </Link>
                    </div>
                  </div>

                  {/* Content Right: Info & List */}
                  <div className="w-full md:w-1/2 flex flex-col pt-2 md:pt-0">
                    <h3 className="text-2xl xl:text-3xl font-bold text-[#031B3D] mb-3">{tab.title}</h3>
                    <p className="text-slate-600 text-base lg:text-lg mb-6 leading-relaxed">
                      {tab.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8 flex-1">
                      {tab.items.map((item, idx) => (
                        <li key={idx} className="group flex items-center gap-3">
                          <div className="size-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <IconifyIcon icon="lucide:check" width={12} />
                          </div>
                          <Link href={`/products/${tab.id}/${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-700 font-medium group-hover:text-[#00a7e1] group-hover:translate-x-1 transition-all">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex justify-between items-center pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full overflow-hidden relative bg-slate-100">
                          <Image src={tab.image} alt="Team" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-[#031B3D] m-0">{tab.teamName}</p>
                          <p className="text-sm font-medium text-[#00a7e1] m-0">{tab.teamRole}</p>
                        </div>
                      </div>
                      <Link href={`/products/${tab.id}`} className="size-12 rounded-full bg-[#00a7e1] hover:bg-[#031B3D] transition-colors text-white flex items-center justify-center shadow-lg">
                        <IconifyIcon icon="lucide:arrow-up-right" width={24} />
                      </Link>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
