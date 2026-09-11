'use client';

import React, { useState } from 'react';

const faqs = [
  "How to apply for the internship and what documents are needed?",
  "Are there any specific dates or deadlines to apply for the internship program?",
  "What is the selection process for SPS?",
  "What is the duration of the internship program? Can it be extended?",
  "Is average learning time taken for an intern to progress to actual assignments?",
  "Will I receive any certificate or documentation after successful completion?",
  "How many hours am I expected to work in a week?",
  "Can I apply for multiple roles?",
  "Is there any financial compensation during the internship?",
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 bg-gray-50 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a237e] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border bg-white rounded-lg overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-800 hover:text-blue-600 transition"
              >
                {faq}
                <span className="text-gray-400">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4 text-sm text-gray-600 border-t pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}