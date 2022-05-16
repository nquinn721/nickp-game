import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Enemy } from "../game/Enemy";
import { Game } from "../game/Game";

const EnemyView = observer(({ enemy }: { enemy: Enemy }) => {
  console.log("ENEMYVIWEW ", enemy.hp);

  return (
    <div className={`${enemy.isBeingAttacked ? "enemy-damage" : ""} enemy`}>
      <img src={`${enemy.type}.png`} />
      <div>HP: {enemy.hp}</div>
    </div>
  );
});

export default EnemyView;
