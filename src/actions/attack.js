import { SET_FORMATION } from './types';
import { prepAttack, runAttack } from '../formations/attack';

const setAttackFormation = (players, rotation, prep) => (dispatch) => {

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

  dispatch({
    type: SET_FORMATION,
    players,
  });
}

export default setAttackFormation;