// SkillGroup component - Single skill category with badges
import type { SkillGroup as SkillGroupType } from "../../types/index.ts";
import { Badge } from "../ui/index.ts";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div class="skills-category">
      <h3 class="skills-category__title">{group.title}</h3>
      <div class="skills-list">
        {group.skills.map((skill) => <Badge key={skill} text={skill} />)}
      </div>
    </div>
  );
}
