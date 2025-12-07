// Mobile skill grid with badges
import { SKILLS } from "../../../constants/index.ts";
import { SkillGroup } from "./skill-group.tsx";

export function SkillGrid() {
  return (
    <div class="skills-grid">
      {SKILLS.map((group) => <SkillGroup key={group.category} group={group} />)}
    </div>
  );
}
