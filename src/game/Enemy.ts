import { action, makeObservable, observable, override } from "mobx";
import { BaseCharacter } from "./BaseCharacter";

export class Enemy extends BaseCharacter {
  hp: number = 100;
  constructor(public id: number, public type: string) {
    super();
    makeObservable(this, {});
  }

  getAttacked(damage: number) {
    this.hp -= damage;
    this.getAttackedBase();
  }
}