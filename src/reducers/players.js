import { SET_ROTATION_BASE, DEFINE_ROTATION_ROLES } from '../actions/types';

const initialState = {
  players: [],
};

export default function roles(state = initialState, action) {

  const { type, players, rotation } = action;

  switch (type) {
    case DEFINE_ROTATION_ROLES:
      return { ...state, players };
    case SET_ROTATION_BASE:
      return { ...state, players, rotation };
    default:
      return state;
  }
}