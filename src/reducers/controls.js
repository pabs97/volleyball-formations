import { SET_CONTROLS_STATE } from '../actions/types';

/*
  levels:
  0 base - the only place you can do rotations in
    leads to 1 or 2

  1 serve
  2 receive

  3 base defense

  4 left defense
  5 middle defense
  6 right defense

  7 transition to hit

  8 hit
*/

const initialState = { level: 0 }

export default function controls(state = initialState, action) {
  const { type, level } = action;

  switch (type) {
    case SET_CONTROLS_STATE:
      return { ...state, level };
    default:
      return state;
  }
}