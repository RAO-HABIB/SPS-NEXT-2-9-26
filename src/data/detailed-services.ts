import { LucideIcon } from "lucide-react";

export interface DetailedServiceHero {
  title: string;
  subtitle: string;
  bgImage?: string;
  variant?: "diamond" | "minimal";
  breadcrumb?: string;
}

export interface DetailedServiceSection1 {
  title: string;
  subtitle?: string;
  description: string;
  description2?: string;
  checklists?: string[];
  image1?: string;
  image2?: string;
  singleImage?: string;
}

export interface DetailedServiceHighlight {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface DetailedServiceSection2 {
  title: string;
  highlights: DetailedServiceHighlight[];
  image?: string;
}

export interface DetailedServiceSection3 {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export interface DetailedServiceTableColumn {
  key: string;
  label: string;
}

export interface DetailedServiceTableRow {
  [key: string]: string | React.ReactNode;
}

export interface DetailedServiceTableData {
  columns: DetailedServiceTableColumn[];
  rows: DetailedServiceTableRow[];
}

export interface SupportedPlatform {
  name: string;
  description?: string;
  icon?: string;
}

export interface DetailedServiceSection4 {
  title: string;
  description?: string;
  platforms: SupportedPlatform[];
  image?: string;
  variant?: "cards" | "bullets";
}

export interface DetailedServiceData {
  id: string;
  layoutType?: "operations" | "design" | "training";
  hero: DetailedServiceHero;
  section1?: DetailedServiceSection1;
  section2?: DetailedServiceSection2;
  section3?: DetailedServiceSection3;
  tableData?: DetailedServiceTableData;
  section4?: DetailedServiceSection4;
}

export const DETAILED_SERVICES: Record<string, DetailedServiceData> = {
  "network-visibility-ops": {
    id: "network-visibility-ops",
    layoutType: "operations",
    hero: {
      title: "Network Visibility Operations Services",
      subtitle: "The SPS Network Visibility Operations Service suite offers three levels of service to optimize network monitoring and comprehensive documentation and training tailored to support your operational learning.",
      variant: "diamond",
    },
    section1: {
      title: "Network Basic Healthy Check",
      subtitle: "About Network Visibility Services",
      description: "SPS will assess your network visibility solutions, support steps, and incident flow and tracking process. This service includes assistance with the specific network proxy/tools processes. In addition, we assist in the specific configuration of TAPs, Splicers (SPAN), and infrastructure nodes.",
      checklists: [
        "Understand the network traffic profile",
        "Review hardware utilization rates and traffic aggregation",
        "Confirm link health status and capacity",
        "Document link utilization to identify anomalies",
        "Capture technical and operational monitoring",
        "Identify bottlenecks and optimization",
        "Compliance and security assurance",
        "Establish support for emergency response"
      ],
      image1: "/images/products/ibm-security-card.jpg",
      image2: "/images/products/ibm-automation-card.jpg"
    },
    section2: {
      title: "CONFIGURATION REVIEW & TESTING",
      highlights: [
        { 
          title: "Configuration Validation", 
          description: "Review against best practices and recommend configuration adjustments to optimize your infrastructure.",
          image: "/images/services/network-ops.jpg"
        },
        { 
          title: "Testing & Validation", 
          description: "Design and run simulated traffic to test failover scenarios and operational impact during maintenance windows.",
          image: "/images/services/keysight-training.jpg"
        },
        { 
          title: "Peer-Reviewing Documentation", 
          description: "SPS will review existing documentation and provide guidance on standardizing architecture blueprints.",
          image: "/images/services/network-design.jpg"
        }
      ],
      image: "/images/services/network-ops.jpg"
    },
    section3: {
      title: "Network Insights",
      subtitle: "COMPREHENSIVE DOCUMENTATION AND TRAINING",
      description: "As a pro-active service, we will conduct an audit and catalog and document your visibility framework. It is a standard practice to build a network tap architecture topology and map to verify packets that traverse the network segments.",
      image: "/images/services/network-design.jpg"
    },
    tableData: {
      columns: [
        { key: "tier", label: "Service Tier" },
        { key: "desc", label: "Description" },
        { key: "timeToComplete", label: "Time To Complete" },
        { key: "timeToValue", label: "Time To Value" },
        { key: "valueRealization", label: "Value Realization" }
      ],
      rows: [
        { tier: "Level 1 Basic Health Check", desc: "Document review, active network link evaluation and span/tap validation", timeToComplete: "30h", timeToValue: "24h", valueRealization: "50%" },
        { tier: "Level 2 Config review & traffic testing", desc: "Some focus as Level 1 [PO] configuration validation and building your traffic management map", timeToComplete: "60h", timeToValue: "60h", valueRealization: "100%" },
        { tier: "Level 3 Comprehensive Documentation & Training", desc: "We provide comprehensive training across operations, infrastructure administration, and management reporting for IT operations", timeToComplete: "120h", timeToValue: "120h", valueRealization: "100%" }
      ]
    },
    section4: {
      title: "Supported Platforms",
      description: "Our Network Visibility Operations Services are extensively supported on key platforms to ensure full monitoring and security access.",
      platforms: [
        { name: "Gigamon", description: "Deliver scalable network traffic visibility across the distributed infrastructure." },
        { name: "Keysight", description: "The clear standard for network reliability and performance." }
      ],
      image: "/images/services/network-design.jpg",
      variant: "cards"
    }
  },
  "network-visibility-design": {
    id: "network-visibility-design",
    layoutType: "design",
    hero: {
      title: "Network Visibility Design & Implementation Services",
      subtitle: "SPS will design and implement your network visibility infrastructure and solutions during network infrastructure and security architecture refresh and upgrade projects.",
      breadcrumb: "Cybersecurity",
      variant: "minimal"
    },
    section1: {
      title: "SPS Network Visibility Design & Implementation Services",
      description: "From enterprise data center infrastructure to cloud and hybrid cloud architectures, SPS are experts at design and deployment of network packet brokers, bypass switches and network TAPs for more efficient packet inspection and monitoring.",
      description2: "If you are refreshing or upgrading your network or security infrastructure, SPS can manage your network visibility architecture, from pre-sales through final deployment. SPS has specific expertise with in-line and high availability (HA) packet inspection.",
      singleImage: "/images/services/network-design.jpg" // Placeholder for the isometric art
    },
    tableData: {
      columns: [
        { key: "service", label: "Service" },
        { key: "desc", label: "Description" },
        { key: "oneData", label: "One Data Center" },
        { key: "twoToTen", label: "Two to Ten Data Centers" },
        { key: "moreThanTen", label: "More than Ten Data Centers" },
        { key: "cloud", label: "Cloud or Hybrid Cloud" }
      ],
      rows: [
        { service: "Architecture Review & Technology Assessment", desc: "Review your current network packet broker and bypass switch visibility implementation and make recommendations to improve your ROI", oneData: "No charge (up to 1 day)", twoToTen: "No charge (up to 1 day)", moreThanTen: "No charge (up to 1 day)", cloud: "No charge (up to 1 day)" },
        { service: "Installation, Design & Deployment Services", desc: "Design, Deploy & Integrate Visibility solutions for your organization", oneData: "$50k", twoToTen: "$150k", moreThanTen: "$300k", cloud: "TBA" }
      ]
    },
    section4: {
      title: "Supported Platforms:",
      platforms: [
        { name: "Keysight" },
        { name: "Gigamon" }
      ],
      variant: "bullets"
    }
  },
  "keysight-training": {
    id: "keysight-training",
    layoutType: "training",
    hero: {
      title: "Keysight IxNetwork Training",
      subtitle: "Talk to SPS about Keysight Training on Keysight’s IxNetwork Testing System. IxNetwork provides L2-3 network infrastructure performance testing that scales to business needs. Organizations have long tested their networks for scale and performance. But as networks become increasingly complex, so do the challenges of ensuring peak network performance and resilience. Today, organizations can no longer simply test for sluggish response times – the right testing tool must now assess complex network topologies with thousands of network devices, emulate sophisticated traffic flows, and conduct stress tests under countless scenarios and network conditions. IxNetwork delivers performance testing under the most challenging conditions. Capable of generating multiple terabytes of data and analyzing up to 4 million traffic flows simultaneously, IxNetwork scales to handle the most powerful devices and the largest networks. With its enhanced real-time analysis and statistics, this powerful solution emulates everything from routing and switching, Data Center Ethernet and Software Defined Networking to Broadband Access and Industrial Ethernet for comprehensive testing. And graphical user interface (GUI) wizards make it easier for IT teams to meet a wide range of performance requirements with minimal resources.",
      breadcrumb: "Cybersecurity",
      variant: "minimal"
    },
    section1: {
      title: "Highlights:",
      description: "Talk to SPS about Keysight Training on Keysight’s IxNetwork Testing System.",
      checklists: [
        "Offers test coverage from 1G to 800G Ethernet",
        "Generates traffic flows that mimic realistic user applications and scenarios",
        "Works smoothly in virtualized network environments, and runs from any commercially available compute environment",
        "Delivers end-to-end test system automation",
        "Provides comprehensive protocol coverage for routing/switching, multiprotocol label switching (MPLS), broadband access, industrial Ethernet (IE), data center networking, and software-defined networking (SDN)",
        "Performs rapid isolation of service violations, including thorough traffic-flow analysis",
        "Emulates a blend of real-world application traffic used on today's networks"
      ],
      singleImage: "/images/services/keysight-catalog.jpg"
    }
  }
};

export function getDetailedService(id: string): DetailedServiceData | undefined {
  if (!id) return undefined;
  const cleanId = id.toLowerCase().trim();
  return DETAILED_SERVICES[id] || DETAILED_SERVICES[cleanId];
}
