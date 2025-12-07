// Skills section - kubectl table (desktop) + badge grid (mobile)
import { SECTION_IDS, UI } from "../../../constants/index.ts";
import { Section } from "../../layout/index.ts";
import { KubectlTable } from "./kubectl-table.tsx";
import { SkillGrid } from "./skill-grid.tsx";

export function Skills() {
  return (
    <Section id={SECTION_IDS.skills} title={UI.sections.skills}>
      {/* Desktop: kubectl table */}
      <div class="skills-desktop animate-on-scroll">
        <KubectlTable />
      </div>

      {/* Mobile: badge grid */}
      <div class="skills-mobile animate-on-scroll">
        <SkillGrid />
      </div>
    </Section>
  );
}
