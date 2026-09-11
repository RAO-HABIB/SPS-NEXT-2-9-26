'use client';

import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

export default function SignAgreement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-100 bg-white py-12 px-4 md:px-8 text-slate-800 antialiased relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Row with Login Button */}
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#121132] hover:bg-[#1a1849] text-white text-xs font-bold px-4 py-2.5 rounded-md transition-all tracking-wide active:scale-95"
          >
            <LogIn size={13} className="stroke-[2.5]" />
            <span>Login</span>
          </button>
        </div>

        {/* Entrepreneurship Agreement Paragraph */}
        <p className="text-slate-800 text-[13px] md:text-[14px] leading-relaxed max-w-full text-justify md:text-left">
          The Entrepreneurship Agreement establishes an arrangement between parties' intent to collaborate on a business venture. It outlines key provisions, including the development of a Business Plan, contributions from the Parties to make it financially viable, and the establishment of a for-profit entity upon achieving milestones. Equity distribution is based on contributions, and the Parties may permit additional individuals or entities to join. Disputes will be resolved through negotiation and arbitration. The agreement also covers intellectual property rights and various procedural details related to decision-making, costs, and dispute resolution. Amendments require written consent from all Parties.
        </p>

      </div>

      {/* LOGIN MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Shadow Overlay */}
          <div 
            onClick={() => setIsModalOpen(false)} 
            className="absolute inset-0 bg-black/45 backdrop-blur-[1px] transition-opacity duration-300" 
          />

          {/* Modal Container */}
          <div className="relative bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full max-w-xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4">
              <h3 className="text-base font-bold text-slate-900">Login</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors text-xl font-light outline-none"
              >
                &times;
              </button>
            </div>
            
            {/* Header Thin Divider */}
            <hr className="border-slate-100" />
            
            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white border border-slate-200 rounded-md p-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-500 text-slate-800"
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="Login Password" 
                  className="w-full bg-white border border-slate-200 rounded-md p-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-500 text-slate-800"
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
            
            {/* Modal Footer */}
            <div className="px-6 py-4 flex justify-end">
              <button 
                onClick={() => {
                  // Handle login logic here
                  setIsModalOpen(false);
                }}
                className="bg-[#0070F3] hover:bg-[#0062CC] text-white text-xs font-bold px-6 py-2.5 rounded-md transition-colors tracking-wide"
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