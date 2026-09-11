// lib/activities-data.ts

export interface Person {
  name: string;
  title: string;
  organization: string;
  image: string;
  linkedIn?: string;
}

export interface FutureTopic {
  title: string;
}

export interface BulletItem {
  bold?: string;      // e.g. "Frequency:"
  text: string;       // e.g. "3rd Thursday of every month"
}

export interface AgendaItem {
  text: string;
}

export interface Roundtable {
  slug: string;                        // e.g. "viso-virginia"
  category: string;                    // "Roundtables"
  categorySlug: string;                // "roundtables"

  // Hero
  title: string;                       // "VISO Roundtable Series"
  subtitle: string;                    // "for Virginia Information Security Officers"
  host: Person;
  coHost?: Person;
  topic: string;
  date: string;                        // "Thursday, July 16th, 2026"
  eventDate: string;                   // ISO format for countdown: "2026-07-16T13:00:00-04:00"
  time: string;                        // "1:00 PM - 2:00 PM Eastern"
  heroBackground: string;              // background image
  futureTopics: FutureTopic[];

  // Content
  aboutTitle: string;                  // "About Roundtable"
  aboutDescription: string;            // Long text
  quickInfo: BulletItem[];             // Frequency, Start Date, Format
  whyAttendTitle: string;              // "Why Attend"
  whyAttendIntro: string;              // "It is a peer collaboration..."
  whyAttendPoints: string[];
  goalsTitle: string;                  // "Goals and Objectives"
  goals: BulletItem[];
  agendaTitle: string;                 // "Agenda"
  agenda: AgendaItem[];
  whoShouldJoinTitle: string;
  whoShouldJoin: BulletItem[];
  idealParticipantsTitle: string;
  idealParticipantsText: string;
}

// ============ DATA ============
export const roundtables: Roundtable[] = [
  {
    slug: "viso-virginia",
    category: "Roundtables",
    categorySlug: "roundtables",

    // Hero
    title: "VISO Roundtable Series",
    subtitle: "for Virginia Information Security Officers",
    host: {
      name: "Dave Shure",
      title: "Information Security Officer",
      organization: "Virginia Department of Small Business and Supplier Diversity",
      image: "/images/avatar/memoji1.webp",
      linkedIn: "https://linkedin.com/in/daveshure",
    },
    coHost: {
      name: "Nouman Abbasi",
      title: "Sr VP, Professional Services",
      organization: "Software Productivity Strategists, Inc.",
      image: "/images/avatar/memoji2.webp",
      linkedIn: "https://linkedin.com/in/noumanabbasi",
    },
    topic: "Configuration Management",
    date: "Thursday, July 16th, 2026",
    eventDate: "2026-07-16T13:00:00-04:00",
    time: "1:00 PM - 2:00 PM Eastern",
    heroBackground: "/images/Hero/Hero3.webp",
    futureTopics: [
      { title: "Onboarding" },
      { title: "Audit Readiness and Compliance Artifacts" },
      { title: "Security Controls Implementation & Monitoring" },
      { title: "Incident Response" },
      { title: "Disaster Recovery" },
      { title: "Business Continuity" },
    ],

    // Content
    aboutTitle: "About the Roundtable",
    aboutDescription:
      "SPS is hosting a monthly Information Security Officer Roundtable for the Commonwealth of Virginia, bringing together cybersecurity leaders across state and local government to collaborate, share, and strengthen collective security posture. This invite-only forum is led by Dave Shure, Information Security Officer for the Virginia Department of Small Business and Supplier Diversity (SBSD), who has guided SBSD's journey toward compliance with SEC530 and the NIST 800-53 Control Framework.",
    quickInfo: [
      { bold: "Frequency:", text: "3rd Thursday of every month" },
      { bold: "Start Date:", text: "July 16th, 2026" },
      { bold: "Format:", text: "Virtual (Microsoft Teams)" },
    ],
    whyAttendTitle: "Why Attend",
    whyAttendIntro: "A dedicated peer-collaboration forum where participants can:",
    whyAttendPoints: [
      "Benchmark their security posture against fellow agency peers",
      "Gain actionable governance templates, control mappings, and artifacts",
      "Learn directly from active state practitioners—not vendor consultants",
      "Contribute to elevating cybersecurity standards across the Commonwealth of Virginia",
    ],
    goalsTitle: "Goals and Objectives",
    goals: [
      {
        bold: "Strengthen Security Posture",
        text: "Improve defensive resilience across Virginia state and local agencies through shared intelligence.",
      },
      {
        bold: "Accelerate NIST & SEC530 Alignment",
        text: "Exchange practical, audit-ready framework approaches for NIST 800-53 and SEC530 controls.",
      },
      {
        bold: "Promote Reusable Artifacts",
        text: "Leverage shared baseline policies, risk assessment templates, and proven remediation plans.",
      },
      {
        bold: "Enable Peer Collaboration",
        text: "Foster open dialogue, honest benchmarking, and collaborative problem-solving across agencies.",
      },
      {
        bold: "Enhance Audit Readiness",
        text: "Transition from reactive compliance fire-drills to continuous, audit-ready security operations.",
      },
      {
        bold: "Address Emerging Threats",
        text: "Coordinate proactive defensive strategies against AI-driven threats, ransomware, and supply-chain vulnerabilities.",
      },
    ],
    agendaTitle: "Agenda",
    agenda: [
      { text: "Real-world implementation challenges" },
      { text: "Lessons learned from achieving compliance" },
      { text: "Practical strategies for audit readiness" },
      { text: "Framework alignment approaches (SEC530, NIST)" },
      { text: "Peer-driven discussion on emerging threats and solutions" },
    ],
    whoShouldJoinTitle: "Who should join",
    whoShouldJoin: [
      {
        bold: "Chief Information Security Officers (CISOs) and Information Security Officers (ISOs)",
        text: "across Virginia state agencies",
      },
      {
        bold: "County and Municipal IT & Security Leaders",
        text: "responsible for cybersecurity and compliance",
      },
      {
        bold: "Risk, Compliance, and Governance Professionals",
        text: "aligned with SEC530 and NIST Cybersecurity Framework (CSF)",
      },
      {
        bold: "IT Directors and Technology Leaders",
        text: "overseeing security operations and infrastructure",
      },
      {
        bold: "Security Architects and Program Managers",
        text: "involved in implementing cybersecurity frameworks",
      },
    ],
    idealParticipantsTitle: "Ideal Participants",
    idealParticipantsText:
      "This roundtable is designed for decision-makers and practitioners who are directly responsible for improving cybersecurity posture, managing compliance, and leading security initiatives within the Virginia state and local government.",
  },
];

// ============ HELPERS ============
export function getRoundtableBySlug(slug: string) {
  return roundtables.find((r) => r.slug === slug);
}

export function getAllRoundtableSlugs() {
  return roundtables.map((r) => ({ slug: r.slug }));
}