import { observer } from "mobx-react-lite";
import { Character } from "../game/Character";
import { Game } from "../game/Game";

const CharacterView = observer(
  ({ character, game }: { character: Character; game: Game }) => {
    const charImage = "hero1";

    return (
      <div
        className={`${
          character.isBeingAttacked ? "enemy-damage" : ""
        } character`}
      >
        <img src={`${charImage}.png`} />
        <div>HP: {character.hp}</div>
        <div>
          Attack
          <button onClick={game.characterAttack.bind(game)}>Kick</button>
        </div>
      </div>
    );
  }
);
export default CharacterView;
