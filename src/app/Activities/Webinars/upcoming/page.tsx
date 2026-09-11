import type { Metadata } from "next";
import ComingSoonView from "@/features/Common/ComingSoonView";

export const metadata: Metadata = {
  title: "Upcoming Webinars | SPS Digital Solutions",
  description:
    "Discover upcoming enterprise webinars on cybersecurity, cloud modernization, AI automation, and technology leadership from SPS Digital Solutions.",
};

export default function UpcomingWebinarsPage() {
  return (
    <ComingSoonView
      title="Upcoming Webinars"
      category="Activities › Webinars"
      description="We are currently scheduling interactive webinars with industry experts, enterprise architects, and technology leaders. Register your interest below to receive calendar invites and agenda details as soon as dates are announced."
      badgeText="Upcoming Schedule"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Activities", href: "/Activities" },
        { label: "Webinars", href: "/Activities/Webinars/past" },
        { label: "Upcoming Webinars" },
      ]}
      primaryAction={{ label: "Browse Past Webinars", href: "/Activities/Webinars/past" }}
      secondaryAction={{ label: "Contact SPS Team", href: "/Contact" }}
    />
  );
}
