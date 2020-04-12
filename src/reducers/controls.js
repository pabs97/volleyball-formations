import { SET_CONTROLS_LEVEL } from '../actions/types';

/*
  levels:
  1 base - the only place you can do rotations in
    leads to 2 or 3
    resets roles, need to be defined at 2 or 3

  2 serve
  3 receive

  4 base defense

  5 left defense
  6 middle defense
  7 right defense

  8 transition to hit

  9 hit
*/

const initialState = { level: 1 }

export default function (state = initialState, action) {
  const { type, level } = action;

  switch (type) {
    case SET_CONTROLS_LEVEL:
      return { ...state, level };
    default:
      return state;
  }
}