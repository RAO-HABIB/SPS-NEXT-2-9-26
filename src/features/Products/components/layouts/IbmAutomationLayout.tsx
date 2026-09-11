"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductDetailData } from "@/data/products-data";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  MessageSquareCode,
  FileSearch,
  Code2,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";

interface AutomationProduct {
  id: string;
  title: string;
  badge: string;
  icon: typeof Cpu;
  accentColor: string;
  description: string;
  highlights: string[];
  capabilities: string[];
  impactMetric: { value: string; label: string };
  modalDetails: {
    overview: string;
    keyFeatures: string[];
    useCases: string[];
  };
}

const automationProducts: AutomationProduct[] = [
  {
    id: "orchestrate",
    title: "IBM Watsonx Orchestrate",
    badge: "Workflow Orchestration",
    icon: Cpu,
    accentColor: "from-blue-600 to-cyan-500",
    description:
      "IBM watsonx Orchestrate is an AI-powered automation platform designed to transform enterprise workflows by integrating generative AI, predictive analytics, and seamless system orchestration. It empowers teams to automate complex tasks, accelerate decision-making, and enhance productivity through intuitive natural language interactions—turning manual processes into agile, intelligent operations.",
    highlights: [
      "Generative AI Workflows",
      "System Orchestration",
      "Natural Language Actions",
    ],
    capabilities: [
      "Cross-platform API & SaaS system integration",
      "Dynamic multi-step business logic routing",
      "Autonomous conversational AI agent execution",
    ],
    impactMetric: { value: "80%", label: "Faster Task Execution" },
    modalDetails: {
      overview:
        "watsonx Orchestrate acts as your enterprise's digital labor engine, enabling employees to initiate complex multi-system workflows using plain language prompts while maintaining strict governance and role-based permissions.",
      keyFeatures: [
        "Pre-built skill catalog covering HR, Procurement, Finance, and IT operations",
        "Natural language orchestration with context memory across SaaS applications",
        "Seamless synchronization with Salesforce, SAP, Workday, and Microsoft 365",
        "Enterprise-grade security controls and audit logging for automated tasks",
      ],
      useCases: [
        "Automated employee onboarding across 6 distinct enterprise systems",
        "Real-time customer billing and invoice dispute resolution",
        "Instant cross-departmental approval workflow acceleration",
      ],
    },
  },
  {
    id: "assistant",
    title: "IBM Watsonx Assistant",
    badge: "Conversational AI",
    icon: MessageSquareCode,
    accentColor: "from-cyan-500 to-teal-500",
    description:
      "IBM watsonx Assistant is an enterprise-grade AI assistant platform that delivers seamless, natural language interactions across customer and employee touchpoints. Powered by watsonx's generative AI and machine learning, it understands complex queries, provides accurate responses, and continuously improves—helping businesses enhance self-service, reduce support costs, and deliver 24/7 personalized engagement at scale.",
    highlights: [
      "Generative AI & ML",
      "24/7 Self-Service",
      "Multi-Channel Touchpoints",
    ],
    capabilities: [
      "Zero-hallucination grounded knowledge retrieval",
      "Omnichannel voice, web, and mobile integration",
      "Automated human agent escalation with context handover",
    ],
    impactMetric: { value: "99.2%", label: "Intent Recognition" },
    modalDetails: {
      overview:
        "watsonx Assistant delivers intelligent, enterprise-calibrated customer and employee self-service. By coupling conversational AI with domain retrieval-augmented generation (RAG), it answers complex questions with verified certainty.",
      keyFeatures: [
        "Visual dialogue builder with low-code conversation branch management",
        "Native enterprise search integration for real-time document grounding",
        "Frictionless voice telephony (IVR) and live-chat agent handoff",
        "Full data privacy compliance with zero training on your proprietary data",
      ],
      useCases: [
        "24/7 Tier-1 customer support automation across web and mobile apps",
        "Internal IT helpdesk resolution for password resets and software access",
        "Policy and benefits exploration for distributed global workforces",
      ],
    },
  },
  {
    id: "discovery",
    title: "IBM Watson Discovery",
    badge: "Cognitive Search & Analytics",
    icon: FileSearch,
    accentColor: "from-indigo-600 to-blue-500",
    description:
      "IBM Watson Discovery is an AI-powered enterprise search and text analytics platform that transforms unstructured data into actionable insights. Using natural language processing and machine learning, it uncovers hidden patterns, relationships, and answers across documents, websites, and databases - helping organizations make data-driven decisions faster while reducing manual research time by up to 75%.",
    highlights: [
      "NLP & Text Analytics",
      "Unstructured Data Mining",
      "75% Faster Research",
    ],
    capabilities: [
      "Complex PDF, table, and document OCR understanding",
      "Domain-specific custom dictionaries and entity extraction",
      "Automated trend, sentiment, and anomaly detection",
    ],
    impactMetric: { value: "75%", label: "Research Time Saved" },
    modalDetails: {
      overview:
        "Watson Discovery ingests millions of complex enterprise documents—PDFs, contracts, technical manuals, and filings—to surface precise passages and answers, dramatically accelerating research and discovery cycles.",
      keyFeatures: [
        "Smart Document Understanding (SDU) visual model trainer",
        "Entity, concept, and relationship extraction across massive corpuses",
        "Relevance training that adapts to your organization's specialized vernacular",
        "Out-of-the-box connectors for Box, SharePoint, Salesforce, and Cloud Storage",
      ],
      useCases: [
        "Contract lifecycle and regulatory compliance risk identification",
        "Engineering maintenance manual troubleshooting and root-cause search",
        "Medical and scientific literature review acceleration",
      ],
    },
  },
  {
    id: "code-assistant",
    title: "IBM watsonx Code Assistant",
    badge: "Generative Code Companion",
    icon: Code2,
    accentColor: "from-blue-700 to-indigo-600",
    description:
      "IBM watsonx Code Assistant is an AI-powered coding companion that accelerates software development by generating high-quality code, automating repetitive tasks, and providing intelligent recommendations. Built on IBM's watsonx AI foundation models, it helps developers write cleaner code faster, reduce errors, and maintain consistency across projects—transforming how teams build, test, and deploy enterprise applications.",
    highlights: [
      "AI Foundation Models",
      "Code Generation & Refactoring",
      "Enterprise Governance",
    ],
    capabilities: [
      "Multi-language code synthesis (Ansible, Java, Python, COBOL)",
      "Automated unit test generation and syntax explanation",
      "Enterprise code IP filtering and license transparency",
    ],
    impactMetric: { value: "2x+", label: "Development Velocity" },
    modalDetails: {
      overview:
        "watsonx Code Assistant empowers software and infrastructure engineers with purpose-built foundation models trained on trusted, vetted enterprise codebases, dramatically shrinking release cycles while maintaining code hygiene.",
      keyFeatures: [
        "watsonx Code Assistant for Red Hat Ansible Lightspeed IT automation",
        "watsonx Code Assistant for Z mainframe modernization and COBOL-to-Java translation",
        "Full code provenance filter to ensure licensing compliance",
        "Direct integration into VS Code, Eclipse, and standard modern developer IDEs",
      ],
      useCases: [
        "Generating production-grade Ansible playbooks from natural language instructions",
        "Modernizing legacy enterprise systems with automated language translation",
        "Automating unit test authoring and legacy codebase documentation",
      ],
    },
  },
];

