// Single row in the kubectl table
import type { SkillWithExperience } from "../../../constants/index.ts";

interface KubectlTableRowProps {
  skill: SkillWithExperience;
}

export function KubectlTableRow({ skill }: KubectlTableRowProps) {
  const statusClass = skill.status === "Running"
    ? "kubectl-table__status kubectl-table__status--running"
    : "kubectl-table__status";

  return (
    <tr>
      <td class="kubectl-table__namespace">{skill.namespace}</td>
      <td class="kubectl-table__name">{skill.name}</td>
      <td>1/1</td>
      <td class={statusClass}>{skill.status}</td>
      <td class="kubectl-table__experience">{skill.experience}</td>
    </tr>
  );
}
