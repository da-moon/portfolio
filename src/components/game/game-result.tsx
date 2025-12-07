// Game result display
import { GAME_MESSAGES } from "../../constants/index.ts";

interface GameResultProps {
  isCorrect: boolean;
  onReset: () => void;
}

export function GameResult({ isCorrect, onReset }: GameResultProps) {
  const result = isCorrect ? GAME_MESSAGES.success : GAME_MESSAGES.failure;
  const titleClass = `game-result__title game-result__title--${
    isCorrect ? "success" : "failure"
  }`;

  return (
    <div class="game-result">
      <h3 class={titleClass}>{result.title}</h3>
      <p class="game-result__message">{result.message}</p>
      {!isCorrect && <p class="game-result__hint">{GAME_MESSAGES.hint}</p>}
      <button class="game-submit" onClick={onReset} type="button">
        {isCorrect ? "Play Again" : "Try Again"}
      </button>
    </div>
  );
}
