import { observer } from "mobx-react-lite";
import { Character } from "../game/Character";
import { Game } from "../game/Game";
import "./CharacterViewStyles.scss";

const CharacterView = observer(
  ({ character, game }: { character: Character; game: Game }) => {
    return (
      <div
        className={`${
          character.isBeingAttacked ? "enemy-damage" : ""
        } character`}
      >
        <img
          className="character-image"
          src={`../characters/${character.type}.png`}
        />
        <div>{character.type}</div>
        <div>HP: {character.hp}</div>
        <div>
          Attack
          <br />
          {character.abilities.map((v) => (
            <div key={v.name}>
              <button
                className="character-ability"
                onClick={() => game.characterAttack(character, v)}
                disabled={!v.ready}
              >
                {v.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
export default CharacterView;
