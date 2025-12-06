// Typing animation hook - Terminal-style character-by-character typing
import { useCallback } from "preact/hooks";

interface UseTypingAnimationReturn {
  start: (element: HTMLElement, text: string, speed?: number) => Promise<void>;
}

export function useTypingAnimation(): UseTypingAnimationReturn {
  const start = useCallback(
    (element: HTMLElement, text: string, speed: number = 50): Promise<void> => {
      return new Promise((resolve) => {
        let index = 0;
        element.textContent = "";

        const type = () => {
          if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
          } else {
            resolve();
          }
        };

        type();
      });
    },
    [],
  );

  return { start };
}
