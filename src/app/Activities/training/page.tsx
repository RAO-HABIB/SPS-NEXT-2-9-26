// src/app/Activities/Training/page.tsx
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

import type { Metadata } from "next";
import TrainingClient from "@/features/activities/training/TrainingClient";

export const metadata: Metadata = {
  title: "Training Programs | SPS",
  description:
    "Enterprise training curricula across IBM technologies, AWS, Microsoft, and SPS Solutions.",
};

export default function TrainingProgramsPage() {
  return (
    <>
      <Navbar />
      <TrainingClient />
      <Footer />
    </>
  );
}