// Button component - CTA button with link support
import type { ComponentChildren } from "preact";

interface ButtonProps {
  href?: string;
  children: ComponentChildren;
  external?: boolean;
}

export function Button({ href, children, external = false }: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (href) {
    return (
      <a href={href} class="btn" {...externalProps}>
        {children}
      </a>
    );
  }

  return <button type="button" class="btn">{children}</button>;
}
