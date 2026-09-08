"use client";

import IbmHoverCard from "./IbmHoverCard";
import { Sparkles } from "lucide-react";

export interface IbmPillarItem {
  id: string;
  slug: string;
  name: string;
  role: string;
  description: string;
  image: string;
  href: string;
  badge: string;
  accentColor: string;
  subItems: { name: string; href?: string }[];
}

export const IBM_PILLARS: IbmPillarItem[] = [
  {
    id: "automation",
    slug: "automation",
    name: "Automation",
    role: "AI & Digital Labor",
    description:
      "Accelerate operations and eliminate manual bottlenecks with watsonx Orchestrate, Assistant, and AI-driven automation.",
    image: "/images/products/ibm-automation-card.jpg",
    badge: "Cognitive Labor",
    href: "/products/ibm/automation",
    accentColor: "#00a7e1",
    subItems: [
      { name: "Watsonx Orchestrate" },
      { name: "Watsonx Assistant" },
      { name: "Code Assistant" },
    ],
  },
  {
    id: "data-ai",
    slug: "data-ai",
    name: "Data & AI",
    role: "Foundation Models & Lakehouse",
    description:
      "Unify hybrid data governance and operationalize enterprise generative AI with watsonx.data, watsonx.ai, and watsonx.gov.",
    image: "/images/products/ibm-data-ai-card.jpg",
    badge: "Enterprise AI",
    href: "/products/ibm/data-ai",
    accentColor: "#38bdf8",
    subItems: [
      { name: "Watsonx.data" },
      { name: "Watsonx.ai" },
      { name: "Watsonx.gov" },
    ],
  },
  {
    id: "security",
    slug: "security",
    name: "Security",
    role: "Zero-Trust & Threat Defense",
    description:
      "Safeguard critical workloads, enforce identity governance, and automate threat response with Verify, Guardium, and QRadar.",
    image: "/images/products/ibm-security-card.jpg",
    badge: "Zero-Trust Mesh",
    href: "/products/ibm/security",
    accentColor: "#0284c7",
    subItems: [
      { name: "Security Verify" },
      { name: "Guardium" },
      { name: "QRadar SIEM" },
    ],
  },
  {
    id: "sustainability",
    slug: "sustainability",
    name: "Sustainability",
    role: "ESG Intelligence & Assets",
    description:
      "Drive environmental compliance, reduce carbon footprint, and optimize physical assets with Envizi ESG Suite, Maximo, and TRIRIGA.",
    image: "/images/products/ibm-sustainability-card.jpg",
    badge: "Scope 1-3 ESG",
    href: "/products/ibm/sustainability",
    accentColor: "#10b981",
    subItems: [
      { name: "Envizi ESG" },
      { name: "Maximo MAS" },
      { name: "TRIRIGA" },
    ],
  },
];

interface IbmPillarsShowcaseProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  showHeader?: boolean;
  darkTheme?: boolean;
  className?: string;
}

export default function IbmPillarsShowcase({
  title = "IBM Technology Ecosystem",
  subtitle = "Harness enterprise-grade cognitive AI, zero-trust cybersecurity, modern data lakehouses, and intelligent ESG operations.",
  eyebrow = "Enterprise Solutions",
  showHeader = true,
  darkTheme = false,
  className = "",
}: IbmPillarsShowcaseProps) {
  return (
    <div className={`w-full ${className}`}>
      {showHeader && (
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[#00a7e1] font-bold uppercase tracking-wider text-xs sm:text-sm mb-3">
            <Sparkles className="size-4" />
            {eyebrow}
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-3 ${
              darkTheme ? "text-white" : "text-[#031B3D]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-sm sm:text-base font-light leading-relaxed ${
              darkTheme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {subtitle}
          </p>
        </div>
      )}

      {/* 4-Column Responsive Grid with Framer Hover Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
        {IBM_PILLARS.map((pillar) => (
          <IbmHoverCard
            key={pillar.id}
            id={pillar.id}
            name={pillar.name}
            role={pillar.role}
            description={pillar.description}
            image={pillar.image}
            href={pillar.href}
            badge={pillar.badge}
            accentColor={pillar.accentColor}
            subItems={pillar.subItems}
          />
        ))}
      </div>
    </div>
  );
}
