import React from 'react';
import { GraduationCap, Award, BookOpenText, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Eligibility() {
  return (
    <section className=" py-20 px-8 relative overflow-hidden">
     
         <Image
      src="/images/Hero/Hero8.webp"
      alt=""
      fill
      className="object-cover"
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
  
        <div className="grid gap-6">
          <div className="bg-cyan-800 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <h2 className="text-4xl font-extrabold text-white mb-6">Eligibility</h2>
            <p className="text-gray-300 mb-8">
              We are looking for ambitious individuals who are ready to bridge the gap between academic theory and real-world execution.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="text-blue-400 w-6 h-6" /></div>
                <div>
                  <h4 className="text-white font-bold">Academic Status</h4>
                  <p className="text-sm text-gray-400">Enrolled in HEC recognized university or recent graduates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Award className="text-blue-400 w-6 h-6" /></div>
                <div>
                  <h4 className="text-white font-bold">Performance</h4>
                  <p className="text-sm text-gray-400">Maintained a CGPA of 3.0 or higher.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Skill Highlight Card */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-2xl">
              <BookOpenText className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#242949]">Technical Prerequisites</h3>
          </div>
          
          <ul className="space-y-4">
            {[
              "Strong fundamental understanding of programming logic.",
              "Excellent verbal and written communication skills.",
              "Passion for solving complex problems via tech.",
              "Ability to work in a fast-paced collaborative environment."
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-10 w-full py-4 bg-[#242949] text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
            Check Your Eligibility
          </button>
        </div>

      </div>
    </section>
  );
}