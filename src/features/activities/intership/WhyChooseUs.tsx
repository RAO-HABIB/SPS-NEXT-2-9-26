import React from 'react';
import { Briefcase, BookOpen, Clock, TrendingUp } from 'lucide-react'; // 'lucide-react' install kar lein
import Image from 'next/image';

const features = [
  {
    icon: <Briefcase className="w-6 h-6 text-[#083ea9]" />,
    title: 'Real-world Experience',
    desc: 'Work on actual projects that impact the business and our clients directly.'
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#083ea9]" />,
    title: 'Learning & Development',
    desc: 'Access to professional training materials, workshops, and mentorship programs.'
  },
  {
    icon: <Clock className="w-6 h-6 text-[#083ea9]" />,
    title: 'Flexibility',
    desc: 'Flexible working hours designed to accommodate your academic commitments.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#083ea9]" />,
    title: 'Career Advancement',
    desc: 'A clear pathway from intern to a full-time professional based on performance.'
  }
];

export default function WhySps() {
  return (
    <section className="py-20 bg-gray-50 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content side */}
          <div>
            <span className="text-[#083ea9] font-bold tracking-widest text-sm uppercase">Why Choose SPS?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-8 leading-tight">
              Empowering the Next Generation of <span className="text-[#083ea9]">IT Talent</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full" style={{ minHeight: '480px' }}>
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#083ea9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob pointer-events-none"></div>

            <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl z-10" style={{ height: '480px', width: '100%' }}>
              <Image
                src="/images/internship/whychoose.webp"
                alt="SPS Team Collaboration"
                width={800}
                height={550}
                priority
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[250px] border border-gray-100">
              <p className="text-[#083ea9] font-bold text-3xl">500+</p>
              <p className="text-gray-600 text-sm font-medium">Successful Interns Placed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}