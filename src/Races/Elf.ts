import Race from './Race';

let numberOfInstances = 0;

export default class Elf extends Race {
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    numberOfInstances += 1; 
    return numberOfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}