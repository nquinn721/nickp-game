import { autorun, makeAutoObservable } from "mobx";
import { Character, CharacterAbility } from "./Character";
import { Enemy } from "./Enemy";

export class Game {
  totalEnemies: number = 3;
  enemyTypes = ["goblin", "orc", "skeleton"];
  characters: Character[] = [new Character("mage"), new Character("ryuzaki")];
  character: Character = new Character("mage");
  enemies: Enemy[] = [];
  gameOver: boolean = false;
  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init() {
    this.enemies.push(new Enemy(1, "orc"));
    this.enemies.push(new Enemy(2, "goblin"));
    this.enemies.push(new Enemy(3, "skeleton"));
  }

  characterAttack(character: Character, characterAbility: CharacterAbility) {
    if (this.gameOver) return;
    const totalDamage = character.calculateAttackDamage(characterAbility);
    character.attack(characterAbility);
    let en = this.getEnemy();
    if (en) {
      en.getAttacked(totalDamage);

      autorun(
        () => {
          character.getAttacked(10);
          if (character.isDead) this.gameOver = true;
        },
        { delay: 2000 }
      );
    }
  }

  getEnemy() {
    const deadEnemies = this.enemies.filter((v) => v.isDead).length;
    if (deadEnemies + 1 === this.totalEnemies) {
      this.gameOver = true;
      return;
    }

    let en = this.enemies[Math.floor(Math.random() * this.enemies.length)];
    if (en.isDead)
      en = this.enemies[Math.floor(Math.random() * this.enemies.length)];
    return en;
  }

  setCharacter(character: Character) {
    this.character = character;
    console.log(this.character);
  }
}
