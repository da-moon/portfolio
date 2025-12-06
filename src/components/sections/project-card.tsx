// ProjectCard component - Single project display
import type { ProjectItem } from "../../types/index.ts";
import { Badge, Card } from "../ui/index.ts";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <h3 class="card__title">{project.title}</h3>
      <p class="card__description">{project.description}</p>
      <div class="card__tags">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            text={tag}
            variant="teal"
          />
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="card__link"
        >
          View &rarr;
        </a>
      )}
    </Card>
  );
}
