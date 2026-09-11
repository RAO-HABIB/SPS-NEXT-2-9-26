'use client';

import React, { useState } from 'react';
import { Play, Lock, Sliders } from 'lucide-react';

export default function EquityModelView() {
  // Interactive "Pie Slices" state
  const [cashSlice, setCashSlice] = useState(60);
  const [laborSlice, setLaborSlice] = useState(40);

  const totalSlices = cashSlice + laborSlice;
  const cashPercentage = Math.round((cashSlice / totalSlices) * 100);
  const laborPercentage = Math.round((laborSlice / totalSlices) * 100);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16 text-slate-800 font-sans antialiased">
      
      {/* Section 1: Equity Distribution */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Equity Distribution</h2>
          <div className="h-1 w-16 bg-indigo-600 rounded"></div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">We implement the Slicing Pie Model for Fair Equity Allocation</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            The Slicing Pie model uses science to achieve the perfect dynamic equity split in early-stage, bootstrapped startups. This framework guarantees that everyone gets a completely fair portion based on what they put in. The core principle is straightforward: a person's percentage share of equity should always align with their share of relative contributions.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            In a bootstrapped company, a wide range of valuable inputs exist, such as time, money, ideas, relationships, equipment/facilities, and any other inputs that would typically be compensated with cash. This framework tracks both cash and non-cash contributions, converting them to a standard unit called "Slices."
          </p>
        </div>
        
        {/* Video Placeholder */}
        <div className="lg:col-span-5">
          <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-md aspect-video bg-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80')" }}></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
            <div className="relative text-center p-4 z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2 cursor-pointer">
                <Play size={20} fill="currentColor" />
              </div>
              <h4 className="text-xs font-bold text-white tracking-wide">PERFECTLY FAIR COFOUNDER EQUITY SPLITS</h4>
              <p className="text-[10px] text-slate-300 mt-1">Slicing Pie Explainer Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Formula / Slices Split (Interactive Design) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm">
        {/* Interactive Calculator */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-xl p-6 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">Interactive Model Engine</span>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-600 flex justify-between">
                <span>Cash Investments (Slices):</span>
                <span className="text-indigo-600">{cashSlice} slices</span>
              </label>
              <input 
                type="range" min="10" max="200" value={cashSlice} 
                onChange={(e) => setCashSlice(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-ew-resize h-1 bg-slate-200 rounded-lg appearance-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-600 flex justify-between">
                <span>Labor Contributions (Slices):</span>
                <span className="text-emerald-600">{laborSlice} slices</span>
              </label>
              <input 
                type="range" min="10" max="200" value={laborSlice} 
                onChange={(e) => setLaborSlice(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-ew-resize h-1 bg-slate-200 rounded-lg appearance-none"
              />
            </div>
          </div>

          {/* Visual Dynamic Donut Chart */}
          <div className="flex items-center justify-around bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-center">
              <p className="text-[10px] uppercase font-semibold text-slate-400">Cash share</p>
              <p className="text-lg font-extrabold text-indigo-600">{cashPercentage}%</p>
            </div>
            <div className="relative w-16 h-16 rounded-full flex items-center justify-center border-4 border-slate-100" style={{ background: `conic-gradient(#4f46e5 ${cashPercentage}%, #10b981 ${cashPercentage}% 100%)` }}>
              <div className="absolute inset-2 bg-white rounded-full"></div>
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase font-semibold text-slate-400">Labor share</p>
              <p className="text-lg font-extrabold text-emerald-500">{laborPercentage}%</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Individual Equity Share = Individual Slices ÷ Total Slices
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            This formula guarantees that you'll get exactly your fair equity split at any given moment, matching your real contribution percentage. It remains dynamic as long as your company builds equity, achieves profitability, or secures enough funding to compensate participants for contributions. At that point, the equity freeze occurs and transitions into a standard static structure.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Slicing Pie not only ensures a fair equity split but also contains a robust framework for managing departures of team members prior to breakeven. This model is endorsed by entrepreneurs worldwide and is known as the ultimate standard in dynamic equity allocation.
          </p>
        </div>
      </section>

      {/* Section 3: Always 100% Fair / Managing Your Equity Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-sm">
          <h4 className="text-base font-bold text-slate-900 mb-3">Always 100% Fair</h4>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Our dynamic model recalculates equity values accurately based on real, tangible variables. No matter when team members join, what tasks they perform, or how high the initial contributions were, the cap table continues to self-correct automatically. This eliminates friction among founders, employees, and advisors.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-sm">
          <h4 className="text-base font-bold text-slate-900 mb-3">Managing Your Equity Split is as Easy as Pie</h4>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            The Pie Slicer software simplifies the management of individual equity allocation. With easy-to-use inputs to register hours, cash contributions, equipment value, and intellectual properties, you can ensure that the equity splits stay synchronized with real efforts.
          </p>
        </div>
      </section>

      {/* Section 4: Keep Track of Contributions */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm">
        <div className="lg:col-span-5 order-2 lg:order-1 bg-slate-50 p-6 rounded-xl border border-slate-200/80">
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold border-b pb-2 text-slate-700">
              <span>Member</span>
              <span>Contributions</span>
              <span>Calculated Share</span>
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Founder A</span>
              <span>400 Slices</span>
              <span className="font-bold text-indigo-600">57.1%</span>
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Co-founder B</span>
              <span>300 Slices</span>
              <span className="font-bold text-teal-500">42.9%</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Keep track of what people actually contribute</h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            The Pie Slicer system simplifies tracking of critical resources like time, cash expenses, equipment, patents, and relationships. Teams can easily register contributions in real-time on desktop or mobile apps.
          </p>
        </div>
      </section>

      {/* Section 5: Manage Access & Monitor */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm">
        <div className="lg:col-span-7 space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Manage access and monitor contributions</h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Team members can log activities and track progress directly. Dynamic admin access roles ensure you maintain secure permission tiers while giving contributors visibility into their current slices and share valuation.
          </p>
        </div>
        <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Lock size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Admin Controls</p>
              <p className="text-[10px] text-slate-400">Manage viewing permissions and slice multipliers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Cash Investments "Well" */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm">
        <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/80 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-800">Company "Well" Balance</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">$12,500</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
            <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Track direct cash investments with the Well</h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            The Well feature handles direct cash deposits, ensuring cash reserves are clearly recorded and converted to higher slice values (multiplying factor to reward cash risk) only as the funds are spent.
          </p>
        </div>
      </section>

      {/* Section 7: Custom Policies */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm">
        <div className="lg:col-span-7 space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Customize variables based on your company's policies</h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            While the standard framework provides optimal defaults, you can easily tweak core parameters, like multiplier variables, role-based slice multipliers, and maximum caps, depending on your jurisdiction.
          </p>
        </div>
        <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/80">
          <div className="flex items-center gap-2 mb-2">
            <Sliders size={16} className="text-indigo-600" />
            <span className="text-xs font-bold text-slate-800 font-mono">Custom Parameters Active</span>
          </div>
          <div className="text-[10px] text-slate-500 space-y-1">
            <p>• Cash multiplier: 4.0x (Standard)</p>
            <p>• Labor multiplier: 2.0x (Standard)</p>
          </div>
        </div>
      </section>

      {/* Section 8: Due Diligence */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm">
        <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/80 text-center">
          <div className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
            Audit Logs Prepared
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Due diligence records ready to export for legal audits</p>
        </div>
        <div className="lg:col-span-7 space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Make due diligence a snap</h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            The platform compiles structured, chronological audit logs of all slice distributions, making it incredibly easy to present clear and reliable cap records during prospective venture funding rounds.
          </p>
        </div>
      </section>

    </div>
  );
}