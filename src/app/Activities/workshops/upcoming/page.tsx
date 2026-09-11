import type { Metadata } from "next";
import ComingSoonView from "@/features/Common/ComingSoonView";

export const metadata: Metadata = {
  title: "Upcoming Workshops | SPS",
  description: "Hands-on enterprise workshops, labs, and interactive technical sessions from SPS Digital Solutions.",
};

export default function UpcomingWorkshopsPage() {
  return (
    <ComingSoonView
      title="Upcoming Workshops"
      category="Activities › Workshops"
      description="Hands-on enterprise workshops covering Cloud Native modernization, AI Model Fine-Tuning, and Zero Trust implementations. New session dates will be published shortly."
      badgeText="Hands-on Labs"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Activities", href: "/Activities" },
        { label: "Workshops" },
        { label: "Upcoming Workshops" },
      ]}
    />
  );
}
