// App component - Root component composing all sections
import { useEffect } from "preact/hooks";
import {
  BackgroundEffects,
  Certifications,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
} from "./components/index.ts";
import { setupScrollAnimations } from "./utils/animations.ts";

export function App() {
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
    </>
  );
}
