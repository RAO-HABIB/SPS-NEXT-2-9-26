import type { Metadata } from "next";
import ComingSoonView from "@/features/Common/ComingSoonView";

export const metadata: Metadata = {
  title: "Past Workshops | SPS",
  description: "Browse past workshop resources and recordings from SPS Digital Solutions.",
};

export default function PastWorkshopsPage() {
  return (
    <ComingSoonView
      title="Past Workshops"
      category="Activities › Workshops"
      description="We are archiving our previous hands-on workshop materials, lab repositories, and session slide decks. Re-visit this page soon for direct download links."
      badgeText="Workshop Archive"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Activities", href: "/Activities" },
        { label: "Workshops" },
        { label: "Past Workshops" },
      ]}
    />
  );
}
