"use client";

import { useEffect, useRef, useState } from "react";

export interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface OverviewMetricsProps {
  stats?: StatItem[];
  duration?: number;
  divider?: boolean;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedNumber({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = true,
  shouldStart = false,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: boolean;
  shouldStart?: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) return;

    if (raf.current) cancelAnimationFrame(raf.current);

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = easeOutExpo(progress);
      const current = eased * end;

      const formatted = separator
        ? current.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : current.toFixed(decimals);

      setDisplay(formatted);

      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [shouldStart, end, duration, decimals, separator]);

  return (
    <span className="font-extrabold tracking-tight tabular-nums text-4xl sm:text-5xl lg:text-6xl text-[#031B3D] group-hover:text-[#00a7e1] transition-colors duration-300 leading-none select-none">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const DEFAULT_STATS: StatItem[] = [
  {
    value: 20,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Years of Strategic Innovation",
  },
  {
    value: 99.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "System Uptime & SLA Guarantee",
  },
  {
    value: 76,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Enterprise Projects Delivered",
  },
  {
    value: 42,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Global Technical Certifications",
  },
];

export default function OverviewMetrics({
  stats = DEFAULT_STATS,
  duration = 2,
  divider = true,
}: OverviewMetricsProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-white border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8 items-center justify-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Vertical divider between items on desktop */}
              {divider && i > 0 && (
                <div
                  className="hidden lg:block absolute left-0 top-[15%] h-[70%] w-px bg-slate-200"
                  aria-hidden="true"
                />
              )}

              {/* Animated Stat Value */}
              <div className="flex items-center justify-center min-h-[48px] sm:min-h-[60px]">
                <AnimatedNumber
                  end={stat.value}
                  duration={duration}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  separator={true}
                  shouldStart={started}
                />
              </div>

              {/* Stat Label */}
              <span className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base font-medium text-slate-500 leading-relaxed max-w-[210px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
