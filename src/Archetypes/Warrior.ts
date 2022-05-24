import { EnergyType } from '../Energy';
import Archetype from './Archetype';

let numberOfInstances = 0;

export default class Mage extends Archetype {
  static createdArchetypeInstances(): number {
    numberOfInstances += 1;
    return numberOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}