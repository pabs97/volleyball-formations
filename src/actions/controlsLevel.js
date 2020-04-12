import { SET_CONTROLS_LEVEL } from './types';

const setControlsLevel = (level) => (dispatch) => {
  dispatch({
    type: SET_CONTROLS_LEVEL,
    level,
  });
}

export default setControlsLevel;