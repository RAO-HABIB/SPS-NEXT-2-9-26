import { Job } from "@/data/about-data";
import {
  Briefcase,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  return (
    <div className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,.15)]">
      {/* Top */}

      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            {job.department}
          </span>

          <h3 className="mt-5 text-2xl font-bold text-slate-900">
            {job.title}
          </h3>
        </div>

        <div className="rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 p-4 text-white shadow-lg">
          <Briefcase size={24} />
        </div>
      </div>

      {/* Description */}

      <p className="mt-6 grow leading-7 text-slate-600">
        {job.description}
      </p>

      {/* Details */}

      <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
        <div className="flex items-center gap-3 text-slate-700">
          <MapPin size={18} className="text-blue-600" />
          {job.location}
        </div>

        <div className="flex items-center gap-3 text-slate-700">
          <Clock3 size={18} className="text-blue-600" />
          {job.type}
        </div>

        <div className="flex items-center gap-3 text-slate-700">
          <Briefcase size={18} className="text-blue-600" />
          {job.experience}
        </div>
      </div>

      {/* Skills */}

      <div className="mt-8 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Button */}

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:gap-3"
      >
        Apply Now

        <ArrowRight size={18} />
      </Link>
    </div>
  );
}