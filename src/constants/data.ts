// Portfolio data constants (R3, R11)

import type {
  CertificationItem,
  ExperienceItem,
  PersonalInfo,
  ProjectItem,
  SkillGroup,
  SocialLink,
} from "../types/index.ts";

export const PERSONAL: PersonalInfo = {
  name: "Damoon Azarpazhooh",
  title: "Principal Cloud Architect",
  tagline:
    "Building secure, scalable cloud-native solutions across multi-cloud environments. Passionate about DevOps, Kubernetes, and GenAI.",
  location: "Toronto, ON",
  email: "damoon.azarpazhooh@gmail.com",
  github: "https://github.com/da-moon",
};

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

// Anonymized experience data - no client names
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Principal Cloud Architect",
    company: "Enterprise Consulting",
    industry: "Telecom Enterprise",
    location: "Toronto, ON",
    dateRange: "Nov 2024 - Present",
    highlights: [
      "Architecting next-generation CI/CD platform using GitLab Enterprise on Red Hat OpenShift",
      "Contributing to high-visibility GenAI initiatives using dSPy and Langchain",
      "Managing and mentoring a team of engineers on architectural standards",
      "Designing secure, multi-tenant integration systems for vendor code validation",
      "Implementing automated security scanning with enterprise compliance standards",
      "Building internal software catalogue using Spotify Backstage",
    ],
  },
  {
    id: "exp-2",
    title: "Principal Cloud Architect",
    company: "Cloud Consulting",
    industry: "Financial Services - Data Analytics",
    location: "Toronto, ON",
    dateRange: "May 2023 - Nov 2024",
    highlights: [
      "Led architectural efforts for global data analytics platform focusing on BI and deployment strategies",
      "Spearheaded VMware migration practice with comprehensive frameworks and training",
      "Designed secure, scalable IaC pipelines using GCP and VMware NSXT on Google VMware Engine",
      "Architected supply chain security solutions including SBOM management (SPDX) and digital signing",
      "Pioneered OpenVEX standard implementation for vulnerability exception handling",
      "Delivered Docker image pipelines with zero CVE vulnerabilities using Chainguard/Wolfi",
    ],
  },
  {
    id: "exp-3",
    title: "Senior DevOps Architect",
    company: "Technology Consulting",
    industry: "Multi-Industry (Finance, Auto, Insurance)",
    location: "Toronto, ON",
    dateRange: "Aug 2021 - Apr 2023",
    highlights: [
      "Designed hybrid and multi-cloud solutions for financial, automotive, and insurance enterprises",
      "Developed custom Terraform and Vault plugins establishing best-practice landing zones",
      "Directed Kubernetes adoption including cluster deployment automation and CI/CD implementations",
      "Conducted in-depth IaC audits improving infrastructure security and compliance",
    ],
  },
  {
    id: "exp-4",
    title: "Senior DevOps Engineer",
    company: "Technology Consulting",
    industry: "Enterprise Infrastructure",
    location: "Toronto, ON",
    dateRange: "Jan 2021 - Jul 2021",
    highlights: [
      "Managed enterprise-scale HashiCorp Vault and Consul environments",
      "Optimized container orchestration practices with Nomad",
      "Integrated monitoring solutions using Prometheus, Loki, and Grafana",
    ],
  },
  {
    id: "exp-5",
    title: "Principal Engineer",
    company: "Blockchain Startup",
    industry: "Blockchain Infrastructure",
    location: "Toronto, ON",
    dateRange: "Jan 2018 - Sep 2020",
    highlights: [
      "Developed high-performance S3-compatible object storage using Sia Blockchain technology",
      "Led full-cycle application lifecycle management with Packer, Terraform, Consul, Vault, Docker, and Nomad",
      "Directed remote software development teams and delivered extensive training programs",
    ],
  },
  {
    id: "exp-6",
    title: "Software Engineering Consultant",
    company: "Independent",
    industry: "Various Industries",
    location: "Toronto, ON",
    dateRange: "Jan 2010 - Jan 2018",
    highlights: [
      "Provided strategic consulting for production-grade APIs and cloud-native applications",
      "Facilitated DevOps transformations and cloud migrations for enterprise clients",
      "Delivered solutions across technology, education, and business sectors",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Cross-Chain Asset Transfer Server",
    description:
      "Concurrent cross-chain asset transfer system between Aion and Ethereum networks",
    tags: ["Blockchain", "Ethereum", "Aion", "Go"],
  },
  {
    id: "proj-2",
    title: "ERC223 Smart Contract Implementation",
    description:
      "First implementation of ERC223 smart contract standard on Ethereum mainnet",
    tags: ["Ethereum", "Solidity", "Smart Contracts"],
  },
  {
    id: "proj-3",
    title: "Enterprise Blockchain Solutions",
    description:
      "Designed and developed blockchain solutions from inception for business school research initiatives",
    tags: ["Blockchain", "Enterprise", "Research"],
  },
  {
    id: "proj-4",
    title: "Zero-CVE Container Pipelines",
    description:
      "Built Docker image pipelines achieving zero CVE vulnerabilities using Chainguard/Wolfi base images",
    tags: ["Docker", "Security", "DevSecOps", "Chainguard"],
  },
  {
    id: "proj-5",
    title: "Terraform Provider Contributions",
    description:
      "Authored contributions to Terraform provider codebase in Go for infrastructure automation",
    tags: ["Terraform", "Go", "Open Source", "IaC"],
    link: "https://github.com/da-moon",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { id: "cert-1", name: "CKS", issuer: "CNCF", category: "kubernetes" },
  { id: "cert-2", name: "CKA", issuer: "CNCF", category: "kubernetes" },
  { id: "cert-3", name: "CKAD", issuer: "CNCF", category: "kubernetes" },
  { id: "cert-4", name: "KCNA", issuer: "CNCF", category: "kubernetes" },
  {
    id: "cert-5",
    name: "GCP Cloud Architect",
    issuer: "Google",
    category: "cloud",
  },
  {
    id: "cert-6",
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    category: "cloud",
  },
  {
    id: "cert-7",
    name: "Terraform Associate (CHIP)",
    issuer: "HashiCorp",
    category: "hashicorp",
  },
  {
    id: "cert-8",
    name: "Vault Associate (CHIP)",
    issuer: "HashiCorp",
    category: "hashicorp",
  },
  {
    id: "cert-9",
    name: "LFCS",
    issuer: "Linux Foundation",
    category: "linux",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/da-moon",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:damoon.azarpazhooh@gmail.com",
  },
];
