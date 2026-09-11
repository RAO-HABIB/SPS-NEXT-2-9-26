'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Roundtable } from '@/data/activities-data';
import { Calendar, Clock, Monitor, Hourglass } from 'lucide-react';
import { LiaLinkedin } from 'react-icons/lia';

interface HeroProps {
  roundtable: Roundtable;
}

export default function RountableHero({ roundtable }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetDate = new Date(roundtable.eventDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, '0'),
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0')
      });
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [roundtable.eventDate]);

  return (
    <section className="relative text-white overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 bg-[#03122F]">
      <Image
        src="/images/Hero/Hero8.webp"
        alt='background'
        fill
        priority
        sizes="100vw"
        className='object-cover opacity-35 mix-blend-luminosity'
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#03122F]/90 via-[#03122F]/80 to-[#03122F] z-0" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-center">

        {/* Left Column: Title, Subtitle, Responsive Host Cards */}
        <div className="md:col-span-7 flex flex-col gap-6 sm:gap-7 lg:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#1BA6C7]/15 text-[#1BA6C7] border border-[#1BA6C7]/30 backdrop-blur-sm">
                {roundtable.category}
              </span>
              <span className="text-[11px] sm:text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                • {roundtable.topic}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {roundtable.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-normal max-w-xl leading-relaxed">
              {roundtable.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-slate-800/80">
            {/* Host Capsule */}
            <div className="flex items-center gap-3 bg-slate-900/75 backdrop-blur-md border border-slate-800 p-3 sm:p-3.5 rounded-2xl transition hover:border-slate-700">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400 overflow-hidden shrink-0">
                <Image
                  src={roundtable.host.image}
                  alt={roundtable.host.name}
                  fill
                  sizes="(max-width: 640px) 40px, 48px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-xs sm:text-sm text-white truncate">{roundtable.host.name}</span>
                  {roundtable.host.linkedIn && (
                    <a href={roundtable.host.linkedIn} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition text-sm sm:text-base shrink-0" aria-label="LinkedIn">
                      <LiaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </a>
                  )}
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400 block truncate">{roundtable.host.organization}</span>
              </div>
            </div>

            {/* Co-Host Capsule */}
            {roundtable.coHost && (
              <div className="flex items-center gap-3 bg-slate-900/75 backdrop-blur-md border border-slate-800 p-3 sm:p-3.5 rounded-2xl transition hover:border-slate-700">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-400 overflow-hidden shrink-0">
                  <Image
                    src={roundtable.coHost.image}
                    alt={roundtable.coHost.name}
                    fill
                    sizes="(max-width: 640px) 40px, 48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-bold text-xs sm:text-sm text-white truncate">{roundtable.coHost.name}</span>
                    {roundtable.coHost.linkedIn && (
                      <a href={roundtable.coHost.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition text-sm sm:text-base shrink-0" aria-label="LinkedIn">
                        <LiaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                      </a>
                    )}
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-400 block truncate">{roundtable.coHost.organization}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Unified Event Pass Card - Fully Responsive */}
        <div className="md:col-span-5 w-full max-w-lg mx-auto md:max-w-none">
          <div className="bg-slate-900/85 backdrop-blur-xl border border-slate-800/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 shadow-2xl flex flex-col gap-4 sm:gap-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 sm:pb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-cyan-400">
                  Next Live Session
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/60">
                Invite-Only
              </span>
            </div>

            {/* Session Info Rows (Responsive: stacks on mobile, side-by-side on sm:) */}
            <div className="flex flex-col gap-2.5 bg-slate-950/70 border border-slate-800/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                <span className="text-slate-400 flex items-center gap-1.5 font-medium text-[11px] sm:text-xs shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Session Date</span>
                </span>
                <span className="font-bold text-white text-xs sm:text-sm sm:text-right truncate">{roundtable.date}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-t border-slate-800/60 pt-2 sm:pt-2.5">
                <span className="text-slate-400 flex items-center gap-1.5 font-medium text-[11px] sm:text-xs shrink-0">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Session Time</span>
                </span>
                <span className="font-bold text-white text-xs sm:text-sm sm:text-right truncate">{roundtable.time}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 border-t border-slate-800/60 pt-2 sm:pt-2.5">
                <span className="text-slate-400 flex items-center gap-1.5 font-medium text-[11px] sm:text-xs shrink-0">
                  <Monitor className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Delivery Format</span>
                </span>
                <span className="font-bold text-cyan-300 text-xs sm:text-sm sm:text-right truncate">Virtual (Microsoft Teams)</span>
              </div>
            </div>

            {/* Live Countdown Clock */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 uppercase tracking-widest text-[10px] sm:text-[11px] text-slate-300">
                  <Hourglass className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Live Countdown</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Syncing
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 text-center">
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-1 shadow-inner">
                  <span className="block text-lg sm:text-xl md:text-2xl font-black text-cyan-300 font-mono leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] md:text-[11px] uppercase font-bold text-slate-400 tracking-wider mt-1 sm:mt-1.5">
                    Days
                  </span>
                </div>
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-1 shadow-inner">
                  <span className="block text-lg sm:text-xl md:text-2xl font-black text-cyan-300 font-mono leading-none">
                    {timeLeft.hours}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] md:text-[11px] uppercase font-bold text-slate-400 tracking-wider mt-1 sm:mt-1.5">
                    Hours
                  </span>
                </div>
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-1 shadow-inner">
                  <span className="block text-lg sm:text-xl md:text-2xl font-black text-cyan-300 font-mono leading-none">
                    {timeLeft.minutes}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] md:text-[11px] uppercase font-bold text-slate-400 tracking-wider mt-1 sm:mt-1.5">
                    Mins
                  </span>
                </div>
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-1 shadow-inner">
                  <span className="block text-lg sm:text-xl md:text-2xl font-black text-cyan-400 font-mono leading-none animate-pulse">
                    {timeLeft.seconds}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] md:text-[11px] uppercase font-bold text-slate-400 tracking-wider mt-1 sm:mt-1.5">
                    Secs
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Hero CTA to jump to form */}
            <a 
              href="#register-section"
              className="w-full bg-[#1BA6C7] hover:bg-[#158ca8] text-white font-extrabold text-xs sm:text-sm py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl transition duration-300 shadow-xl shadow-[#1BA6C7]/20 flex items-center justify-center gap-2 group"
            >
              <span>Register for Next Session</span>
              <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}