// Certifications section - Grouped certification badges
import { CERTIFICATIONS } from "../../constants/data.ts";
import { SECTION_IDS, UI } from "../../constants/content.ts";
import { Section } from "../layout/index.ts";
import { CertGroup } from "./cert-group.tsx";

export function Certifications() {
  const kubeCerts = CERTIFICATIONS.filter((c) => c.category === "kubernetes");
  const cloudCerts = CERTIFICATIONS.filter((c) => c.category === "cloud");
  const hashiCerts = CERTIFICATIONS.filter((c) => c.category === "hashicorp");
  const linuxCerts = CERTIFICATIONS.filter((c) => c.category === "linux");

  return (
    <Section id={SECTION_IDS.certifications} title={UI.sections.certifications}>
      <div class="certs-grid animate-on-scroll">
        <CertGroup title="Kubernetes" certs={kubeCerts} />
        <CertGroup title="Cloud Platforms" certs={cloudCerts} />
        <CertGroup title="HashiCorp" certs={hashiCerts} />
        <CertGroup title="Linux" certs={linuxCerts} />
      </div>
    </Section>
  );
}
