import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  public readonly name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    const defaultElf = new Elf('Lúthien', 22);
    const defaultMage = new Mage('Alex');
    this.name = name;
    this._race = defaultElf;
    this._archetype = defaultMage;
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this.race.dexterity;
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const { amount } = this._energy;
    const readonlyEnergy = { amount, type_: this._energy.type_ };
    return readonlyEnergy;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    if (this.lifePoints === -1) return;
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    if (this._lifePoints <= 5) {
      this._lifePoints = getRandomInt(1, 50);
      return;
    }
    if (enemy.strength > 30) {
      this._lifePoints = getRandomInt(1, 100);
    }
  }

  levelUp(): void {
    const increasedMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this.upMaxLifePoints(increasedMaxLifePoints);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  private upMaxLifePoints(increasedMaxLifePoints: number): void {
    if (increasedMaxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = increasedMaxLifePoints;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    let totalLifePoints = this._lifePoints;
    if (damage > 0) {
      totalLifePoints -= damage;
      this._lifePoints = totalLifePoints;
      if (this._lifePoints <= 0) this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}