export default function IbmAutomationLayout({ data }: { data: ProductDetailData }) {
  const [selectedProduct, setSelectedProduct] = useState<AutomationProduct | null>(null);

  return (
    <main className="w-full min-h-screen bg-[#F8F9FB]">
      {/* 1. Hero Section - EXACT SAME BACKGROUND AS CSM HERO */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden">
        {/* Background Image: Identical to CSM Hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/Hero8.webp"
            alt="IBM Automation Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#031B3D]/75 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link href="/products" className="hover:text-white transition-colors">
                PRODUCTS
              </Link>
              <span>›</span>
              <span className="text-slate-300">IBM</span>
              <span>›</span>
              <span className="text-[#00a7e1]">AUTOMATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Automation
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-light max-w-2xl">
              Accelerate enterprise operations, eliminate manual bottlenecks, and empower teams
              with IBM&apos;s AI-driven automation suite. Transform unstructured data into agility,
              orchestrate cross-system workflows, and build faster with generative intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-[#00a7e1] hover:bg-[#008dbf] text-white rounded-md px-7 py-3 text-sm font-semibold shadow-lg shadow-[#00a7e1]/30 transition-all hover:scale-105"
                onClick={() => {
                  const element = document.getElementById("products-grid");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore IBM Products
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-md px-7 py-3 text-sm font-semibold transition-all hover:scale-105 backdrop-blur-xs"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Section: IBM Automation Products */}
      <section id="products-grid" className="py-20 sm:py-28 border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00a7e1]/10 text-[#00a7e1] border border-[#00a7e1]/20 mb-4">
              <Sparkles className="size-3.5" />
              IBM Watsonx Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031B3D] tracking-tight mb-4">
              IBM Automation Products
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Enterprise-grade intelligent automation, generative AI orchestration, and cognitive
              search platforms designed to accelerate productivity and strategic decision-making.
            </p>
          </div>

          {/* 4 Cards Grid (2x2 balanced layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {automationProducts.map((product) => {
              const IconComp = product.icon;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-[28px] sm:rounded-[32px] border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-[#00a7e1]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top corner gradient accent on hover */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#00a7e1]/5 rounded-full blur-2xl group-hover:bg-[#00a7e1]/15 transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Card Top: Icon & Category Badge */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="size-14 rounded-2xl bg-[#031B3D] text-[#00a7e1] flex items-center justify-center group-hover:bg-[#00a7e1] group-hover:text-white transition-all duration-300 shadow-md shadow-[#031B3D]/10">
                        <IconComp className="size-7" />
                      </div>
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-slate-100 text-slate-700 border border-slate-200/80">
                        {product.badge}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#031B3D] group-hover:text-[#00a7e1] transition-colors mb-4 tracking-tight">
                      {product.title}
                    </h3>

                    {/* Card Description (Exact text from screenshot) */}
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-light mb-6">
                      {product.description}
                    </p>

                    {/* Highlights Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      {product.highlights.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Learn More Button (Centered like screenshot) */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00a7e1] hover:text-[#031B3D] transition-colors group/btn cursor-pointer py-2 px-4 rounded-xl hover:bg-[#00a7e1]/10"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Interactive "Learn More" Modal Dialog */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-white rounded-[28px] border border-slate-200 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00a7e1] block mb-1">
                  {selectedProduct.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#031B3D]">
                  {selectedProduct.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="size-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto py-5 space-y-6 pr-1">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Solution Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed font-light">
                  {selectedProduct.modalDetails.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Enterprise Capabilities
                </h4>
                <div className="space-y-2.5">
                  {selectedProduct.modalDetails.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="size-4 text-[#00a7e1] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Enterprise Use Cases
                </h4>
                <div className="space-y-2">
                  {selectedProduct.modalDetails.useCases.map((useCase, uIdx) => (
                    <div
                      key={uIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Performance: <strong className="text-[#031B3D]">{selectedProduct.impactMetric.label}</strong> ({selectedProduct.impactMetric.value})
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto text-xs"
                >
                  Close
                </Button>
                <Button
                  size="sm"
                  className="w-full sm:w-auto bg-[#00a7e1] hover:bg-[#008dbf] text-white text-xs font-semibold"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
