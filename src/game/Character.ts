import { makeObservable } from "mobx";
import { BaseCharacter } from "./BaseCharacter";

export class Character extends BaseCharacter {
  id: number;
  hp: number = 100;
  maxHP: number = 100;
  constructor() {
    super();
    makeObservable(this, {});
    this.id = Math.random();
  }

  getAttacked(damage: number) {
    this.hp -= damage;
    console.log("get attacked from character");

    this.getAttackedBase();
  }
}
