import { getServiceBySlug, type ServiceDetailData } from "@/data/services-data";
import ServiceDetailView from "./ServiceDetailView";
import NetworkSecurityLayout from "./layouts/NetworkSecurityLayout";
import SmaasLayout from "./layouts/SmaasLayout";
import GrcLayout from "./layouts/GrcLayout";
import IdentityAccessLayout from "./layouts/IdentityAccessLayout";
import ThreatManagementLayout from "./layouts/ThreatManagementLayout";
import DataSecurityLayout from "./layouts/DataSecurityLayout";

export interface ServiceDetailRendererProps {
  slug: string;
  category?: string;
  data?: ServiceDetailData;
}

export default function ServiceDetailRenderer({
  slug,
  category,
  data,
}: ServiceDetailRendererProps) {
  const normalizedSlug = slug.toLowerCase().trim();
  const normalizedCategory = category?.toLowerCase().trim();

  // Sub-items Switchboard for Cybersecurity
  if (normalizedCategory === "cybersecurity") {
    switch (normalizedSlug) {
      // Cybersecurity Sub-items
      case "network-security":
        return <NetworkSecurityLayout />;
      case "smaas":
        return <SmaasLayout />;
      case "grc":
        return <GrcLayout />;
      case "iam":
      case "identity-access":
        return <IdentityAccessLayout />;
      case "threat-management":
        return <ThreatManagementLayout />;
      case "data-security":
        return <DataSecurityLayout />;

      // Catch-all for undefined sub-items
      default:
        return (
          <div className="flex items-center justify-center min-h-[50vh] text-slate-500">
            This service page is coming soon.
          </div>
        );
    }
  }

  const serviceData = data || getServiceBySlug(slug);

  if (!serviceData) {
    return null;
  }

  return <ServiceDetailView data={serviceData} />;
}
