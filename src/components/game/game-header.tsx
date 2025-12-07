// Game header with title and instructions
import { GAME_MESSAGES } from "../../constants/index.ts";

export function GameHeader() {
  return (
    <div class="game-header">
      <h2 class="game-header__title">{GAME_MESSAGES.title}</h2>
      <p class="game-header__instructions">{GAME_MESSAGES.instructions}</p>
    </div>
  );
}
