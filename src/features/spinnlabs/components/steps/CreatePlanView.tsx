'use client';

import React, { useState } from 'react';
import { LogIn, ArrowRight } from 'lucide-react';

export default function CreatePlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    /* Main background is clean light slate */
    <section className="min-h-screen bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased relative selection:bg-[#1BA6C7]/20">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 pb-6 border-b border-slate-600">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#0a1b3d]">
              Startup Conception <span className="text-[#1BA6C7]">Blueprint</span>
            </h2>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#0a1b3d] hover:bg-[#1BA6C7] border border-transparent text-white text-xs font-bold px-5 py-3 rounded-xl transition-all duration-300 tracking-wide active:scale-95 shadow-md shadow-slate-900/10"
          >
            <LogIn size={14} className="stroke-[2.5] text-[#1BA6C7]" />
            <span>Login</span>
          </button>
        </div>

        {/* Brand Themed Dark Callout Banner */}
        <div className="bg-[#0a1b3d] p-6 rounded-2xl mb-10 shadow-lg shadow-slate-200">
          <p className="text-slate-200 text-sm md:text-[15px] leading-relaxed font-medium">
            Conceiving a startup is an exciting but challenging process. To help you get started, here's a checklist of essential tasks to execute when conceiving a startup:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          
         
          <div className="bg-white border border-slate-600 rounded-3xl p-6 md:p-8 transition-all duration-300 group shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-6 rounded-full bg-[#1BA6C7]" />
              <h3 className="text-base md:text-lg font-bold text-[#0a1b3d] tracking-tight">
                Idea Generation and Validation
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] flex flex-col justify-between hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Identify a Problem:</strong> Start by identifying a real problem or need in the market that your startup can address.
                </p>
                <ArrowRight size={14} className="text-slate-400 mt-3 self-end group-hover:text-[#1BA6C7] transition-colors" />
              </div>
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] flex flex-col justify-between hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Market Research:</strong> Conduct thorough market research to understand the target audience, competition, and industry trends.
                </p>
                <ArrowRight size={14} className="text-slate-400 mt-3 self-end group-hover:text-[#1BA6C7] transition-colors" />
              </div>
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] flex flex-col justify-between hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Idea Validation:</strong> Test your startup idea with potential customers, gather feedback, and validate its viability.
                </p>
                <ArrowRight size={14} className="text-slate-400 mt-3 self-end group-hover:text-[#1BA6C7] transition-colors" />
              </div>
            </div>
          </div>

          {/* Card 2: Business Planning */}
          <div className="bg-white border border-slate-600 rounded-3xl p-6 md:p-8 transition-all duration-300 group shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-6 rounded-full bg-[#1BA6C7]" />
              <h3 className="text-base md:text-lg font-bold text-[#0a1b3d] tracking-tight">
                Business Planning
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Business Plan:</strong> Create a comprehensive business plan that outlines your vision, mission, objectives, and strategies.
                </p>
              </div>
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Target Market:</strong> Define your target market and buyer personas.
                </p>
              </div>
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Revenue Model:</strong> Determine how your startup will generate revenue (e.g., subscription, e-commerce, advertising).
                </p>
              </div>
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Financial Projections:</strong> Develop financial forecasts, including income statements, balance sheets, and cash flow statements.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Legal and Regulatory Considerations */}
          <div className="bg-white border border-slate-600 rounded-3xl p-6 md:p-8 transition-all duration-300 group shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-6 rounded-full bg-[#1BA6C7]" />
              <h3 className="text-base md:text-lg font-bold text-[#0a1b3d] tracking-tight">
                Legal and Regulatory Considerations
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Business Structure:</strong> Choose the legal structure for your startup (e.g., LLC, corporation, sole proprietorship).
                </p>
              </div>
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Name and Trademarks:</strong> Select a unique business name and check for trademark availability.
                </p>
              </div>
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Permits and Licenses:</strong> Identify and acquire any necessary permits and licenses for your industry and location.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Funding and Financing */}
          <div className="bg-white border border-slate-600 rounded-3xl p-6 md:p-8 transition-all duration-300 group shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-6 rounded-full bg-[#1BA6C7]" />
              <h3 className="text-base md:text-lg font-bold text-[#0a1b3d] tracking-tight">
                Funding and Financing
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Funding Strategy:</strong> Determine how you'll finance your startup (e.g., self-funding, loans, investors, crowdfunding).
                </p>
              </div>
              <div className="bg-[#0a1b3d] p-5 rounded-2xl border border-[#122852] hover:bg-[#0d2249] transition-all duration-200 shadow-md">
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-[#1BA6C7] font-bold block mb-1.5 text-[13px] uppercase tracking-wider">Pitch Deck:</strong> Prepare a compelling pitch deck for potential investors.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

       {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop Shadow Overlay */}
    <div 
      onClick={() => setIsModalOpen(false)} 
      className="absolute inset-0 bg-black/45 backdrop-blur-[1px] transition-opacity duration-300" 
    />

    {/* Modal Container */}
    <div className="relative bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full max-w-xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Modal Header - Now with #0a1b3d (Premium Dark Navy) */}
      <div className="flex justify-between bg-[#0a1b3d] items-center px-6 py-4">
        <h3 className="text-base font-bold text-white">Login</h3>
        <button 
          onClick={() => setIsModalOpen(false)}
          className="text-white/80 hover:text-white transition-colors text-xl font-light outline-hidden"
        >
          &times;
        </button>
      </div>
      <hr className="border-slate-100" />

      {/* Modal Body - Same as your original layout */}
      <div className="p-6 space-y-5">
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-white border border-slate-200 rounded-md p-4 text-xs font-semibold focus:outline-hidden focus:ring-1 focus:ring-[#1BA6C7] focus:border-[#1BA6C7] transition-all placeholder:text-slate-500 text-slate-800"
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Login Password" 
            className="w-full bg-white border border-slate-200 rounded-md p-4 text-xs font-semibold focus:outline-hidden focus:ring-1 focus:ring-[#1BA6C7] focus:border-[#1BA6C7] transition-all placeholder:text-slate-500 text-slate-800"
          />
        </div>
        
        {/* Reset Link */}
        <div className="text-xs">
          <span className="text-[#FF2A2A]">Forgot Password? </span>
          <span className="text-slate-900 font-bold hover:underline cursor-pointer">Click here</span>
          <span className="text-[#FF2A2A]"> to reset</span>
        </div>
      </div>
      
      {/* Body Bottom Divider */}
      <hr className="border-slate-100" />
      
      {/* Modal Footer - Maintained clean padding, Button matches #1BA6C7 (Cyan Accent) */}
      <div className="px-6 py-4 flex bg-slate-50 justify-end">
        <button 
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="bg-[#1BA6C7] hover:bg-[#0a1b3d] text-white text-xs font-bold px-6 py-2.5 rounded-md transition-colors tracking-wide"
        >
          Login
        </button>
      </div>

    </div>
  </div>
)}
    </section>
  );
}