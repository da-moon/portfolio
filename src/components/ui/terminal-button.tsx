// Floating terminal button to open the game (Desktop only)
interface TerminalButtonProps {
  onClick: () => void;
}

export function TerminalButton({ onClick }: TerminalButtonProps) {
  return (
    <button
      type="button"
      class="terminal-button"
      onClick={onClick}
      aria-label="Open Deploy the Stack game"
      title="Deploy the Stack"
    >
      <span class="terminal-button__icon">{">_"}</span>
    </button>
  );
}
