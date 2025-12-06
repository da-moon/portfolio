// CertGroup component - Single certification category
import type { CertificationItem } from "../../types/index.ts";
import { Badge } from "../ui/index.ts";

interface CertGroupProps {
  title: string;
  certs: CertificationItem[];
}

export function CertGroup({ title, certs }: CertGroupProps) {
  if (certs.length === 0) return null;

  return (
    <div class="skills-category">
      <h3 class="skills-category__title">{title}</h3>
      <div class="skills-list">
        {certs.map((cert) => <Badge key={cert.id} text={cert.name} />)}
      </div>
    </div>
  );
}
