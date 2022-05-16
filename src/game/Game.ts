import { makeAutoObservable } from "mobx";
import { Character } from "./Character";
import { Enemy } from "./Enemy";

export class Game {
  enemyTypes = ["goblin", "orc", "skeleton"];
  characters: Character[] = [];
  enemies: Enemy[] = [];
  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init() {
    this.characters.push(new Character());
    this.enemies.push(new Enemy(1, "orc"));
    this.enemies.push(new Enemy(2, "goblin"));
    this.enemies.push(new Enemy(3, "skeleton"));
  }

  characterAttack() {
    const en = this.enemies[Math.floor(Math.random() * this.enemies.length)];
    en.getAttacked(10);
    setTimeout(() => this.characters[0].getAttacked(10), 2000);
  }
}
