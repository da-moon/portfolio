// Section component - Reusable section wrapper with optional header
import type { ComponentChildren } from "preact";
import { Container } from "./container.tsx";

interface SectionProps {
  id: string;
  children: ComponentChildren;
  className?: string;
  title?: string;
  animate?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  title,
  animate = true,
}: SectionProps) {
  return (
    <section id={id} class={`section ${className}`.trim()}>
      <Container>
        {title && (
          <div
            class={animate
              ? "section__header animate-on-scroll"
              : "section__header"}
          >
            <h2 class="section__title">{title}</h2>
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
