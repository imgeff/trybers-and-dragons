import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

function fightFlow(playerAttack: Fighter, playerDefense: Fighter): void {
  const attackLimit = getRandomInt(1, 3);

  if (attackLimit === 3) {
    playerDefense.special(playerAttack);
  }

  for (let index = 0; index < attackLimit; index += 1) {
    playerAttack.attack(playerDefense);
  }
}

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    const { player1, player2 } = this;
    for (let i = 0; ; i += 1) {
      if (player2.lifePoints === -1 || player1.lifePoints === -1) break;
      fightFlow(player1, player2);
      fightFlow(player2, player1);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
