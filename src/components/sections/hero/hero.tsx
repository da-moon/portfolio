// Hero section - Terminal-style intro with build animation
import { useCallback, useState } from "preact/hooks";
import { SECTION_IDS } from "../../../constants/index.ts";
import { Container } from "../../layout/index.ts";
import { HeroBuildOutput } from "./hero-build-output.tsx";
import { HeroNameTyping } from "./hero-name-typing.tsx";
import { HeroGreeting } from "./hero-greeting.tsx";
import { HeroTitle } from "./hero-title.tsx";
import { HeroTagline } from "./hero-tagline.tsx";
import { HeroCta } from "./hero-cta.tsx";

export function Hero() {
  const [buildComplete, setBuildComplete] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showCta, setShowCta] = useState(false);

  const handleBuildComplete = useCallback(() => {
    setBuildComplete(true);
  }, []);

  const handleNameComplete = useCallback(() => {
    setNameComplete(true);
    // Stagger the fade-ins
    setTimeout(() => setShowTitle(true), 300);
    setTimeout(() => setShowTagline(true), 500);
    setTimeout(() => setShowCta(true), 700);
  }, []);

  return (
    <section id={SECTION_IDS.hero} class="section section--hero">
      <Container>
        {/* Desktop: Side-by-side layout */}
        <div class="hero__layout">
          {/* Left: Text content */}
          <div class="hero__text">
            <HeroGreeting />
            <div class="hero__name-wrapper">
              <HeroNameTyping
                startTyping={buildComplete}
                onComplete={handleNameComplete}
              />
            </div>
            <HeroTitle visible={showTitle || nameComplete} />
            <HeroTagline visible={showTagline || nameComplete} />
            <HeroCta visible={showCta || nameComplete} />
          </div>

          {/* Right: Terminal with build output */}
          <div class="hero__terminal-wrapper">
            <HeroBuildOutput onComplete={handleBuildComplete} />
          </div>
        </div>

        {/* Mobile: Stacked layout (no terminal) */}
        <div class="hero__mobile">
          <HeroGreeting />
          <HeroNameTyping startTyping onComplete={handleNameComplete} />
          <HeroTitle visible={showTitle || nameComplete} />
          <HeroTagline visible={showTagline || nameComplete} />
          <HeroCta visible={showCta || nameComplete} />
        </div>
      </Container>
    </section>
  );
}
