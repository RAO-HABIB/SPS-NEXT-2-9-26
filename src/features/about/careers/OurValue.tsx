import { aboutData } from "@/data/about-data";
import {
  Handshake,
  ShieldCheck,
  HeartHandshake,
  Users,
  BadgeCheck,
  Landmark,
} from "lucide-react";

const icons = [
  Handshake,
  ShieldCheck,
  HeartHandshake,
  Users,
  BadgeCheck,
  Landmark,
];

export default function OurValues() {
  const { values } = aboutData.careers;

  return (
    <section id="values" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Values
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-sky-500" />
        </div>

        {/* Cards */}

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {values.map((value, index) => {
            const Icon = icons[index];

            return (
              <div
                key={value.title}
                className="group rounded-xl bg-[#EEF6FD] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white shadow-md">
                    <Icon
                      size={30}
                      className="text-sky-500"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Content */}

                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-700">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}