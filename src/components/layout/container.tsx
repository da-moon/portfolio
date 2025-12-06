// Container component - Centers content with max-width
import type { ComponentChildren } from "preact";

interface ContainerProps {
  children: ComponentChildren;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return <div class={`container ${className}`.trim()}>{children}</div>;
}
