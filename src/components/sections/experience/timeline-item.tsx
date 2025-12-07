// Timeline item for experience (Mobile)
import type { ExperienceItem as ExperienceItemType } from "../../../types/index.ts";

interface TimelineItemProps {
  item: ExperienceItemType;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div class="timeline__item">
      <span class="timeline__date">{item.dateRange}</span>
      <h3 class="timeline__title">{item.title}</h3>
      <p class="timeline__company">
        {item.industry} &bull; {item.location}
      </p>
      <ul class="timeline__highlights">
        {item.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
