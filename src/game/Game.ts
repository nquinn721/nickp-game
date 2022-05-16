import { autorun, makeAutoObservable } from "mobx";
import { Character, CharacterAbility } from "./Character";
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

  characterAttack(character: Character, characterAbility: CharacterAbility) {
    character.attack(characterAbility);
    const en = this.enemies[Math.floor(Math.random() * this.enemies.length)];
    en.getAttacked(characterAbility.damage);

    autorun(() => character.getAttacked(10), { delay: 2000 });
  }
}
