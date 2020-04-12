import { SET_FORMATION } from './types';
import defense from '../formations/defense';

const setDefenseFormation = (players, defenseType) => (dispatch) => {

  players = players.map((player) => {
    return Object.assign(player, defense[defenseType][player.role]);
  });

  dispatch({
    type: SET_FORMATION,
    players,
  });
}

export default setDefenseFormation;