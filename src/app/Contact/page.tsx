import Footer from "@/components/layout/Footer/footer";
import Navbar from "@/components/layout/Navbar/navbar";
import ContactClientSection from "@/features/Contact/client-section";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Software Productivity Strategists (SPS)",
  description:
    "Get in touch with SPS — Software Productivity Strategists. Reach us for technical support, sales, internship queries, or visit our headquarters in Rockville, MD.",
  keywords: [
    "SPS contact",
    "Software Productivity Strategists",
    "SPS support",
    "SPS internship",
    "Rockville MD IT company",
  ],
  openGraph: {
    title: "Contact Us | SPS",
    description:
      "Reach out to SPS for support, sales inquiries, or internship queries. Located at 2400 Research Blvd, Suite 115, Rockville, MD 20850.",
    url: "https://www.spsnet.com/contact-us",
    siteName: "SPS - Software Productivity Strategists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | SPS",
    description:
      "Reach out to SPS for support, sales inquiries, or internship queries.",
  },
  alternates: {
    canonical: "https://www.spsnet.com/contact-us",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section — styled like BMS hero */}
      <section
        aria-label="Contact Us Hero"
        className="relative w-full min-h-[540px] sm:min-h-[600px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/Hero8.webp"
            alt="Contact Us"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#031B3D]/70 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                HOME
              </Link>
              <span>›</span>
              <span className="text-white">Contact Us</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Contact Us
            </h1>

            {/* Paragraph */}
            <p className="text-base text-slate-200 leading-relaxed mb-8 font-light">
              We&apos;re here to answer your questions, discuss your project, and
              help you find the best solutions for your software needs. Reach
              out to us, and let&apos;s start building something great together.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white mt-16 lg:mt-24 pt-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Get in Touch with Our Team
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We&apos;re here to answer your questions, discuss your project, and
              help you find the best solutions for your software needs. Reach
              out to us, and let&apos;s start building something great together.
            </p>
          </div>

          <ContactClientSection />
        </div>
      </main>

      <Footer />
    </>
  );
}