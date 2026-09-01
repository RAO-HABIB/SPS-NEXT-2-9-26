"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { HOW_INTRO, STEPS, type Step } from "../../lib/howitworks";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export default function HowItWorks() {
  const thumbImage: string = STEPS[0]?.image ?? HOW_INTRO.image;

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="mx-auto w-full max-w-[500px] lg:max-w-[600px]">
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="overflow-hidden rounded-2xl sm:rounded-[30px]">
                <Image
                  src={HOW_INTRO.image}
                  alt={HOW_INTRO.title}
                  width={567}
                  height={592}
                  quality={50}
                  className="h-[320px] sm:h-[460px] lg:h-[500px] w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 left-4 right-4 rounded-2xl sm:rounded-3xl bg-white p-3 sm:p-5 shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-[340px]">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-[#0057B8]/10">
                    <Image
                      src={thumbImage}
                      alt={STEPS[0]?.title ?? HOW_INTRO.title}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="grid flex-1 grid-cols-2 gap-2 sm:gap-3">
                    {HOW_INTRO.stats.map((stat: Stat) => (
                      <div key={stat.label}>
                        <h3 className="text-xl sm:text-2xl font-extrabold leading-none text-slate-900">
                          {stat.value}
                          {stat.suffix}
                        </h3>
                        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-semibold leading-tight sm:leading-5 text-slate-700">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] lg:max-w-[600px] mt-8 sm:mt-10 lg:mt-0">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-[#0057B8]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#0057B8]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0057B8]" />
              Our Process
            </span>

            <h2
              className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight text-slate-900 lg:leading-[1.12]"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              {HOW_INTRO.title}
            </h2>

            <p
              className="mt-4 sm:mt-6 max-w-[60ch] text-sm sm:text-base leading-relaxed sm:leading-8 text-slate-600"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {HOW_INTRO.description}
            </p>

            <ul
              className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              {STEPS.map((step: Step) => (
                <li key={step.number} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="mt-0.5 sm:mt-1 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[#0057B8] text-white">
                    <Icon icon="mdi:check" width={10} className="sm:w-[12px]" />
                  </span>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {step.number}. {step.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed sm:leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 sm:mt-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link
                href={HOW_INTRO.cta.href}
                className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#03122F] px-5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-[#0057B8] hover:shadow-[0_14px_30px_rgba(0,87,184,0.28)]"
              >
                <span>{HOW_INTRO.cta.label}</span>
                <span className="flex h-7 w-7 sm:h-9 sm:w-10 items-center justify-center rounded-full bg-white text-[#03122F]">
                  <Icon icon="lucide:arrow-right" width={14} className="sm:w-[18px]" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}