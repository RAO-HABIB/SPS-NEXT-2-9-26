import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Cpu, Database, Leaf, ArrowRight } from "lucide-react";
import IbmPillarsShowcase from "@/features/Products/components/IbmPillarsShowcase";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryOverviewPage({ params }: CategoryPageProps) {
  const { category } = await params;

  // Currently IBM is the primary enterprise category hub
  if (category !== "ibm") {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[#F8F9FB]">
        {/* 1. Category Hero Section */}
        <section className="relative w-full min-h-[520px] sm:min-h-[580px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Hero/Hero8.png"
              alt="IBM Enterprise Ecosystem Background"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#031B3D]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031B3D] via-transparent to-transparent opacity-90" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <Link href="/products" className="hover:text-white transition-colors">
                  PRODUCTS
                </Link>
                <span>›</span>
                <span className="text-white">IBM ENTERPRISE</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/20 mb-4 backdrop-blur-xs">
                <Sparkles className="size-3.5 text-cyan-400" />
                Strategic IBM Technology Partner
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                IBM Technology Ecosystem
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-light max-w-2xl">
                Deploy mission-critical cognitive intelligence, hybrid cloud lakehouses, zero-trust security, and intelligent ESG operations with SPS-certified enterprise architects.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#pillars-grid"
                  className="inline-flex items-center justify-center bg-[#00a7e1] hover:bg-[#008dbf] text-white rounded-md px-7 py-3 text-sm font-semibold shadow-lg shadow-[#00a7e1]/30 transition-all hover:scale-105 cursor-pointer"
                >
                  Explore 4 IBM Pillars
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-md px-7 py-3 text-sm font-semibold transition-all hover:scale-105 backdrop-blur-xs cursor-pointer"
                >
                  Schedule Technical Briefing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The 4 IBM Pillars Showcase featuring the Framer Hover Cards */}
        <section id="pillars-grid" className="py-20 sm:py-28 bg-[#F8F9FB] border-b border-slate-200/80">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <IbmPillarsShowcase
              eyebrow="Core Architecture"
              title="Four Foundational IBM Pillars"
              subtitle="Hover over each domain to uncover specialized enterprise capabilities, certified architectures, and direct access to production-ready deployments."
            />
          </div>
        </section>

        {/* 3. Enterprise Value Matrix */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a7e1]/40 transition-colors">
                <div className="size-12 rounded-xl bg-[#031B3D] text-[#00a7e1] flex items-center justify-center mb-4">
                  <Cpu className="size-6" />
                </div>
                <h3 className="font-bold text-[#031B3D] text-lg mb-2">Automation</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  Up to 80% reduction in workflow latency with generative watsonx AI orchestration.
                </p>
                <Link
                  href="/products/ibm/automation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a7e1] hover:underline mt-4"
                >
                  View Automation <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a7e1]/40 transition-colors">
                <div className="size-12 rounded-xl bg-[#031B3D] text-[#00a7e1] flex items-center justify-center mb-4">
                  <Database className="size-6" />
                </div>
                <h3 className="font-bold text-[#031B3D] text-lg mb-2">Data & AI</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  Open data lakehouse architecture reducing compute and query overhead by up to 50%.
                </p>
                <Link
                  href="/products/ibm/data-ai"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a7e1] hover:underline mt-4"
                >
                  View Data & AI <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a7e1]/40 transition-colors">
                <div className="size-12 rounded-xl bg-[#031B3D] text-[#00a7e1] flex items-center justify-center mb-4">
                  <Shield className="size-6" />
                </div>
                <h3 className="font-bold text-[#031B3D] text-lg mb-2">Security</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  Zero-trust identity mesh, automated threat containment, and continuous compliance.
                </p>
                <Link
                  href="/products/ibm/security"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a7e1] hover:underline mt-4"
                >
                  View Security <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a7e1]/40 transition-colors">
                <div className="size-12 rounded-xl bg-[#031B3D] text-[#00a7e1] flex items-center justify-center mb-4">
                  <Leaf className="size-6" />
                </div>
                <h3 className="font-bold text-[#031B3D] text-lg mb-2">Sustainability</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  Scope 1, 2, and 3 carbon accounting paired with predictive Maximo asset lifecycle intelligence.
                </p>
                <Link
                  href="/products/ibm/sustainability"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a7e1] hover:underline mt-4"
                >
                  View Sustainability <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
