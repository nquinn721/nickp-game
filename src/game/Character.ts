import { autorun, makeObservable, observable } from "mobx";
import { BaseCharacter } from "./BaseCharacter";

export interface CharacterAbility {
  name: string;
  damage: number;
  cd: number;
  ready: boolean;
}

export class Character extends BaseCharacter {
  id: number;
  lvl: number = 1;
  exp: number = 0;
  hp: number = 100;
  maxHP: number = 100;
  damage: number = 10;
  defense: number = 10;
  armor: number = 10;
  abilities: CharacterAbility[] = [
    {
      name: "Strike",
      damage: 10,
      cd: 2,
      ready: true,
    },
    {
      name: "Tornado",
      damage: 20,
      cd: 5,
      ready: true,
    },
    {
      name: "Super punch",
      damage: 25,
      cd: 10,
      ready: true,
    },
  ];
  constructor() {
    super();
    makeObservable(this, {
      abilities: observable,
    });
    this.id = Math.random();
  }
  attack(characterAbility: CharacterAbility) {
    const ch = this.abilities.find((v) => v.name === characterAbility.name);

    if (ch) {
      ch.ready = false;
      autorun(
        () => {
          ch.ready = true;
          this.resetAbilities();
        },
        { delay: ch.cd * 1000 }
      );
      this.resetAbilities(ch);
    }
  }
  resetAbilities(ability?: CharacterAbility) {
    this.abilities = this.abilities.map((v) =>
      v.name === ability?.name ? ability : v
    );
  }

  getAttacked(damage: number) {
    this.hp -= damage;
    console.log("get attacked from character");

    this.getAttackedBase();
  }
}
