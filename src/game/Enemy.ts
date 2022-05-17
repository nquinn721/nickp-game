import { action, makeObservable, observable, override } from "mobx";
import { BaseCharacter } from "./BaseCharacter";

export class Enemy extends BaseCharacter {
  id: number = 0;
  hp: number = 100;
  isDead: boolean = false;
  constructor(public type: string) {
    super();
    makeObservable(this, {});
    this.id = Math.random();
  }

  getAttacked(damage: number) {
    this.hp -= damage;
    this.getAttackedBase();
    if (this.hp <= 0) this.isDead = true;
  }
}
