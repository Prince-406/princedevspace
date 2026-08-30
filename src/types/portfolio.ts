export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Web Apps' | 'E-commerce / UI';
  tech: string[];
  features: string[];
  image: string;
  liveUrl: string;
  sourceUrl: string;
  color: string;
  accentColor: string;
}

export interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Learning';
  icon: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  iconName: string;
  color: string;
  skills: Skill[];
}

export interface TimelineMilestone {
  id: string;
  phase: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
}