import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    let totalLifePoints = this._lifePoints;
    if (damage > 0) {
      totalLifePoints -= damage;
      this._lifePoints = totalLifePoints;
      if (this._lifePoints <= 0) this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}