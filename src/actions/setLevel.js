import { SET_CONTROLS_LEVEL } from './types';

export const setLevel = (level) => (dispatch) => {
  dispatch({
    type: SET_CONTROLS_LEVEL,
    level,
  });
}