import { observer } from "mobx-react-lite";
import { Game } from "../game/Game";
import CharacterView from "./CharacterView";
import EnemyView from "./EnemyView";

const GameView = observer(({ game }: { game: Game }) => {
  console.log("gameview");
  return (
    <div>
      <div>Game</div>
      <div className="flex justify-space-around">
        {game.characters.map(v => (
          <CharacterView character={v} key={v.id} game={game} />
        ))}
        <div>
          {game.enemies.map(v => (
            <EnemyView enemy={v} key={v.id} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default GameView;
