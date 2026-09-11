import React from 'react';

interface Area {
  title: string;
  img: string;
}

const areas: Area[] = [
  { title: 'Human Resources (HR) / Quality / Compliance', img: '/images/internship/area1.webp' },
  { title: 'IT & Software Development & Data Science', img: '/images/internship/area2.jpg' },
  { title: 'Business Development & Sales', img: '/images/internship/area3.jpg' },
];

export default function AreasOfInternship() {
  return (
    <section className="py-16 px-8 bg-gray-200 max-w-full mx-auto text-center">
      <h2 className="text-3xl font-bold text-black mb-4">Areas of Internship</h2>
      <p className="text-black mb-10 max-w-2xl mx-auto">Explore various fields and find the perfect match for your career aspirations and skills.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {areas.map((area, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg overflow-hidden border border-gray-100">
            <div className="relative">
              <img src={area.img} alt={area.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold uppercase">
                Apply Now
              </div>
            </div>
            <div className="p-4 font-semibold text-gray-700 h-20 flex items-center justify-center">
              {area.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}