// kubectl-style skills table (Desktop only)
import { SKILLS_WITH_EXPERIENCE, UI } from "../../../constants/index.ts";
import { KubectlTableHeader } from "./kubectl-table-header.tsx";
import { KubectlTableRow } from "./kubectl-table-row.tsx";

export function KubectlTable() {
  return (
    <div class="kubectl-table">
      <p class="kubectl-table__command">
        <span class="kubectl-table__prompt">$</span> {UI.sections.skillsKubectl}
      </p>
      <table>
        <KubectlTableHeader />
        <tbody>
          {SKILLS_WITH_EXPERIENCE.map((skill) => (
            <KubectlTableRow key={skill.name} skill={skill} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
