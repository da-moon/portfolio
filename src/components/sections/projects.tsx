// Projects section - Notable work cards
import { PROJECTS, SECTION_IDS, UI } from "../../constants/index.ts";
import { Section } from "../layout/index.ts";
import { ProjectCard } from "./project-card.tsx";

export function Projects() {
  return (
    <Section id={SECTION_IDS.projects} title={UI.sections.projects}>
      <div class="grid grid--2 stagger-children">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
