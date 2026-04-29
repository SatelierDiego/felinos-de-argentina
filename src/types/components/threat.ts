export interface Threat {
  title: string;
  icon: string;
  description: string;
}

export interface ThreatGridProps {
  threats: Threat[];
}

export interface ThreatCardProps extends Threat {}
