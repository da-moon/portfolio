// Projects constants (R3, R11)

import type { ProjectItem } from "../types/index.ts";

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
