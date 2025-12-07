// HCL block header: resource "type" "name" {
interface HclBlockHeaderProps {
  resourceType: string;
  resourceName: string;
}

export function HclBlockHeader(
  { resourceType, resourceName }: HclBlockHeaderProps,
) {
  return (
    <div class="hcl-block__header">
      <span class="hcl-block__keyword">resource</span>
      <span class="hcl-block__type">"{resourceType}"</span>
      <span class="hcl-block__name">"{resourceName}"</span>
      <span class="hcl-block__bracket">{"{"}</span>
    </div>
  );
}
