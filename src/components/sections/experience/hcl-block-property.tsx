// HCL block property: name = "value"
interface HclBlockPropertyProps {
  name: string;
  value: string;
  isKeyword?: boolean;
}

export function HclBlockProperty(
  { name, value, isKeyword = false }: HclBlockPropertyProps,
) {
  const valueClass = isKeyword
    ? "hcl-block__prop-value hcl-block__prop-value--keyword"
    : "hcl-block__prop-value";

  const displayValue = isKeyword ? value : `"${value}"`;

  return (
    <div class="hcl-block__property">
      <span class="hcl-block__prop-name">{name}</span>
      <span class="hcl-block__prop-equals">=</span>
      <span class={valueClass}>{displayValue}</span>
    </div>
  );
}
