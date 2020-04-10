import { SET_FORMATION } from './types';
import { prepAttack, runAttack } from '../formations/attack';

export const setAttackFormation = (players, rotation, prep) => (dispatch) => {

  let attack = prep ? prepAttack : runAttack;
  attack = { ...attack };

  if (rotation <= 3) {
    attack.BR = attack.S;
  } else {
    attack.FR = attack.S;
  }

  players = players.map((player) => {
    return Object.assign(player, attack[player.role])
  });

  console.log(attack, players);

  dispatch({
    type: SET_FORMATION,
    players,
  });
}