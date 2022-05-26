import Fighter, { SimpleFighter } from '../Fighter';
// import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private character: Fighter, 
    private monsters: (SimpleFighter | Fighter)[],
  ) {
    super(character);
  }

  fight(): number {
    const { character, monsters } = this;

    for (let i = 0; ; i += 1) {
      const allMonstersIsDead = monsters
        .every((monster) => monster.lifePoints === -1);

      if (character.lifePoints === -1 || allMonstersIsDead) break;
      this.fightFlow(false);
      this.fightFlow(true);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }

  fightFlow(isMonster: boolean) : void {
    const { character, monsters } = this;
  
    if (isMonster === false) {
      monsters.forEach((monster) => {
        monster.receiveDamage(character.strength / monsters.length);
      });
      return;
    }
    
    monsters.forEach((monster) => {
      monster.attack(character);
    });
  }
}