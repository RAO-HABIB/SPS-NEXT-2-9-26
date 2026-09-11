import React from 'react';
import { Roundtable } from '@/data/activities-data';
import { 
  CheckCircle2, 
  Goal, 
  CalendarRange, 
  Users, 
  GraduationCap, 
  Clock, 
  MonitorPlay, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  FileText, 
  ArrowUpRight,
  Shield,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import RountableRegistrationForm from './RoundtableRegistrationForm';

interface ContentProps {
  roundtable: Roundtable;
}

export default function RountableContent({ roundtable }: ContentProps) {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14 lg:gap-16">
      
      {/* 1. Full-Width Key Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-4 transition hover:shadow-md">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1BA6C7] flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-slate-400">
              Cadence & Time
            </span>
            <span className="block text-xs sm:text-sm font-extrabold text-slate-800 truncate">
              3rd Thu / Month • 1-2 PM
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-4 transition hover:shadow-md">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1BA6C7] flex items-center justify-center shrink-0">
            <CalendarRange className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-slate-400">
              Upcoming Date
            </span>
            <span className="block text-xs sm:text-sm font-extrabold text-slate-800 truncate">
              {roundtable.date}
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-4 transition hover:shadow-md">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1BA6C7] flex items-center justify-center shrink-0">
            <MonitorPlay className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-slate-400">
              Delivery Format
            </span>
            <span className="block text-xs sm:text-sm font-extrabold text-slate-800 truncate">
              Virtual (Microsoft Teams)
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-4 transition hover:shadow-md">
          <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-slate-400">
              Participation Access
            </span>
            <span className="block text-xs sm:text-sm font-extrabold text-slate-800 truncate">
              VA State & Local Public Sector
            </span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Two-Column Section: About & Value Props VS Sticky Registration Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
        
        {/* Left Column (col-span-7) with guaranteed flex gap */}
        <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
          
          {/* About description card */}
          <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#083ea9] border border-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-[#1BA6C7]" />
                <span>Executive Overview</span>
              </div>
              <span className="text-xs text-slate-400 font-semibold">
                Virginia Public Sector
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {roundtable.aboutTitle}
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {roundtable.aboutDescription}
            </p>

            {/* Key Framework Focus Badges */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
              {['SEC530 Standard', 'NIST 800-53 Controls', 'SBSD Case Study', 'Practitioner-Led', 'Continuous Audit Readiness'].map((tag, i) => (
                <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Why Attend Section */}
          <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-[#1BA6C7]" />
                {roundtable.whyAttendTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{roundtable.whyAttendIntro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roundtable.whyAttendPoints.map((point, index) => (
                <div key={index} className="flex gap-3.5 items-start p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#1BA6C7]/30 hover:shadow-sm transition group">
                  <span className="w-7 h-7 rounded-xl bg-blue-50 text-[#1BA6C7] flex items-center justify-center text-xs font-black shrink-0 group-hover:bg-[#1BA6C7] group-hover:text-white transition-colors">
                    0{index + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Goals and Objectives Section */}
          <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <Goal className="w-6 h-6 text-[#1BA6C7]" />
              {roundtable.goalsTitle}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roundtable.goals.map((goal, index) => (
                <div key={index} className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#1BA6C7]/40 hover:shadow-md transition-all space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1BA6C7] flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 text-[#1BA6C7]" />
                    </div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                      {goal.bold}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {goal.text.startsWith('- ') ? goal.text.slice(2) : goal.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Registration Form + Trust Guidelines with flex gap */}
        <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none flex flex-col gap-6 sm:gap-8 lg:sticky lg:top-28">
          
          {/* Registration Form Card */}
          <div id="register-section" className="bg-white border border-slate-200/90 shadow-2xl rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
            <div className="text-center flex flex-col gap-2 border-b border-slate-100 pb-4">
              <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#083ea9] w-fit mx-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1BA6C7]" />
                <span>Reserve Your Seat</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Roundtable Registration
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Complete this form to receive your secure session credentials and calendar invitation.
              </p>
            </div>
            
            {/* Form Component */}
            <RountableRegistrationForm />
          </div>

          {/* Participation Guidelines Card */}
          <div className="bg-[#03122F] text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col gap-4">
            <div className="flex items-center gap-2.5 text-cyan-400 font-extrabold text-sm uppercase tracking-wider">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Participation Rules</span>
            </div>
            
            <div className="flex flex-col gap-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <p className="leading-relaxed">
                  <strong className="text-white">Chatham House Rule:</strong> Participants are free to use information received, but identity and agency affiliations remain strictly confidential.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <p className="leading-relaxed">
                  <strong className="text-white">Practitioner-Led:</strong> Candid dialogue led by state and local security officers addressing real operational bottlenecks.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <p className="leading-relaxed">
                  <strong className="text-white">Zero Cost to Agencies:</strong> Organized and facilitated by SPS as a public service initiative for Virginia commonwealth agencies.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 3. Full-Width Agenda Roadmap Section with guaranteed gap */}
      <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-5 sm:pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#083ea9]">
              <CalendarRange className="w-3.5 h-3.5 text-[#1BA6C7]" />
              <span>Session Structure</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {roundtable.agendaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Structured modules covering both high-level governance and granular technical controls.
            </p>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest self-start sm:self-auto">
            60-Minute Interactive Session
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {roundtable.agenda.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 hover:border-[#1BA6C7]/30 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#083ea9] group-hover:bg-[#1BA6C7] group-hover:text-white transition-colors flex items-center justify-center font-extrabold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    Module {idx + 1}
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-slate-900 leading-snug">
                  {item.text}
                </h4>
              </div>
              <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center gap-1 text-[11px] text-[#1BA6C7] font-semibold">
                <span>Discussion & Q&A</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Balanced Audience Section: Who Should Join & Ideal Participants */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Who Should Join (col-span-7) */}
        <div className="lg:col-span-7 bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <Users className="w-6 h-6 text-[#1BA6C7]" />
              {roundtable.whoShouldJoinTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Key roles responsible for public sector information security, compliance, and governance:
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {roundtable.whoShouldJoin.map((who, index) => (
              <div key={index} className="flex gap-3.5 items-center p-3.5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-[#1BA6C7]/30 transition">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1BA6C7] flex items-center justify-center font-bold text-xs shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#1BA6C7]" />
                </div>
                <div className="min-w-0">
                  <strong className="text-slate-900 font-bold text-xs sm:text-sm block">
                    {who.bold}
                  </strong>
                  <span className="text-xs text-slate-600 block">
                    {who.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Participants Callout (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 border border-[#1BA6C7]/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col gap-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1BA6C7]/15 text-[#1BA6C7] flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {roundtable.idealParticipantsTitle}
            </h3>
            
            <p className="text-sm leading-relaxed text-slate-700">
              {roundtable.idealParticipantsText}
            </p>

            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs space-y-1.5">
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">
                Session Prerequisite
              </span>
              <p className="text-xs text-slate-600">
                Active employment or direct advisory role within Virginia state, municipal, county, or higher-education public sector agencies.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1BA6C7]/20">
            <a 
              href="#register-section"
              className="inline-flex items-center justify-center w-full bg-[#03122F] hover:bg-slate-900 text-white font-extrabold text-sm py-4 px-6 rounded-2xl transition shadow-lg gap-2"
            >
              <span>Apply for Roundtable Seat</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}