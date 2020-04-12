import { SET_ROTATION_BASE, DEFINE_ROTATION_ROLES, SET_FORMATION } from '../actions/types';
import { getFormationForRotation } from '../actions/rotationBase';

const initialState = {
  players: getFormationForRotation(1),
  rotation: 1,
  serveReceive: 0,
};

export default function (state = initialState, action) {

  const { type, players, rotation, serveReceive } = action;

  switch (type) {
    case DEFINE_ROTATION_ROLES:
      return {
        ...state,
        players,
        serveReceive,
      };
    case SET_ROTATION_BASE:
      return {
        ...state,
        players,
        rotation,
        serveReceive,
      };
    case SET_FORMATION:
      return {
        ...state,
        players,
      };
    default:
      return state;
  }
}