import { action, makeObservable, observable } from "mobx";

export class BaseCharacter {
  isBeingAttacked: boolean = false;
  showAttackTime: number = 1000;
  constructor() {
    makeObservable(this, {
      getAttackedBase: action,
      isBeingAttacked: observable
    });
  }
  getAttackedBase() {
    this.isBeingAttacked = true;
    setTimeout(() => (this.isBeingAttacked = false), this.showAttackTime);
  }
}
