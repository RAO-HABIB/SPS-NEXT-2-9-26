import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

import { getPastWebinars, getAvailableYears } from "@/data/webinars-data";
import WebinarHero from "@/features/activities/webinar/WebinarHero";
import WebinarGrid from "@/features/activities/webinar/WebinarGrid";

export const metadata: Metadata = {
  title: "Past Webinars | SPS Digital Solutions",
  description:
    "Browse our library of past webinars covering cybersecurity, cloud, AI, and enterprise technology topics from SPS Digital Solutions.",
  keywords: [
    "Past Webinars",
    "SPS Webinars",
    "Cybersecurity Webinars",
    "Tech Webinars",
  ],
  alternates: {
    canonical: "https://spsnet.com/Activities/Webinars/past",
  },
  openGraph: {
    title: "Past Webinars | SPS Digital Solutions",
    description: "Explore our archive of past webinars on enterprise technology topics.",
    url: "https://spsnet.com/Activities/Webinars/past",
    siteName: "SPS Digital Solutions",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PastWebinarsPage() {
  const pastWebinars = getPastWebinars();
  const years = getAvailableYears("past");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded focus:bg-[#1BA6C7] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <WebinarHero
          title="Webinars"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Webinars Past Events" },
          ]}
        />

        <WebinarGrid
          eyebrow="Events & Webinars"
          heading="Past from our webinars"
          subheading="Our past event schedules were more than just timelines; they were the intricate roadmap to unforgettable experiences, blending entertainment, knowledge, and community spirit."
          years={years}
          webinars={pastWebinars}
          emptyMessage="No past webinars for this year."
        />
      </main>

      <Footer />
    </>
  );
}