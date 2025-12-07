// Name typing animation (Mobile fallback + desktop after build)
import { useEffect, useRef } from "preact/hooks";
import { PERSONAL } from "../../../constants/index.ts";
import { TerminalCursor } from "../../ui/index.ts";
import { useTypingAnimation } from "../../../hooks/index.ts";

interface HeroNameTypingProps {
  startTyping?: boolean;
  onComplete?: () => void;
}

export function HeroNameTyping({
  startTyping = true,
  onComplete,
}: HeroNameTypingProps) {
  const nameRef = useRef<HTMLSpanElement>(null);
  const { start } = useTypingAnimation();

  useEffect(() => {
    if (startTyping && nameRef.current) {
      start(nameRef.current, PERSONAL.name, 60).then(() => {
        onComplete?.();
      });
    }
  }, [startTyping, start, onComplete]);

  return (
    <h1 class="hero__name terminal">
      <span class="terminal__prompt">&gt;</span>
      <span ref={nameRef} id="typed-name" />
      <TerminalCursor />
    </h1>
  );
}
