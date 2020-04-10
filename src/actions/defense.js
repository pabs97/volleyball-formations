import { SET_DEFENSE } from './types';
import defense from '../rotations/defense';

export const setDefense = (players, defenseType) => (dispatch) => {

  players = players.map((player) => {
    return Object.assign(player, defense[defenseType][player.role]);
  });

  dispatch({
    type: SET_DEFENSE,
    players,
  });
}