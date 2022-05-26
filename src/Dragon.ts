import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    super._lifePoints = 999;
  }
}