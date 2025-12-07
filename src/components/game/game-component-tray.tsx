// Tray of draggable components
import { GAME_COMPONENTS } from "../../constants/index.ts";
import { DraggableItem } from "./draggable-item.tsx";

interface GameComponentTrayProps {
  draggedItem: string | null;
  isInSlot: (id: string) => boolean;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
}

export function GameComponentTray({
  draggedItem,
  isInSlot,
  onDragStart,
  onDragEnd,
}: GameComponentTrayProps) {
  return (
    <div class="game-tray">
      {GAME_COMPONENTS.map((component) => (
        <DraggableItem
          key={component.id}
          component={component}
          isDragging={draggedItem === component.id}
          isInSlot={isInSlot(component.id)}
          onDragStart={() => onDragStart(component.id)}
          onDragEnd={onDragEnd}
        />
      ))}
    </div>
  );
}
