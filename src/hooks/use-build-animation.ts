// Hook for staggered build line reveal animation
import { useCallback, useMemo, useState } from "preact/hooks";

interface BuildLine {
  id: string;
  visible: boolean;
}

interface UseBuildAnimationReturn {
  lines: BuildLine[];
  startAnimation: (lineIds: string[], delayMs?: number) => Promise<void>;
  resetAnimation: () => void;
  isLineVisible: (id: string) => boolean;
  isComplete: boolean;
}

export function useBuildAnimation(
  initialLineIds: string[],
): UseBuildAnimationReturn {
  const [lines, setLines] = useState<BuildLine[]>(
    initialLineIds.map((id) => ({ id, visible: false })),
  );

  const startAnimation = useCallback(
    async (lineIds: string[], delayMs: number = 200): Promise<void> => {
      for (let i = 0; i < lineIds.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        setLines((prev) =>
          prev.map((line) =>
            line.id === lineIds[i] ? { ...line, visible: true } : line
          )
        );
      }
    },
    [],
  );

  const resetAnimation = useCallback(() => {
    setLines((prev) => prev.map((line) => ({ ...line, visible: false })));
  }, []);

  const isLineVisible = useCallback(
    (id: string): boolean => {
      const line = lines.find((l) => l.id === id);
      return line?.visible ?? false;
    },
    [lines],
  );

  const isComplete = useMemo(
    () => lines.length > 0 && lines.every((line) => line.visible),
    [lines],
  );

  return {
    lines,
    startAnimation,
    resetAnimation,
    isLineVisible,
    isComplete,
  };
}
