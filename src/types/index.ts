// Domain models for portfolio data (R1)

export type SkillCategory =
  | "cloud"
  | "containers"
  | "iac"
  | "cicd"
  | "networking"
  | "monitoring"
  | "security"
  | "languages";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  industry: string;
  location: string;
  dateRange: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: "cloud" | "kubernetes" | "hashicorp" | "linux";
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
}
