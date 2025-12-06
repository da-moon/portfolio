// UI copy constants (R3) - All text content externalized

export const UI = {
  hero: {
    greeting: "> whoami",
    subtitle: "Principal Cloud Architect",
    tagline:
      "Building secure, scalable cloud-native solutions across multi-cloud environments. Passionate about DevOps, Kubernetes, and GenAI.",
    cta: "View GitHub",
  },

  sections: {
    skills: "Tech Stack",
    experience: "Experience",
    projects: "Notable Projects",
    certifications: "Certifications",
    contact: "Contact",
  },

  footer: {
    copyright: "Built with TypeScript & Vite",
    location: "Toronto, ON",
  },
} as const;

export const SECTION_IDS = {
  hero: "hero",
  skills: "skills",
  experience: "experience",
  projects: "projects",
  certifications: "certifications",
  contact: "contact",
} as const;
