export interface SkillCategory {
  id: string;
  badge: string;
  title: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  duration?: string;
  highlights: string[];
  description?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: 'web' | 'python' | 'api';
  stack: string[];
  summary: string;
  fullDescription: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  scoreLabel: string;
  scoreValue: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  number: string;
  title: string;
  issuer: string;
  scoreOrGrade?: string;
  date?: string;
  details?: string;
}
