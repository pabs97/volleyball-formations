import { SET_FORMATION } from './types';
import serve from '../formations/serve';

const setServeFormation = (players, rotation) => (dispatch) => {

  players = players.map((player, i) => {
    return Object.assign(player, serve[rotation - 1][i]);
  });

  dispatch({
    type: SET_FORMATION,
    players,
  });
}

export default setServeFormation;