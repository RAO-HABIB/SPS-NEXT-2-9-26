import { aboutData } from "@/data/about-data";
import {
  HeartPulse,
  PiggyBank,
  CalendarDays,
  Baby,
  LaptopMinimal,
} from "lucide-react";

const icons = [
  HeartPulse,
  PiggyBank,
  CalendarDays,
  Baby,
  LaptopMinimal,
];

export default function Benefits() {
  const { benefits } = aboutData.careers;

  return (
    <section id="benefits" className="bg-white">
      {/* Top Banner */}
      <div className="bg-[#29B8D3] py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Diversity & Inclusion
          </h2>

          <p className="mx-auto mt-5 max-w-5xl text-lg leading-8 text-white/95">
            Diversity, equity, and inclusion are part of our culture. We
            foster an environment where every individual is respected,
            empowered, and encouraged to grow professionally.
          </p>
        </div>
      </div>

      {/* Benefits */}

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          <h3 className="text-4xl font-bold text-slate-900">
            Benefits
          </h3>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We provide a competitive rewards package that supports your
            health, financial well-being, family, and career growth.
          </p>
        </div>

        {/* First Row */}

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {benefits.slice(0, 3).map((benefit, index) => {
            const Icon = icons[index];

            return (
              <div
                key={benefit.title}
                className="rounded-xl bg-[#EEF6FD] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-8 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                    <Icon
                      size={38}
                      className="text-sky-500"
                    />
                  </div>
                </div>

                <h4 className="text-center text-xl font-semibold text-slate-900">
                  {benefit.title}
                </h4>

                <p className="mt-5 text-center leading-8 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Second Row */}

        <div className="mx-auto mt-8 grid max-w-4xl gap-8 md:grid-cols-2">
          {benefits.slice(3).map((benefit, index) => {
            const Icon = icons[index + 3];

            return (
              <div
                key={benefit.title}
                className="rounded-xl bg-[#EEF6FD] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-8 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                    <Icon
                      size={38}
                      className="text-sky-500"
                    />
                  </div>
                </div>

                <h4 className="text-center text-xl font-semibold text-slate-900">
                  {benefit.title}
                </h4>

                <p className="mt-5 text-center leading-8 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}