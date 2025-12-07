// Timeline component for mobile experience view
import { EXPERIENCE } from "../../../constants/index.ts";
import { TimelineItem } from "./timeline-item.tsx";

export function Timeline() {
  return (
    <div class="timeline">
      {EXPERIENCE.map((item) => <TimelineItem key={item.id} item={item} />)}
    </div>
  );
}
