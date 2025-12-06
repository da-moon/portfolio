// Experience section - Career timeline
import { EXPERIENCE } from "../../constants/data.ts";
import { SECTION_IDS, UI } from "../../constants/content.ts";
import { Section } from "../layout/index.ts";
import { ExperienceItem } from "./experience-item.tsx";

export function Experience() {
  return (
    <Section id={SECTION_IDS.experience} title={UI.sections.experience}>
      <div class="timeline animate-on-scroll">
        {EXPERIENCE.map((item) => <ExperienceItem key={item.id} item={item} />)}
      </div>
    </Section>
  );
}
