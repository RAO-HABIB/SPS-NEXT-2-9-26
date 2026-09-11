import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVerticalDetail } from "@/data/verticals-detail-data";
import VerticalDetailView from "@/features/Verticals/components/VerticalDetailView";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

export const metadata: Metadata = {
  title: "Industry Verticals | SPS - Software Productivity Strategists",
  description:
    "Explore tailored digital transformation solutions for Public Sector, Healthcare, Industrials, Energy, Retail, Financial, and Telecommunications.",
};

export default function AllVerticalsPage() {
  const verticalData = getVerticalDetail("all");
  if (!verticalData) notFound();

  return (
    <>
      <Navbar />
      <VerticalDetailView data={verticalData} />
      <Footer />
    </>
  );
}
