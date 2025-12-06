// Badge component - Displays skill or tag badges

interface BadgeProps {
  text: string;
  variant?: "default" | "teal";
}

export function Badge({ text, variant = "default" }: BadgeProps) {
  const className = variant === "teal" ? "badge badge--teal" : "badge";
  return <span class={className}>{text}</span>;
}
