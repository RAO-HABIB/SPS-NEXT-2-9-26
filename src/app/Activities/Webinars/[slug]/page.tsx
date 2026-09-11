import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Video,
  Download,
  CheckCircle2,
} from "lucide-react";

import {
  getWebinarBySlug,
  getAllWebinarSlugs,
} from "@/data/webinars-data";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import WebinarHero from "@/features/activities/webinar/WebinarHero";
import { BiLogoLinkedin } from "react-icons/bi";

interface Props {
  params: Promise<{ slug: string }>;
}

// ============ SEO METADATA ============
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const webinar = getWebinarBySlug(slug);

  if (!webinar) {
    return {
      title: "Webinar Not Found | SPS Digital Solutions",
      description: "The requested webinar could not be found.",
    };
  }

  const pageTitle = `${webinar.title} | Webinars | SPS Digital Solutions`;
  const pageDescription = (
    webinar.fullDescription || webinar.description
  ).substring(0, 160);
  const canonicalUrl = `https://spsnet.com/activities/webinars/${webinar.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      webinar.title,
      "Webinar",
      "SPS Digital Solutions",
      webinar.speaker.name,
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: "SPS Digital Solutions",
      images: webinar.thumbnail
        ? [
          {
            url: webinar.thumbnail,
            width: 1200,
            height: 630,
            alt: webinar.title,
          },
        ]
        : [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: webinar.thumbnail ? [webinar.thumbnail] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ============ STATIC PARAMS ============
export function generateStaticParams() {
  return getAllWebinarSlugs();
}

// ============ PAGE ============
export default async function WebinarDetailPage({ params }: Props) {
  const { slug } = await params;
  const webinar = getWebinarBySlug(slug);

  if (!webinar) {
    notFound();
  }

  const isPast = webinar.status === "past";
  const backHref = isPast
    ? "/Activities/Webinars/past"
    : "/Activities/Webinars/upcoming";
  const backLabel = isPast ? "Past Webinars" : "Upcoming Webinars";

  // ===== JSON-LD Structured Data (Event Schema) =====
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: webinar.title,
    description: webinar.fullDescription || webinar.description,
    startDate: webinar.eventDate || webinar.date,
    eventStatus: isPast
      ? "https://schema.org/EventEnded"
      : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: `https://spsnet.com/activities/webinars/${webinar.slug}`,
    },
    organizer: {
      "@type": "Organization",
      name: "SPS Digital Solutions",
      url: "https://spsnet.com",
    },
    performer: {
      "@type": "Person",
      name: webinar.speaker.name,
      jobTitle: webinar.speaker.title,
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded focus:bg-[#1BA6C7] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* HERO */}
        <WebinarHero
          title={webinar.title}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Webinars", href: backHref },
            { label: webinar.title },
          ]}
        />

        {/* ===== CONTENT SECTION ===== */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Back Button */}
            <Link
              href={backHref}
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1BA6C7] transition-all hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7]"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to {backLabel}
            </Link>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
              {/* ===== LEFT: Main Content ===== */}
              <div className="space-y-10 lg:col-span-2">
                {/* Video Player (for past webinars) */}
                {isPast && webinar.videoUrl && (
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative aspect-video w-full">
                      <iframe
                        src={webinar.videoUrl}
                        title={webinar.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Thumbnail (for upcoming webinars if no video) */}
                {!isPast && webinar.thumbnail && (
                  <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={webinar.thumbnail}
                      alt={webinar.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <div className="flex items-center gap-2">
                    <Calendar
                      aria-hidden="true"
                      className="h-5 w-5 text-[#1BA6C7]"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {new Date(webinar.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock
                      aria-hidden="true"
                      className="h-5 w-5 text-[#1BA6C7]"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {webinar.time}
                    </span>
                  </div>
                  {webinar.duration && (
                    <div className="flex items-center gap-2">
                      <Video
                        aria-hidden="true"
                        className="h-5 w-5 text-[#1BA6C7]"
                      />
                      <span className="text-sm font-semibold text-gray-700">
                        {webinar.duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* About */}
                <section aria-labelledby="about-heading">
                  <h2
                    id="about-heading"
                    className="mb-4 text-2xl font-bold text-[#0a1b3d] sm:text-3xl"
                  >
                    About This Webinar
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {webinar.fullDescription || webinar.description}
                  </p>
                </section>

                {/* Key Highlights */}
                {webinar.keyHighlights && webinar.keyHighlights.length > 0 && (
                  <section aria-labelledby="highlights-heading">
                    <h2
                      id="highlights-heading"
                      className="mb-4 text-2xl font-bold text-[#0a1b3d] sm:text-3xl"
                    >
                      Key Highlights
                    </h2>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {webinar.keyHighlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
                        >
                          <CheckCircle2
                            aria-hidden="true"
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#1BA6C7]"
                          />
                          <span className="text-sm text-gray-700 sm:text-base">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Learning Outcomes */}
                {webinar.learningOutcomes &&
                  webinar.learningOutcomes.length > 0 && (
                    <section aria-labelledby="outcomes-heading">
                      <h2
                        id="outcomes-heading"
                        className="mb-4 text-2xl font-bold text-[#0a1b3d] sm:text-3xl"
                      >
                        What You'll Learn
                      </h2>
                      <ul className="space-y-3">
                        {webinar.learningOutcomes.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700 sm:text-base"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1BA6C7]"
                            />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                {/* Agenda */}
                {webinar.agenda && webinar.agenda.length > 0 && (
                  <section aria-labelledby="agenda-heading">
                    <h2
                      id="agenda-heading"
                      className="mb-4 text-2xl font-bold text-[#0a1b3d] sm:text-3xl"
                    >
                      Agenda
                    </h2>
                    <ol className="space-y-4">
                      {webinar.agenda.map((item, idx) => (
                        <li
                          key={idx}
                          className="rounded-xl border-l-4 border-[#1BA6C7] bg-gray-50 p-4"
                        >
                          {item.time && (
                            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#1BA6C7]">
                              {item.time}
                            </p>
                          )}
                          <h3 className="mb-1 text-base font-bold text-[#0a1b3d] sm:text-lg">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-gray-700">
                              {item.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                {/* Target Audience */}
                {webinar.targetAudience &&
                  webinar.targetAudience.length > 0 && (
                    <section aria-labelledby="audience-heading">
                      <h2
                        id="audience-heading"
                        className="mb-4 text-2xl font-bold text-[#0a1b3d] sm:text-3xl"
                      >
                        Who Should Attend
                      </h2>
                      <ul className="space-y-2">
                        {webinar.targetAudience.map((audience, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700 sm:text-base"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a1b3d]"
                            />
                            <span>{audience}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
              </div>

              {/* ===== RIGHT: Sidebar ===== */}
              <aside
                aria-label="Webinar sidebar"
                className="space-y-6 lg:sticky lg:top-24 lg:h-fit"
              >
                {/* Speaker Card */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                  <h3 className="mb-4 text-lg font-bold text-[#0a1b3d]">
                    Speaker
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[#1BA6C7]/20">
                      <Image
                        src={webinar.speaker.image}
                        alt={`${webinar.speaker.name} - ${webinar.speaker.title}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-[#0a1b3d]">
                          {webinar.speaker.name}
                        </h4>
                        {webinar.speaker.linkedIn && (
                          <Link
                            href={webinar.speaker.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${webinar.speaker.name}'s LinkedIn profile`}
                            className="text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7]"
                          >
                            <BiLogoLinkedin
                              aria-hidden="true"
                              className="h-4 w-4"
                            />
                          </Link>
                        )}
                      </div>
                      <p className="text-sm text-gray-700">
                        {webinar.speaker.title}
                      </p>
                      {webinar.speaker.organization && (
                        <p className="text-xs text-gray-500">
                          {webinar.speaker.organization}
                        </p>
                      )}
                    </div>
                  </div>
                  {webinar.speaker.bio && (
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      {webinar.speaker.bio}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                  <h3 className="mb-3 text-lg font-bold text-[#0a1b3d]">
                    {isPast ? "Watch & Download" : "Register Now"}
                  </h3>

                  {isPast ? (
                    <>
                      {webinar.recordingLink && (
                        <Link
                          href={webinar.recordingLink}
                          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1BA6C7] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#159bbb] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2"
                        >
                          <Video aria-hidden="true" className="h-4 w-4" />
                          Watch Recording
                        </Link>
                      )}
                      {webinar.slidesLink && (
                        <Link
                          href={webinar.slidesLink}
                          className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#0a1b3d] px-6 py-3 text-sm font-semibold text-[#0a1b3d] transition-all hover:bg-[#0a1b3d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2"
                        >
                          <Download aria-hidden="true" className="h-4 w-4" />
                          Download Slides
                        </Link>
                      )}
                    </>
                  ) : (
                    webinar.registrationLink && (
                      <Link
                        href={webinar.registrationLink}
                        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1BA6C7] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#159bbb] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2"
                      >
                        Register Now
                      </Link>
                    )
                  )}
                </div>

                {/* Format Info */}
                {webinar.format && (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0a1b3d]">
                      Format
                    </h3>
                    <p className="text-sm text-gray-700">{webinar.format}</p>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}