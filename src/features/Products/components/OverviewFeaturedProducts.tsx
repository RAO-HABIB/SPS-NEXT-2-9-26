"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const featuredProductsTabs = [
  {
    id: "sps",
    label: "SPS Products",
    items: [
      { name: "AI Platform", logo: "/images/products/product-placeholder.png" },
      { name: "Applications", logo: "/images/products/product-placeholder.png" },
      { name: "DevOps Suite", logo: "/images/products/product-placeholder.png" },
      { name: "Analytics", logo: "/images/products/product-placeholder.png" },
      { name: "Automation", logo: "/images/products/product-placeholder.png" },
    ]
  },
  {
    id: "ibm",
    label: "IBM Products",
    items: [
      { name: "Watson AI", logo: "/images/products/product-placeholder.png" },
      { name: "IBM Cloud", logo: "/images/products/product-placeholder.png" },
      { name: "Security Verify", logo: "/images/products/product-placeholder.png" },
      { name: "IAM", logo: "/images/products/product-placeholder.png" },
      { name: "Infrastructure", logo: "/images/products/product-placeholder.png" },
    ]
  },
  {
    id: "other",
    label: "Other Solutions",
    items: [
      { name: "Azure", logo: "/images/products/product-placeholder.png" },
      { name: "Fortinet", logo: "/images/products/product-placeholder.png" },
      { name: "Kaspersky", logo: "/images/products/product-placeholder.png" },
      { name: "Tenable", logo: "/images/products/product-placeholder.png" },
      { name: "Cisco", logo: "/images/products/product-placeholder.png" },
    ]
  }
];

export default function OverviewFeaturedProducts() {
  const [activeTab, setActiveTab] = useState("sps");

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 sm:mb-12">
          <h4 className="text-2xl font-bold text-[#031B3D] inline-block relative after:absolute after:top-1/2 after:-left-40 sm:after:-left-60 after:w-32 sm:after:w-48 after:h-px after:bg-slate-200 before:absolute before:top-1/2 before:-right-40 sm:before:-right-60 before:w-32 sm:before:w-48 before:h-px before:bg-slate-200">
            Featured Products
          </h4>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-20">
          
          {/* Vertical Tabs */}
          <div className="w-full md:w-1/4 xl:w-1/5">
            <ul className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
              {featuredProductsTabs.map((tab) => (
                <li key={tab.id} className="min-w-fit md:min-w-0">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-5 sm:py-3.5 sm:px-6 font-medium rounded-xl w-full text-center md:text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-[#00a7e1] text-white shadow-md"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="w-full md:w-3/4 xl:w-4/5 flex items-center justify-center min-h-[150px]">
            {featuredProductsTabs.map((tab) => (
              <div 
                key={tab.id}
                className={`w-full transition-opacity duration-500 ${
                  activeTab === tab.id ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <div className="flex flex-wrap justify-center sm:justify-start lg:justify-center items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
                  {tab.items.map((item, idx) => (
                    <Link href={`/products/${tab.id}/${item.name.toLowerCase().replace(/ /g, '-')}`} key={idx} className="group flex flex-col items-center justify-center text-center w-24 sm:w-28 transform transition-transform hover:-translate-y-1">
                      <div className="size-16 sm:size-20 rounded-full bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center p-3 sm:p-4 group-hover:shadow-md group-hover:border-[#00a7e1]/30 transition-all mb-3 sm:mb-4">
                        <div className="relative w-full h-full opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                           {/* Replace with actual partner logos */}
                           <Image src={item.logo} alt={item.name} fill className="object-contain" />
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 group-hover:text-[#00a7e1] transition-colors">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
