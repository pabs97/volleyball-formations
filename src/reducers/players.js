import { SET_ROTATION_BASE, DEFINE_ROTATION_ROLES, SET_FORMATION } from '../actions/types';
import { getFormationForRotation } from '../actions/rotateBase';

const initialState = {
  players: getFormationForRotation(1),
  rotation: 1,
  setterBackRow: true,
  serving: false,
};

export default function roles(state = initialState, action) {

  const { type, players, rotation, serving } = action;
  const setterBackRow = rotation <= 3;

  switch (type) {
    case DEFINE_ROTATION_ROLES:
      return {
        ...state,
        players,
        setterBackRow,
        serving,
      };
    case SET_ROTATION_BASE:
      return {
        ...state,
        players,
        rotation,
        setterBackRow
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