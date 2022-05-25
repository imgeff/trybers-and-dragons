export interface AttackFighter<T> { attack(enemy: T): void; }

export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): void;
}