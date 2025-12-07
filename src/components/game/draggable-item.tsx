// Draggable game component
import type { GameComponent } from "../../constants/index.ts";

interface DraggableItemProps {
  component: GameComponent;
  isDragging: boolean;
  isInSlot: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
}

export function DraggableItem({
  component,
  isDragging,
  isInSlot,
  onDragStart,
  onDragEnd,
}: DraggableItemProps) {
  if (isInSlot) return null;

  const itemClass = `game-item ${isDragging ? "dragging" : ""}`;

  return (
    <div
      class={itemClass}
      draggable
      onDragStart={(e) => {
        e.dataTransfer?.setData("text/plain", component.id);
        onDragStart();
      }}
      onDragEnd={onDragEnd}
    >
      <div class="game-item__icon">{component.icon}</div>
      <div class="game-item__name">{component.name}</div>
    </div>
  );
}
