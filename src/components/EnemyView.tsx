import { observer } from "mobx-react-lite";
import { Enemy } from "../game/Enemy";
import "./EnemyViewStyles.scss";

const EnemyView = observer(({ enemy }: { enemy: Enemy }) => {
  console.log("ENEMYVIWEW ", enemy.hp);

  return (
    <div
      className={`
      ${enemy.isBeingAttacked ? "enemy-damage" : ""} 
      ${enemy.isDead ? "enemy-dead" : ""}
      enemy`}
    >
      {!enemy.isDead && <img src={`enemies/${enemy.type}.png`} />}
      {enemy.isDead ? "Dead" : <div>HP: {enemy.hp}</div>}
    </div>
  );
});

export default EnemyView;
