// Certifications constants (R3, R11)

import type { CertificationItem } from "../types/index.ts";

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

// Group certifications by category
export function getCertificationsByCategory(
  category: CertificationItem["category"],
): CertificationItem[] {
  return CERTIFICATIONS.filter((cert) => cert.category === category);
}

export const CERTIFICATION_CATEGORIES: Array<{
  key: CertificationItem["category"];
  title: string;
}> = [
  { key: "kubernetes", title: "Kubernetes" },
  { key: "cloud", title: "Cloud Platforms" },
  { key: "hashicorp", title: "HashiCorp" },
  { key: "linux", title: "Linux" },
];
