// HCL block list: name = ["item1", "item2", ...]
interface HclBlockListProps {
  name: string;
  items: string[];
}

export function HclBlockList({ name, items }: HclBlockListProps) {
  return (
    <div class="hcl-block__list">
      <span class="hcl-block__list-name">{name}</span>
      <span class="hcl-block__prop-equals">=</span>
      <span class="hcl-block__bracket">[</span>
      <div class="hcl-block__list-items">
        {items.map((item, index) => (
          <div key={item} class="hcl-block__list-item">
            {item}
            {index < items.length - 1 ? "," : ""}
          </div>
        ))}
      </div>
      <span class="hcl-block__bracket">]</span>
    </div>
  );
}
