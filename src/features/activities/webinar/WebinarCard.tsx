import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Webinar } from "@/data/webinars-data";

interface Props {
  webinar: Webinar;
}

export default function WebinarCard({ webinar }: Props) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:ring-[#1BA6C7]/30 sm:p-8">
      <p className="mb-4 text-sm font-semibold text-gray-600 sm:text-base">
        {webinar.time}
      </p>

      <h3 className="mb-4 text-xl font-bold text-[#0a1b3d] sm:text-2xl">
        <Link
          href={`/Activities/Webinars/${webinar.slug}`}
          className="group/link inline-flex items-start gap-2 outline-none transition-colors hover:text-[#1BA6C7] focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2 relative z-10"
        >
          <span>{webinar.title}</span>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 opacity-0 transition-all group-hover/link:opacity-100"
          />
        </Link>
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 sm:text-base line-clamp-6">
        {webinar.description}
      </p>

      {webinar.subheading && (
        <div className="mb-4">
          <p className="font-bold text-[#0a1b3d]">{webinar.subheading}</p>
          <Link
            href={`/Activities/Webinars/${webinar.slug}`}
            className="relative z-10 text-sm font-semibold text-[#1BA6C7] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7]"
            aria-label={`Read more about ${webinar.title}`}
          >
            Read more...
          </Link>
        </div>
      )}

      <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-gray-100">
          <Image
            src={webinar.speaker.image}
            alt={`${webinar.speaker.name} - ${webinar.speaker.title}`}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-[#0a1b3d]">
            {webinar.speaker.name}
          </p>
          <p className="text-xs text-gray-600">{webinar.speaker.title}</p>
        </div>
      </div>

      {/* Overlay link for full card clickability */}
      <Link
        href={`/Activities/Webinars/${webinar.slug}`}
        aria-label={`View details for ${webinar.title}`}
        className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2"
      >
        <span className="sr-only">View webinar details</span>
      </Link>
    </article>
  );
}