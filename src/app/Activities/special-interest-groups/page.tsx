import type { Metadata } from "next";
import ComingSoonView from "@/features/Common/ComingSoonView";

export const metadata: Metadata = {
  title: "Special Interest Groups (SIGs) | SPS",
  description:
    "SPS Special Interest Groups bring together practitioners, researchers, and enterprise leaders to discuss emerging industry breakthroughs and collaborative initiatives.",
};

export default function SpecialInterestGroupsPage() {
  return (
    <ComingSoonView
      title="Special Interest Groups"
      category="Activities › Special Interest Groups"
      description="SPS Special Interest Groups (SIGs) bring together industry practitioners, enterprise leaders, and researchers to drive collaborative breakthroughs across AI, Cybersecurity, Cloud, and Data Standards."
      badgeText="SIG Community Hub"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Activities", href: "/Activities" },
        { label: "Special Interest Groups" },
      ]}
      primaryAction={{ label: "Explore AI SIG", href: "/Activities/special-interest-groups/ai" }}
      secondaryAction={{ label: "Explore Cybersecurity SIG", href: "/Activities/special-interest-groups/cybersecurity" }}
    />
  );
}
