import { EnergyType } from '../Energy';

export default abstract class Archetype {
  public readonly name: string;
  public readonly special: number;
  public readonly cost: number;
  protected _energyType: EnergyType;

  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}