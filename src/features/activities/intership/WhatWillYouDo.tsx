"use client";
import React, { useRef, useEffect } from 'react';
import { Lottie, type LottieHandle } from 'lottie-react';


const tasks = [
  { title: "Collaborate", desc: "Work with diverse, cross-functional teams on real-world projects." },
  { title: "Full-Stack Development", desc: "Design, test, and deploy scalable software solutions." },
  { title: "Best Practices", desc: "Learn industry standards and clean coding methodologies." },
  { title: "Innovation", desc: "Contribute to the evolution of our internal tools and products." }
];

export default function WhatYouWillDo() {
  const lottieRef = useRef<LottieHandle>(null);

  useEffect(() => {
    lottieRef.current?.play();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Lottie Animation Side */}
          <div className="relative">
            <div className="absolute inset-0  rounded-full blur-[120px] opacity-20"></div>
            <Lottie
              lottieRef={lottieRef}
              src="/images/lottie/dev.json"
              loop={true}
              autoplay={true}
              className="w-full max-w-lg mx-auto relative z-10"
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
              What You'll <span className="text-[#083ea9]">Do</span>
            </h2>

            <div className="space-y-4">
              {tasks.map((task, idx) => (
                <div key={idx} className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#083ea9] transition-all duration-300">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#083ea9] transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}