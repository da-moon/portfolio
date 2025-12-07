// Game modal close button
interface GameCloseButtonProps {
  onClose: () => void;
}

export function GameCloseButton({ onClose }: GameCloseButtonProps) {
  return (
    <button
      type="button"
      class="game-modal__close"
      onClick={onClose}
      aria-label="Close game"
    >
      &times;
    </button>
  );
}
