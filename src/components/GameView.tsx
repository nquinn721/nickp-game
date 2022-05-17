import { observer } from "mobx-react-lite";
import { Game } from "../game/Game";
import CharacterView from "./CharacterView";
import EnemyView from "./EnemyView";

const GameView = ({ game }: { game: Game }) => {
  console.log("aekfjweoaifjweoai", game.character);

  return (
    <div>
      <div>Game {game.gameOver && "GAME OVER"}</div>
      <div className="flex justify-space-around">
        <CharacterView character={game.character} game={game} />
        <div>
          {game.enemies.map((v) => (
            <EnemyView enemy={v} key={v.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(GameView);
