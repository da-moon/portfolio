// Skills constants with experience metadata (R3, R11)

import type { SkillGroup } from "../types/index.ts";

export const SKILLS: SkillGroup[] = [
  {
    category: "cloud",
    title: "Multi-Cloud",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "OpenStack",
      "VMware vSphere",
      "NSXT",
      "HCX",
    ],
  },
  {
    category: "containers",
    title: "Container Orchestration",
    skills: ["Kubernetes", "Nomad", "Docker Swarm", "Red Hat OpenShift"],
  },
  {
    category: "iac",
    title: "Infrastructure as Code",
    skills: ["Terraform", "Vault", "Consul", "Packer"],
  },
  {
    category: "cicd",
    title: "CI/CD Pipelines",
    skills: [
      "GitHub Actions",
      "GitLab CI/CD",
      "Azure DevOps",
      "Jenkins",
      "Tekton",
      "Argo",
    ],
  },
  {
    category: "networking",
    title: "Service Mesh & Networking",
    skills: ["Consul", "Kong", "Istio"],
  },
  {
    category: "monitoring",
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Loki"],
  },
  {
    category: "security",
    title: "Security & Compliance",
    skills: [
      "Supply Chain Security",
      "SBOMs",
      "Vulnerability Management",
      "Wiz",
    ],
  },
  {
    category: "languages",
    title: "Programming Languages",
    skills: ["Rust", "Go", "Python", "Bash", "PowerShell", "TypeScript", "Lua"],
  },
];

// Skills with experience years for kubectl table display
export interface SkillWithExperience {
  name: string;
  namespace: string;
  experience: string;
  status: "Running" | "Completed";
}

export const SKILLS_WITH_EXPERIENCE: SkillWithExperience[] = [
  {
    name: "kubernetes",
    namespace: "containers",
    experience: "8y",
    status: "Running",
  },
  { name: "terraform", namespace: "iac", experience: "7y", status: "Running" },
  { name: "aws", namespace: "cloud", experience: "10y", status: "Running" },
  { name: "azure", namespace: "cloud", experience: "6y", status: "Running" },
  { name: "gcp", namespace: "cloud", experience: "5y", status: "Running" },
  { name: "vault", namespace: "security", experience: "6y", status: "Running" },
  { name: "rust", namespace: "languages", experience: "4y", status: "Running" },
  {
    name: "golang",
    namespace: "languages",
    experience: "6y",
    status: "Running",
  },
  {
    name: "python",
    namespace: "languages",
    experience: "12y",
    status: "Running",
  },
  { name: "gitops", namespace: "cicd", experience: "5y", status: "Running" },
  {
    name: "prometheus",
    namespace: "monitoring",
    experience: "5y",
    status: "Running",
  },
  {
    name: "docker",
    namespace: "containers",
    experience: "9y",
    status: "Running",
  },
];
