// Skills section - Tech stack grid
import { SKILLS } from "../../constants/data.ts";
import { SECTION_IDS, UI } from "../../constants/content.ts";
import { Section } from "../layout/index.ts";
import { SkillGroup } from "./skill-group.tsx";

export function Skills() {
  return (
    <Section id={SECTION_IDS.skills} title={UI.sections.skills}>
      <div class="skills-grid animate-on-scroll">
        {SKILLS.map((group) => (
          <SkillGroup
            key={group.category}
            group={group}
          />
        ))}
      </div>
    </Section>
  );
}
