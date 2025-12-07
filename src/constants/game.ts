// Game constants for "Deploy the Stack" mini-game (R3, R11)

export interface GameComponent {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// Components that can be dragged in the game
export const GAME_COMPONENTS: GameComponent[] = [
  {
    id: "terraform",
    name: "Terraform",
    icon: "TF",
    description: "Infrastructure provisioning",
  },
  {
    id: "vault",
    name: "Vault",
    icon: "VT",
    description: "Secrets management",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "K8",
    description: "Container orchestration",
  },
  {
    id: "cicd",
    name: "CI/CD",
    icon: "CI",
    description: "Continuous integration",
  },
  {
    id: "monitoring",
    name: "Monitoring",
    icon: "MO",
    description: "Observability stack",
  },
];

// Correct deployment order
export const CORRECT_ORDER = [
  "terraform",
  "vault",
  "kubernetes",
  "cicd",
  "monitoring",
];

// Game messages
export const GAME_MESSAGES = {
  title: "Deploy the Stack",
  instructions: "Drag components into the correct deployment order",
  success: {
    title: "terraform apply complete!",
    message: "Apply complete! Resources: 5 added, 0 changed, 0 destroyed.",
  },
  failure: {
    title: "terraform apply failed!",
    message:
      "Error: Resource dependency cycle detected. Check your deployment order.",
  },
  hint:
    "Hint: Infrastructure first, then secrets, containers, pipelines, observability",
} as const;

// Konami code sequence
export const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];
