// Experience constants - anonymized (R3, R11)

import type { ExperienceItem } from "../types/index.ts";

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

// HCL-style resource names for experience blocks
export function getExperienceResourceName(item: ExperienceItem): string {
  return item.title.toLowerCase().replace(/\s+/g, "_");
}

export function getExperienceProvider(item: ExperienceItem): string {
  return item.industry.toLowerCase().replace(/\s+/g, "_").replace(
    /[(),-]/g,
    "",
  );
}
