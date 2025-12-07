// Hero tagline (fades in)
import { useEffect, useRef } from "preact/hooks";
import { PERSONAL } from "../../../constants/index.ts";

interface HeroTaglineProps {
  visible: boolean;
}

export function HeroTagline({ visible }: HeroTaglineProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current && visible) {
      ref.current.style.transition = "opacity 0.5s ease";
      ref.current.style.opacity = "1";
    }
  }, [visible]);

  return (
    <p ref={ref} class="hero__tagline" style={{ opacity: 0 }}>
      {PERSONAL.tagline}
    </p>
  );
}
