// Hero greeting line
import { UI } from "../../../constants/index.ts";

export function HeroGreeting() {
  return (
    <p class="terminal hero__greeting">
      <span class="terminal__prompt">{UI.hero.greeting}</span>
    </p>
  );
}
