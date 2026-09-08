"use client";

import { useState } from "react";
import FloatingPillNavigation from "./ui/FloatingPillNavigation";
import ProductFocusCarousel, { type FocusProductItem } from "./ui/ProductFocusCarousel";

const featuredSolutions: FocusProductItem[] = [
  {
    id: 1,
    title: "SPS Digital Solutions",
    subtitle: "Enterprise Platforms",
    description: "AI-powered platforms and cloud-native apps tailored for your business.",
    image: "/images/products/sps_illustration.png",
    category: ["sps"],
    buttonLabel: "Explore Solution",
    href: "/products/sps/bms",
  },
  {
    id: 2,
    title: "IBM Technology",
    subtitle: "AI & Automation",
    description: "Enterprise-grade AI, automation, and security solutions from IBM.",
    image: "/images/products/ibm_illustration.png",
    category: ["ibm"],
    buttonLabel: "Explore Solution",
    href: "/products/ibm/automation",
  },
  {
    id: 3,
    title: "Microsoft Solutions",
    subtitle: "Cloud Infrastructure",
    description: "Secure, scalable cloud solutions enabling modern workplaces.",
    image: "/images/products/ms_illustration.png",
    category: ["other"],
    buttonLabel: "Explore Solution",
    href: "/products",
  },
  {
    id: 4,
    title: "Security Compliance",
    subtitle: "Cyber Defense",
    description: "Advanced cybersecurity and compliance solutions to protect your digital assets.",
    image: "/images/products/powering_security.jpg",
    category: ["other", "sps"],
    buttonLabel: "Explore Solution",
    href: "/services/cybersecurity",
  },
];

const TABS = [
  { id: "all", label: "All Solutions" },
  { id: "sps", label: "SPS Products" },
  { id: "ibm", label: "IBM Products" },
  { id: "other", label: "Other Solutions" },
];

export default function OverviewFeaturedTech() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSolutions =
    activeTab === "all"
      ? featuredSolutions
      : featuredSolutions.filter((item) => item.category.includes(activeTab));

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-[#031B3D] mb-3 sm:mb-4 tracking-tight">
            Our Featured <br className="hidden sm:block" /> Technology Solutions
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal max-w-2xl sm:max-w-3xl mx-auto text-slate-600 px-2">
            Explore the latest AI, Cloud, and Security solutions from leading technology partners
            to drive innovation and digital transformation.
          </p>
        </div>

        {/* Responsive Floating Pill Navigation (Above Cards) */}
        <div className="mb-8 sm:mb-10 flex justify-center w-full">
          <FloatingPillNavigation
            items={TABS}
            activeId={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Product Focus Carousel (No Arrows, Center Focus, Swipe & Dots) */}
        <div className="w-full flex justify-center overflow-visible">
          <ProductFocusCarousel
            products={filteredSolutions}
            gap={40}
            activeScale={1}
            inactiveScale={0.8}
            cardRadius={24}
            showButton={true}
            autoplay={false}
          />
        </div>
      </div>
    </section>
  );
}
