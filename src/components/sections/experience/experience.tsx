// Experience section - HCL blocks (desktop) + timeline (mobile)
import { EXPERIENCE, SECTION_IDS, UI } from "../../../constants/index.ts";
import { Section } from "../../layout/index.ts";
import { useExpandCollapse } from "../../../hooks/index.ts";
import { HclBlock } from "./hcl-block.tsx";
import { Timeline } from "./timeline.tsx";

export function Experience() {
  const { isExpanded, toggle } = useExpandCollapse();

  return (
    <Section id={SECTION_IDS.experience} title={UI.sections.experience}>
      {/* Desktop: HCL blocks */}
      <div class="experience-desktop animate-on-scroll">
        <div class="experience-grid">
          {EXPERIENCE.map((item) => (
            <HclBlock
              key={item.id}
              item={item}
              expanded={isExpanded(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Timeline */}
      <div class="experience-mobile animate-on-scroll">
        <Timeline />
      </div>
    </Section>
  );
}
