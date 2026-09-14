import React from "react";
import {
  Shield,
  Network,
  Server,
  ShieldCheck,
  UserCheck,
  ShieldAlert,
  Cloud,
  GitBranch,
  Move,
  Layers,
  Sparkles,
  Zap,
  BarChart3,
  Bot,
  Users,
  Calendar,
  GraduationCap,
  Fingerprint,
  UsersRound,
  ArrowUpRight,
  LucideProps,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  "lucide:shield": Shield,
  "lucide:network": Network,
  "lucide:server": Server,
  "lucide:shield-check": ShieldCheck,
  "lucide:user-check": UserCheck,
  "lucide:shield-alert": ShieldAlert,
  "lucide:cloud": Cloud,
  "lucide:git-branch": GitBranch,
  "lucide:move": Move,
  "lucide:layers": Layers,
  "lucide:sparkles": Sparkles,
  "lucide:zap": Zap,
  "lucide:bar-chart-3": BarChart3,
  "lucide:bot": Bot,
  "lucide:users": Users,
  "lucide:calendar": Calendar,
  "lucide:graduation-cap": GraduationCap,
  "lucide:fingerprint": Fingerprint,
  "lucide:users-round": UsersRound,
  "lucide:arrow-up-right": ArrowUpRight,
};

interface LucideIconProps extends LucideProps {
  name: string;
}

export function LucideIcon({ name, ...props }: LucideIconProps) {
  const Component = ICON_MAP[name] || Shield;
  return <Component {...props} />;
}
