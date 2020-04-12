import { SET_ROTATION_BASE, DEFINE_ROTATION_ROLES, SET_FORMATION } from '../actions/types';
import { getFormationForRotation } from '../actions/rotationBase';

const initialState = {
  players: getFormationForRotation(1),
  rotation: 1,
  serving: false,
};

export default function roles(state = initialState, action) {

  const { type, players, rotation, serving } = action;

  switch (type) {
    case DEFINE_ROTATION_ROLES:
      return {
        ...state,
        players,
        serving,
      };
    case SET_ROTATION_BASE:
      return {
        ...state,
        players,
        rotation,
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