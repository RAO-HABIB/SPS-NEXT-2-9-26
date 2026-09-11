"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import {
  ChevronRight,
  Bell,
  Sparkles,
  Calendar,
  Users,
  Layers,
  ArrowRight,
  CheckCircle2,
  Lock,
} from "lucide-react";

interface Props {
  title: string;
  category?: string;
  description?: string;
  badgeText?: string;
  breadcrumb: { label: string; href?: string }[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export default function ComingSoonView({
  title,
  category = "Activities",
  description = "We are currently curating high-impact sessions and exclusive content for this initiative. Stay tuned for upcoming announcements, dates, and registration links!",
  badgeText = "Coming Soon",
  breadcrumb,
  primaryAction = { label: "Explore Past Webinars", href: "/Activities/Webinars/past" },
  secondaryAction = { label: "Contact SPS Team", href: "/Contact" },
}: Props) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const expectations = [
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "Industry Thought Leaders",
      desc: "Insights, keynote presentations, and real-world case studies from enterprise architects and executives.",
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Interactive Deep Dives",
      desc: "Live architectures, technology demonstrations, and actionable guidance across AI, Cloud, and Cybersecurity.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-teal-400" />,
      title: "Exclusive Playbooks",
      desc: "Downloadable reference architectures, assessment templates, and milestone checklists for participants.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "Live Q&A & Networking",
      desc: "Direct access to SPS subject matter experts, technology partners, and peer collaborative discussions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#03122F]">
      <Navbar />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative w-full overflow-hidden bg-[#03122F] text-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
        {/* Background Image with Ambient Glow & Gradient Overlays */}
        <Image
          src="/images/Hero/Hero8.webp"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03122F]/90 via-[#03122F]/80 to-[#03122F] z-0" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1BA6C7]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* Breadcrumb Navigation - Responsive & Non-clipping */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm text-slate-400">
              {breadcrumb.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5 sm:gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-cyan-400 transition-colors uppercase tracking-wider"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-cyan-400 font-semibold uppercase tracking-wider truncate max-w-[220px] sm:max-w-none">
                      {item.label}
                    </span>
                  )}
                  {idx < breadcrumb.length - 1 && (
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-600 shrink-0" />
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="max-w-4xl flex flex-col items-start gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest bg-[#1BA6C7]/15 text-[#1BA6C7] border border-[#1BA6C7]/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1BA6C7] animate-pulse" />
              {badgeText}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== MAIN COMING SOON CONTENT ==================== */}
      <main className="flex-1 bg-white text-[#0a1b3d] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

          {/* Notification / Stay in Loop Box */}
          <section className="bg-gradient-to-br from-[#03122F] via-[#051C42] to-[#03122F] text-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-[#1BA6C7]/30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1BA6C7]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <span className="text-[#1BA6C7] text-xs font-bold tracking-widest uppercase">
                  Stay Informed
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  Be the first to know when registrations open
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                  Leave your business email and we will send you early-bird access, session agenda updates, and calendar invitations directly to your inbox.
                </p>
              </div>

              {/* Form / Confirmation */}
              <div className="lg:col-span-5 w-full">
                {isSubscribed ? (
                  <div className="bg-emerald-950/80 border border-emerald-500/50 p-6 rounded-2xl text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">You're on the priority list!</h3>
                    <p className="text-xs text-emerald-200">
                      We'll notify you as soon as this session is scheduled.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your corporate email..."
                        className="w-full sm:flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#1BA6C7] focus:ring-1 focus:ring-[#1BA6C7] transition-all"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 bg-[#1BA6C7] hover:bg-[#0e7a94] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#1BA6C7]/30 shrink-0 cursor-pointer w-full sm:w-auto"
                      >
                        <Bell className="w-4 h-4" />
                        <span>Notify Me</span>
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Zero spam. Unsubscribe anytime with 1-click.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* What to Expect Grid */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center max-w-2xl mx-auto px-2">
              <span className="inline-block px-3 py-1 bg-[#1BA6C7]/10 text-[#0e7a94] rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3">
                Program Highlights
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0a1b3d]">
                What to Expect from SPS Sessions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {expectations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#1BA6C7]/60 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#03122F] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0a1b3d] group-hover:text-[#1BA6C7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1b3d]">
                Looking for on-demand knowledge right now?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore our full library of recorded past webinars and technology sessions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0 justify-center md:justify-end">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="inline-flex items-center justify-center gap-2 bg-[#0a1b3d] hover:bg-[#132c5f] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-sm w-full sm:w-auto"
                >
                  <span>{primaryAction.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0a1b3d] border border-slate-300 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all w-full sm:w-auto"
                >
                  <span>{secondaryAction.label}</span>
                </Link>
              )}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
