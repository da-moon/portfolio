// UI copy constants (R3) - All text content externalized

export const UI = {
  hero: {
    greeting: "> whoami",
    subtitle: "Principal Cloud Architect",
    tagline:
      "Building secure, scalable cloud-native solutions across multi-cloud environments. Passionate about DevOps, Kubernetes, and GenAI.",
    cta: "View GitHub",
    // Rust build output lines for desktop animation
    buildOutput: {
      compiling: "Compiling damoon v2024.12 (toronto/cloud-architect)",
      building: "Building",
      buildingLabel: "15+ years experience",
      linking: [
        "kubernetes::expertise",
        "terraform::mastery",
        "genai::innovation",
        "devsecops::pipelines",
      ],
      finished: "Finished release [optimized] target(s)",
      running: "Running `./portfolio`",
    },
  },

  sections: {
    skills: "Tech Stack",
    skillsKubectl: "kubectl get pods -n expertise --all-namespaces",
    experience: "Experience",
    projects: "Notable Projects",
    certifications: "Certifications",
    contact: "Contact",
  },

  footer: {
    copyright: "Built with TypeScript & Vite",
    location: "Toronto, ON",
    goImport: '// import "github.com/da-moon/portfolio"',
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
