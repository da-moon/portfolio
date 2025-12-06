// Hero section - Terminal-style intro with typing animation
import { useEffect, useRef } from "preact/hooks";
import { PERSONAL } from "../../constants/data.ts";
import { SECTION_IDS, UI } from "../../constants/content.ts";
import { Container } from "../layout/index.ts";
import { Button, TerminalCursor } from "../ui/index.ts";
import { useTypingAnimation } from "../../hooks/index.ts";

export function Hero() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { start: startTyping } = useTypingAnimation();

  useEffect(() => {
    const animate = async () => {
      if (!nameRef.current) return;

      // Type the name
      await startTyping(nameRef.current, PERSONAL.name, 60);

      // Small delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Fade in title
      if (titleRef.current) {
        titleRef.current.style.transition = "opacity 0.5s ease";
        titleRef.current.style.opacity = "1";
      }
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Fade in tagline
      if (taglineRef.current) {
        taglineRef.current.style.transition = "opacity 0.5s ease";
        taglineRef.current.style.opacity = "1";
      }
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Fade in CTA
      if (ctaRef.current) {
        ctaRef.current.style.transition = "opacity 0.5s ease";
        ctaRef.current.style.opacity = "1";
      }
    };

    animate();
  }, [startTyping]);

  return (
    <section id={SECTION_IDS.hero} class="section section--hero">
      <Container>
        <div class="hero__content">
          <p class="terminal hero__greeting">
            <span class="terminal__prompt">{UI.hero.greeting}</span>
          </p>
          <h1 class="hero__name terminal">
            <span class="terminal__prompt">&gt;</span>
            <span ref={nameRef} id="typed-name" />
            <TerminalCursor />
          </h1>
          <p ref={titleRef} class="hero__title" style={{ opacity: 0 }}>
            {PERSONAL.title}
          </p>
          <p ref={taglineRef} class="hero__tagline" style={{ opacity: 0 }}>
            {PERSONAL.tagline}
          </p>
          <div ref={ctaRef} class="hero__cta" style={{ opacity: 0 }}>
            <Button href={PERSONAL.github} external>
              {UI.hero.cta} &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
