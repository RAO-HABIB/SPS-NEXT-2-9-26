import type { Metadata } from "next";
import ComingSoonView from "@/features/Common/ComingSoonView";

export const metadata: Metadata = {
  title: "Cybersecurity Special Interest Group (SIG) | SPS",
  description:
    "A collaborative community focused on NIST CSF 2.0 implementation, zero-trust architectures, threat intelligence sharing, and defensive posture maturity.",
};

export default function CybersecuritySIGPage() {
  return (
    <ComingSoonView
      title="Cybersecurity Special Interest Group (SIG)"
      category="Activities › Special Interest Groups"
      description="A collaborative forum focused on NIST CSF 2.0 implementation, zero-trust architectures, threat intelligence sharing, and defensive posture maturity."
      badgeText="Cyber Defense Forum"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Activities", href: "/Activities" },
        { label: "Special Interest Groups", href: "/Activities/special-interest-groups" },
        { label: "Cybersecurity SIG" },
      ]}
      primaryAction={{ label: "Contact SIG Coordinator", href: "/Contact" }}
      secondaryAction={{ label: "Explore Past Webinars", href: "/Activities/Webinars/past" }}
    />
  );
}
