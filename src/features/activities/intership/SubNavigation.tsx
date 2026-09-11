'use client';

import React, { useState } from 'react';

type NavKey = 'How It Works' | 'Career Fields' | 'Who We Are';

const navData: Record<NavKey, string[]> = {
  'How It Works': ['Overview', 'Areas Of Internship', 'Why SPS', 'What You Do', 'Eligibility', 'Application Process', 'FAQs'],
  'Career Fields': ['Operations', 'Technical', 'Sales'],
  'Who We Are': ['Our Purpose', 'Our Values', 'Mission', 'What Makes Us Different', 'Our Future', 'Meet Our Experts'],
};

export default function SubNavigation() {
  // Desktop state (Null rakha hai taake default mein menu closed rahe)
  const [activeTab, setActiveTab] = useState<NavKey | null>(null);
  
  // Mobile states
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<NavKey | null>('How It Works');

  // Smooth transition ke liye active items nikal rahe hain
  const activeItems = activeTab ? navData[activeTab] : [];

  return (
    <div className="w-full relative z-50">
      {/* ---------------- DESKTOP VIEW ---------------- */}
      
      {/* Hover container: Mouse baahar jate hi activeTab null ho jayega aur menu band ho jayega */}
      <div 
        className="hidden md:block w-full"
        onMouseLeave={() => setActiveTab(null)}
      >
        {/* Top Bar (Dark Blue) */}
        <div className="bg-[#1a1b3a] text-white border-b border-indigo-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex gap-8 items-center font-semibold text-sm">
              {(Object.keys(navData) as NavKey[]).map((key) => (
                <div
                  key={key}
                  onMouseEnter={() => setActiveTab(key)} // Hover pe menu active hoga
                  className="relative py-2 cursor-pointer flex items-center gap-1.5 hover:text-gray-300 transition"
                >
                  <span>{key}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeTab === key ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              ))}
              <a href="#contact" className="hover:text-gray-300 transition py-2">Contact Us</a>
            </div>
            <button className="bg-white text-[#1a1b3a] px-6 py-1.5 rounded-full font-bold text-sm hover:bg-gray-100 transition shadow-sm">
              Login to Intern Portal
            </button>
          </div>
        </div>

        {/* Sub-links Bar (Smooth Slide-down/Fade effect on Hover) */}
        <div 
          className={`bg-[#f4f5f7] border-b border-gray-200 transition-all duration-300 ease-in-out ${
            activeTab 
              ? 'opacity-100 max-h-16 visible' 
              : 'opacity-0 max-h-0 py-0 invisible overflow-hidden border-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center text-sm font-semibold text-blue-900 whitespace-nowrap">
            {activeItems.map((item, index) => (
              <React.Fragment key={item}>
                <a 
                  href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} 
                  className="hover:text-blue-600 transition px-3"
                >
                  {item}
                </a>
                {index < activeItems.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE VIEW ---------------- */}
      
      {/* Mobile Top Header */}
      <div className="md:hidden bg-[#1a1b3a] text-white flex items-center justify-between px-4 py-3">
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-1 outline-none">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
        <div className="font-bold text-sm tracking-wide text-center leading-tight">
          INTERNSHIP TO<br/>JOB PROGRAM
        </div>
        <button className="bg-white text-[#1a1b3a] px-3 py-1.5 rounded-full font-bold text-[10px] tracking-wide">
          INTERN LOGIN
        </button>
      </div>

      {/* Mobile Sidebar Menu (Accordion Style) */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1b3a] text-white shadow-xl flex flex-col h-screen overflow-y-auto pb-32 border-t border-indigo-900">
          {(Object.keys(navData) as NavKey[]).map((key) => (
            <div key={key} className="border-b border-indigo-900/50">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                className="w-full flex justify-between items-center px-6 py-4 font-bold text-left text-sm"
              >
                {key}
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${mobileExpanded === key ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {/* Mobile Sub-links */}
              {mobileExpanded === key && (
                <div className="flex flex-col bg-[#14142b]">
                  {navData[key].map((item) => (
                    <a 
                      href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} 
                      key={item} 
                      className="px-8 py-3 text-sm font-semibold border-t border-indigo-900/30 hover:bg-indigo-900/40 transition"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contact" className="px-6 py-4 font-bold border-b border-indigo-900/50 block text-sm">Contact Us</a>
        </div>
      )}
    </div>
  );
}