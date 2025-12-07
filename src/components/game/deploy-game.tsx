// Deploy the Stack game modal
import { useCallback, useState } from "preact/hooks";
import { useDragDrop } from "../../hooks/index.ts";
import { GameHeader } from "./game-header.tsx";
import { GameCloseButton } from "./game-close-button.tsx";
import { GameComponentTray } from "./game-component-tray.tsx";
import { GameBoard } from "./game-board.tsx";
import { GameResult } from "./game-result.tsx";

interface DeployGameProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeployGame({ isOpen, onClose }: DeployGameProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    slots,
    draggedItem,
    setDraggedItem,
    dropItem,
    removeFromSlot,
    isInSlot,
    isComplete,
    isCorrect,
    reset,
  } = useDragDrop(5);

  const handleSubmit = useCallback(() => {
    if (isComplete) {
      setSubmitted(true);
    }
  }, [isComplete]);

  const handleReset = useCallback(() => {
    reset();
    setSubmitted(false);
  }, [reset]);

  const handleClose = useCallback(() => {
    handleReset();
    onClose();
  }, [handleReset, onClose]);

  if (!isOpen) return null;

  const modalClass = `game-modal ${isOpen ? "visible" : ""}`;

  return (
    <div class={modalClass} onClick={handleClose}>
      <div class="game-modal__content" onClick={(e) => e.stopPropagation()}>
        <GameCloseButton onClose={handleClose} />
        <GameHeader />

        {!submitted
          ? (
            <>
              <GameComponentTray
                draggedItem={draggedItem}
                isInSlot={isInSlot}
                onDragStart={setDraggedItem}
                onDragEnd={() => setDraggedItem(null)}
              />

              <GameBoard
                slots={slots}
                onDrop={dropItem}
                onRemove={removeFromSlot}
                showResult={false}
              />

              <button
                type="button"
                class="game-submit"
                onClick={handleSubmit}
                disabled={!isComplete}
              >
                terraform apply
              </button>
            </>
          )
          : (
            <>
              <GameBoard
                slots={slots}
                onDrop={() => {}}
                onRemove={() => {}}
                showResult
              />
              <GameResult isCorrect={isCorrect} onReset={handleReset} />
            </>
          )}
      </div>
    </div>
  );
}
