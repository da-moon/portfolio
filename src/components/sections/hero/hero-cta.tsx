// Hero CTA button (fades in)
import { useEffect, useRef } from "preact/hooks";
import { PERSONAL, UI } from "../../../constants/index.ts";
import { Button } from "../../ui/index.ts";

interface HeroCtaProps {
  visible: boolean;
}

export function HeroCta({ visible }: HeroCtaProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && visible) {
      ref.current.style.transition = "opacity 0.5s ease";
      ref.current.style.opacity = "1";
    }
  }, [visible]);

  return (
    <div ref={ref} class="hero__cta" style={{ opacity: 0 }}>
      <Button href={PERSONAL.github} external>
        {UI.hero.cta} &rarr;
      </Button>
    </div>
  );
}
