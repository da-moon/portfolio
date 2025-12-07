// HCL resource block for experience item (Desktop)
import type { ExperienceItem } from "../../../types/index.ts";
import {
  getExperienceProvider,
  getExperienceResourceName,
} from "../../../constants/index.ts";
import { HclBlockHeader } from "./hcl-block-header.tsx";
import { HclBlockProperty } from "./hcl-block-property.tsx";
import { HclBlockList } from "./hcl-block-list.tsx";
import { HclBlockLifecycle } from "./hcl-block-lifecycle.tsx";

interface HclBlockProps {
  item: ExperienceItem;
  expanded: boolean;
  onToggle: () => void;
}

export function HclBlock({ item, expanded, onToggle }: HclBlockProps) {
  const resourceName = getExperienceResourceName(item);
  const provider = getExperienceProvider(item);

  const blockClass = `hcl-block ${expanded ? "hcl-block--expanded" : ""}`;

  // Extract skills from highlights
  const skills = extractSkillsFromHighlights(item.highlights);

  return (
    <div class={blockClass} onClick={onToggle}>
      <HclBlockHeader resourceType="career" resourceName={resourceName} />
      <div class="hcl-block__body">
        <HclBlockProperty name="provider" value={provider} />
        <HclBlockProperty
          name="region"
          value={item.location.toLowerCase().replace(", ", "_")}
        />
        <HclBlockProperty name="period" value={item.dateRange} />

        {/* Chevron indicator */}
        <div class="hcl-block__chevron">
          <span class="hcl-block__chevron-icon">{expanded ? "▾" : "▸"}</span>
        </div>

        <div class="hcl-block__expandable">
          <HclBlockList name="skills" items={skills} />
          <HclBlockList name="highlights" items={item.highlights} />
          <HclBlockLifecycle />
        </div>
      </div>
      <span class="hcl-block__bracket">{"}"}</span>
    </div>
  );
}

// Helper to extract skill keywords from highlights
function extractSkillsFromHighlights(highlights: string[]): string[] {
  const skillKeywords = [
    "kubernetes",
    "terraform",
    "vault",
    "consul",
    "docker",
    "ci/cd",
    "genai",
    "openshift",
    "gitlab",
    "prometheus",
    "grafana",
    "aws",
    "gcp",
    "azure",
    "blockchain",
    "rust",
    "go",
    "python",
  ];

  const found = new Set<string>();
  const text = highlights.join(" ").toLowerCase();

  for (const skill of skillKeywords) {
    if (text.includes(skill)) {
      found.add(skill);
    }
  }

  return Array.from(found).slice(0, 6);
}
