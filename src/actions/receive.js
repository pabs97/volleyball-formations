import { SET_FORMATION } from './types';
import receive from '../formations/receive';

const setReceiveFormation = (players, rotation) => (dispatch) => {

  players = players.map((player, i) => {
    return Object.assign(player, receive[rotation - 1][i]);
  });

  dispatch({
    type: SET_FORMATION,
    players,
  });
}

export default setReceiveFormation;