"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, UploadCloud, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const steps = [
  { num: '01', title: 'Application', desc: 'Submit your CV via our online portal.', icon: <FileText /> },
  { num: '02', title: 'Documentation', desc: 'Upload academic transcripts & CNIC.', icon: <UploadCloud /> },
  { num: '03', title: 'Screening', desc: 'Technical & HR interviews.', icon: <Users /> },
  { num: '04', title: 'Offer', desc: 'Receive your internship letter.', icon: <CheckCircle /> },
];

export default function ApplicationProcess() {
  return (
    <section className="py-20 bg-gray-200  px-8">
     
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#083ea9] tracking-widest uppercase mb-3">Our Roadmap</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Simple Application Process</h3>
          <p className="text-gray-600">
            A transparent 4-step journey designed to identify talent and match you with the right projects.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-500 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center text-[#083ea9] shadow-lg mb-6 hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="text-center">
                <span className="text-[#083ea9] font-bold text-sm block mb-1">{step.num}</span>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed px-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}