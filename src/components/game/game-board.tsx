// Game board with drop zones
import { CORRECT_ORDER } from "../../constants/index.ts";
import { DropZone } from "./drop-zone.tsx";

interface GameBoardProps {
  slots: (string | null)[];
  onDrop: (index: number) => void;
  onRemove: (index: number) => void;
  showResult: boolean;
}

export function GameBoard({
  slots,
  onDrop,
  onRemove,
  showResult,
}: GameBoardProps) {
  return (
    <div class="game-board">
      {slots.map((itemId, index) => (
        <DropZone
          key={index}
          index={index}
          itemId={itemId}
          onDrop={() => onDrop(index)}
          onRemove={() => onRemove(index)}
          showResult={showResult}
          isCorrect={showResult && itemId === CORRECT_ORDER[index]}
        />
      ))}
    </div>
  );
}
