import { SET_FORMATION } from './types';
import defense from '../formations/defense';

export const setDefense = (players, defenseType) => (dispatch) => {

  players = players.map((player) => {
    return Object.assign(player, defense[defenseType][player.role]);
  });

  dispatch({
    type: SET_FORMATION,
    players,
  });
}