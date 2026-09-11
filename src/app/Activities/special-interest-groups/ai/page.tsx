import type { Metadata } from "next";
import ComingSoonView from "@/features/Common/ComingSoonView";

export const metadata: Metadata = {
  title: "AI Special Interest Group (SIG) | SPS",
  description:
    "Join the SPS AI Special Interest Group to collaborate on generative AI adoption, foundation models, agentic workflows, and responsible AI governance.",
};

export default function AISIGPage() {
  return (
    <ComingSoonView
      title="AI Special Interest Group (SIG)"
      category="Activities › Special Interest Groups"
      description="Collaborate on generative AI adoption, LLM governance, foundation model fine-tuning, and enterprise autonomous agents with industry peers and researchers."
      badgeText="AI Innovation Forum"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Activities", href: "/Activities" },
        { label: "Special Interest Groups", href: "/Activities/special-interest-groups" },
        { label: "AI SIG" },
      ]}
      primaryAction={{ label: "Contact SIG Coordinator", href: "/Contact" }}
      secondaryAction={{ label: "Explore Past Webinars", href: "/Activities/Webinars/past" }}
    />
  );
}
