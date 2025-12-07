// Hero title (fades in)
import { useEffect, useRef } from "preact/hooks";
import { PERSONAL } from "../../../constants/index.ts";

interface HeroTitleProps {
  visible: boolean;
}

export function HeroTitle({ visible }: HeroTitleProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current && visible) {
      ref.current.style.transition = "opacity 0.5s ease";
      ref.current.style.opacity = "1";
    }
  }, [visible]);

  return (
    <p ref={ref} class="hero__title" style={{ opacity: 0 }}>
      {PERSONAL.title}
    </p>
  );
}
