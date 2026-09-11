import Link from "next/link";
import { aboutData } from "@/data/about-data";

export default function CareerCTA() {
  const { careersCTA } = aboutData;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Careers
        </span>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          {careersCTA.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {careersCTA.description}
        </p>

        <div className="mt-10">
          <Link
            href={careersCTA.buttonLink}
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            {careersCTA.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}