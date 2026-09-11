import Link from "next/link";
import { aboutData } from "@/data/about-data";
import {
  BriefcaseBusiness,
  Clock3,
  MapPin,
  Building2,
} from "lucide-react";

export default function OpenPositions() {
  const { jobs } = aboutData.careers;

  return (
    <section
      id="open-positions"
      className="bg-[#f5f7fb] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-10">
          <h2 className="text-4xl font-bold text-slate-900">
            Career Opportunities
          </h2>

          <p className="mt-3 text-slate-600">
            Explore our current openings and become part of an
            innovative team building next-generation software.
          </p>
        </div>

        {/* Table */}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          {/* Header */}

          <div className="hidden grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-6 border-b bg-slate-100 px-8 py-5 text-sm font-bold uppercase tracking-wide text-slate-700 lg:grid">
            <div>Position</div>
            <div>Department</div>
            <div>Type</div>
            <div>Location</div>
            <div className="text-center">Apply</div>
          </div>

          {/* Jobs */}

          {jobs.map((job, index) => (
            <div
              key={job.title}
              className={`transition hover:bg-slate-50 ${index !== jobs.length - 1
                  ? "border-b"
                  : ""
                }`}
            >
              {/* Desktop */}

              <div className="hidden grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center gap-6 px-8 py-8 lg:grid">

                {/* Position */}

                <div>
                  <h3 className="text-xl font-bold text-blue-700">
                    {job.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                    {job.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Department */}

                <div className="flex items-center gap-2 text-slate-700">
                  <Building2
                    size={18}
                    className="text-blue-600"
                  />

                  {job.department}
                </div>

                {/* Type */}

                <div className="flex items-center gap-2 text-slate-700">
                  <Clock3
                    size={18}
                    className="text-blue-600"
                  />

                  {job.type}
                </div>

                {/* Location */}

                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin
                    size={18}
                    className="text-blue-600"
                  />

                  {job.location}
                </div>

                {/* Button */}

                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="rounded-full bg-[#24195D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#35268f]"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Mobile */}

              <div className="space-y-6 p-6 lg:hidden">

                <div>
                  <h3 className="text-xl font-bold text-blue-700">
                    {job.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {job.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">

                  <div className="flex items-center gap-2">
                    <Building2
                      size={18}
                      className="text-blue-600"
                    />
                    {job.department}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3
                      size={18}
                      className="text-blue-600"
                    />
                    {job.type}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin
                      size={18}
                      className="text-blue-600"
                    />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness
                      size={18}
                      className="text-blue-600"
                    />
                    {job.experience}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#24195D] px-6 py-3 text-sm font-semibold text-white"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}