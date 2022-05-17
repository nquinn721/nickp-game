import GameView from "../components/GameView";
import { Game } from "../game/Game";

const GameScreen = ({ game }: { game: Game }) => {
  return (
    <div>
      <GameView game={game} />
    </div>
  );
};

export default GameScreen;