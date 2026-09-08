import Image from "next/image";
import Link from "next/link";
import { Icon as IconifyIcon } from "@iconify-icon/react";
import { type ServiceDetailData } from "@/data/services-data";
import TestimonialSlider from "@/features/Products/components/ui/TestimonialSlider";

import OverviewFeaturedTech from "@/features/Products/components/OverviewFeaturedTech";
import OverviewWhyChoose from "@/features/Products/components/OverviewWhyChoose";
import OverviewMetrics from "@/features/Products/components/OverviewMetrics";
import OverviewTestimonials from "@/features/Products/components/OverviewTestimonials";
import OverviewPricing from "@/features/Products/components/OverviewPricing";
import OverviewPoweringBusiness from "@/features/Products/components/OverviewPoweringBusiness";
import RequestQuoteButton from "@/features/Products/components/ui/RequestQuoteButton";

export default function ServiceDetailView({
  data,
}: {
  data: ServiceDetailData;
}) {
  return (
    <main className="w-full bg-[#F4F7FA] min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full bg-[#031B3D]">
        <Image
          src="/images/Hero/Hero8.png"
          alt="Our Services Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-60 mix-blend-screen"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-36 sm:pb-32 lg:pt-44 lg:pb-40 relative z-10 text-center flex flex-col items-center justify-center min-h-[400px] sm:min-h-[450px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
            {data.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {data.hero.subtitle}
          </p>
          <div className="flex items-center justify-center gap-3 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-[#00a7e1] transition-colors">
              Home
            </Link>
            <IconifyIcon
              icon="lucide:chevrons-right"
              width={16}
              className="text-slate-500"
            />

            {data.slug === "all" ? (
              <span className="text-[#00a7e1]">Services</span>
            ) : (
              <>
                <Link
                  href="/services"
                  className="hover:text-[#00a7e1] transition-colors"
                >
                  Services
                </Link>
                <IconifyIcon
                  icon="lucide:chevrons-right"
                  width={16}
                  className="text-slate-500"
                />
                <span className="text-[#00a7e1]">{data.hero.title}</span>
              </>
            )}
          </div>
        </div>

        {/* Curved Cutout CTA Button at bottom of Hero Section */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-30 flex justify-center">
          <RequestQuoteButton />
        </div>
      </section>

      {data.slug === "all" ? (
        <>
          <OverviewFeaturedTech />
          <OverviewWhyChoose />
          <OverviewMetrics />
          <OverviewTestimonials />
          <OverviewPricing />
          <OverviewPoweringBusiness />
        </>
      ) : (
        <>
          {/* 2. Featured Practice Areas / Solutions */}
          {data.featuredSolutions && (
            <section className="py-24 sm:py-32 bg-white relative z-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031B3D] mb-4">
                    {data.featuredSolutions.title}
                  </h2>
                  <p className="text-slate-600 text-lg">
                    Explore proven enterprise services empowering organizations to scale securely.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {data.featuredSolutions.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
                    >
                      <div className="relative w-full h-48 bg-[#031B3D] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-[#031B3D] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                          {item.description}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#0057B8] hover:text-[#00a7e1] transition-colors mt-auto"
                        >
                          Learn More{" "}
                          <IconifyIcon icon="lucide:arrow-right" width={16} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 3. Why Choose Our Services */}
          {data.whyChoose && (
            <section className="py-24 sm:py-32 bg-[#031B3D] relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-tl-full pointer-events-none" />

              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Left Image with Badge */}
                  <div className="relative w-full max-w-md mx-auto lg:max-w-full">
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-tr from-[#0057B8] to-[#00a7e1] p-1">
                      <div className="relative w-full h-full rounded-[2.9rem] overflow-hidden bg-[#031B3D]">
                        <Image
                          src={data.whyChoose.image}
                          alt="Why Choose SPS"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover opacity-90"
                        />
                      </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 sm:bottom-10 sm:-right-10 bg-[#00a7e1] text-white p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center transform rotate-3">
                      <span className="text-3xl sm:text-4xl font-black mb-1 leading-none">
                        {data.whyChoose.badgeText.split("\n")[0]}
                      </span>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                        {data.whyChoose.badgeText.split("\n")[1] || "Experience"}
                      </span>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
                      {data.whyChoose.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      {data.whyChoose.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center mb-4 shadow-lg shadow-[#00a7e1]/20">
                            <IconifyIcon
                              icon="lucide:check"
                              width={20}
                              className="text-white"
                            />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">
                            {point.title}
                          </h4>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 4. Metrics */}
          {data.metrics && (
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                  {data.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center text-center px-4"
                    >
                      <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#00a7e1] tracking-tighter mb-2">
                        {metric.value}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#031B3D] uppercase tracking-wide">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 5. Testimonials */}
          {data.testimonials && (
            <section className="py-24 sm:py-32 bg-[#F4F7FA] overflow-hidden">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#031B3D] mb-12 leading-tight">
                      {data.testimonials.title}
                    </h2>
                    <div className="relative w-full max-w-sm mx-auto lg:mx-0 h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={data.testimonials.image}
                        alt="Testimonial Impact"
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <TestimonialSlider items={data.testimonials.items} />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 6. Pricing & Retainer Packages */}
          {data.pricing && (
            <section className="py-24 sm:py-32 bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031B3D] mb-4">
                    {data.pricing.title}
                  </h2>
                  <p className="text-slate-600 text-lg">
                    Transparent, predictable engagement packages designed for enterprise scale.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {data.pricing.plans.map((plan, idx) => (
                    <div
                      key={idx}
                      className={`relative flex flex-col rounded-3xl p-8 sm:p-10 transition-transform hover:-translate-y-2 duration-300 ${
                        plan.isPopular
                          ? "bg-[#031B3D] text-white shadow-2xl scale-105 z-10 border-2 border-[#00a7e1]"
                          : "bg-white text-[#031B3D] border border-slate-200 shadow-xl"
                      }`}
                    >
                      {plan.isPopular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00a7e1] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                          Most Popular
                        </div>
                      )}

                      <h3
                        className={`text-xl font-bold mb-4 ${
                          plan.isPopular ? "text-white" : "text-[#031B3D]"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <div className="flex items-end gap-1 mb-8">
                        <span
                          className={`text-4xl sm:text-5xl font-black ${
                            plan.isPopular ? "text-white" : "text-[#031B3D]"
                          }`}
                        >
                          {plan.price}
                        </span>
                        {plan.price !== "Free" && plan.price !== "Custom" && (
                          <span
                            className={`text-sm font-semibold mb-1 ${
                              plan.isPopular ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            /month
                          </span>
                        )}
                      </div>

                      <Link
                        href="/contact"
                        className={`w-full py-3.5 rounded-xl font-bold mb-8 transition-colors text-center inline-block ${
                          plan.isPopular
                            ? "bg-[#00a7e1] hover:bg-[#008dbf] text-white"
                            : "bg-[#F4F7FA] hover:bg-slate-200 text-[#031B3D]"
                        }`}
                      >
                        Get Started
                      </Link>

                      <ul className="flex flex-col gap-4 mt-auto">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3">
                            <div
                              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                                feature.included
                                  ? "bg-[#00a7e1]/20 text-[#00a7e1]"
                                  : "bg-transparent text-slate-300"
                              }`}
                            >
                              {feature.included ? (
                                <IconifyIcon
                                  icon="lucide:check"
                                  width={14}
                                  className={
                                    plan.isPopular ? "text-[#00a7e1]" : ""
                                  }
                                />
                              ) : (
                                <IconifyIcon
                                  icon="lucide:minus"
                                  width={14}
                                  className={
                                    plan.isPopular ? "text-slate-500" : ""
                                  }
                                />
                              )}
                            </div>
                            <span
                              className={`text-sm font-medium ${
                                !feature.included &&
                                (plan.isPopular
                                  ? "text-slate-500"
                                  : "text-slate-400")
                              } ${
                                feature.included &&
                                (plan.isPopular
                                  ? "text-slate-200"
                                  : "text-slate-600")
                              }`}
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 7. Bottom CTA */}
          {data.cta && (
            <section className="py-20 sm:py-24 bg-[#F4F7FA]">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[3rem] overflow-hidden bg-[#031B3D] flex flex-col md:flex-row items-center justify-between p-10 sm:p-16 shadow-2xl">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={data.cta.image}
                      alt="CTA Background"
                      fill
                      sizes="(max-width: 1024px) 100vw, 1152px"
                      className="object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031B3D] via-[#031B3D]/90 to-transparent" />
                  </div>

                  <div className="relative z-10 max-w-lg mb-10 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                      {data.cta.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="bg-[#00a7e1] hover:bg-[#008dbf] text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                      >
                        Schedule Consultation
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold transition-all flex items-center justify-center gap-2"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </div>

                  <div className="relative z-10 w-full md:w-1/2 flex justify-end">
                    <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#00a7e1] to-[#0057B8] opacity-50 blur-3xl mix-blend-screen" />
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
