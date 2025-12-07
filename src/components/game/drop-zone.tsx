// Drop zone for game
import { useState } from "preact/hooks";
import { GAME_COMPONENTS } from "../../constants/index.ts";

interface DropZoneProps {
  index: number;
  itemId: string | null;
  onDrop: () => void;
  onRemove: () => void;
  showResult?: boolean;
  isCorrect?: boolean;
}

export function DropZone({
  index,
  itemId,
  onDrop,
  onRemove,
  showResult = false,
  isCorrect = false,
}: DropZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const component = itemId
    ? GAME_COMPONENTS.find((c) => c.id === itemId)
    : null;

  let zoneClass = "game-zone";
  if (isDragOver) zoneClass += " drag-over";
  if (itemId) zoneClass += " filled";
  if (showResult) {
    zoneClass += isCorrect ? " correct" : " incorrect";
  }

  return (
    <div
      class={zoneClass}
      onDragOver={(e) => {
        e.preventDefault();
        if (!itemId) setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragOver(false);
        if (!itemId) onDrop();
      }}
      onClick={() => {
        if (itemId && !showResult) onRemove();
      }}
    >
      <span class="game-zone__number">{index + 1}</span>
      {component
        ? (
          <div
            class="game-item"
            style={{ cursor: showResult ? "default" : "pointer" }}
          >
            <div class="game-item__icon">{component.icon}</div>
            <div class="game-item__name">{component.name}</div>
          </div>
        )
        : (
          <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
            Drop here
          </span>
        )}
    </div>
  );
}
