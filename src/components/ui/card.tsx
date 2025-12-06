// Card component - Generic card container
import type { ComponentChildren } from "preact";

interface CardProps {
  children: ComponentChildren;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return <div class={`card ${className}`.trim()}>{children}</div>;
}
