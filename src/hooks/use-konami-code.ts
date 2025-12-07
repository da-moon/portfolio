// Hook to detect Konami code sequence
import { useCallback, useEffect, useRef } from "preact/hooks";
import { KONAMI_CODE } from "../constants/index.ts";

interface UseKonamiCodeOptions {
  onSuccess: () => void;
  enabled?: boolean;
}

export function useKonamiCode({
  onSuccess,
  enabled = true,
}: UseKonamiCodeOptions): void {
  const sequenceRef = useRef<string[]>([]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      // Add key to sequence
      sequenceRef.current = [...sequenceRef.current, event.code].slice(
        -KONAMI_CODE.length,
      );

      // Check if sequence matches
      if (
        sequenceRef.current.length === KONAMI_CODE.length &&
        sequenceRef.current.every((key, i) => key === KONAMI_CODE[i])
      ) {
        sequenceRef.current = [];
        onSuccess();
      }
    },
    [enabled, onSuccess],
  );

  useEffect(() => {
    if (!enabled) return;

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, handleKeyDown]);
}
