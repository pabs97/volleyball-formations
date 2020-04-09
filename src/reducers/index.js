import { combineReducers } from 'redux';

import controls from './controls';
import players from './players';

export default combineReducers({
  controlsReducer: controls,
  playersReducer: players,
});
