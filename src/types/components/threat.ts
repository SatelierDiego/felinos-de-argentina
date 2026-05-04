export interface Threat {
  title: string;
  icon: string;
  description: string;
}

export interface ThreatGridProps {
  threats: Threat[];
  separatorBefore?: boolean;
  separatorAfter?: boolean;
}

export interface ThreatCardProps extends Threat {}
