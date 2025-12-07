// Single line in the Rust build output
interface BuildLineProps {
  prefix: string;
  prefixType?: "compiling" | "building" | "linking" | "finished" | "running";
  text: string;
  highlight?: boolean;
  visible: boolean;
}

export function BuildLine({
  prefix,
  prefixType = "compiling",
  text,
  highlight = false,
  visible,
}: BuildLineProps) {
  const prefixClass = `rust-build__prefix rust-build__prefix--${prefixType}`;
  const textClass = highlight
    ? "rust-build__text rust-build__text--highlight"
    : "rust-build__text";
  const lineClass = `rust-build__line ${visible ? "visible" : ""}`;

  return (
    <div class={lineClass}>
      <span class={prefixClass}>{prefix}</span>
      <span class={textClass}>{text}</span>
    </div>
  );
}
