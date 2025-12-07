// App component - Root component composing all sections
import { useCallback, useEffect, useState } from "preact/hooks";
import {
  BackgroundEffects,
  Certifications,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
} from "./components/index.ts";
import { DeployGame } from "./components/game/index.ts";
import { TerminalButton } from "./components/ui/index.ts";
import { setupScrollAnimations } from "./utils/animations.ts";
import { useKonamiCode } from "./hooks/index.ts";

export function App() {
  const [gameOpen, setGameOpen] = useState(false);

  const openGame = useCallback(() => {
    setGameOpen(true);
  }, []);

  const closeGame = useCallback(() => {
    setGameOpen(false);
  }, []);

  // Easter egg: Konami code opens game
  useKonamiCode({
    onSuccess: openGame,
    enabled: !gameOpen,
  });

  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <>
      <BackgroundEffects />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Footer />
      <TerminalButton onClick={openGame} />
      <DeployGame isOpen={gameOpen} onClose={closeGame} />
    </>
  );
}
