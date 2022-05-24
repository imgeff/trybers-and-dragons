export default abstract class Race {
  public readonly name: string;
  public readonly dexterity: number;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
    this._maxLifePoints = 100;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
