import { SET_ROTATION_BASE } from './types';
import { base, coordinates } from '../formations/base'

export const rotateBase = (rotation) => (dispatch) => {

  dispatch({
    type: SET_ROTATION_BASE,
    players: getFormationForRotation(rotation),
    rotation,
  });
}

export function getFormationForRotation(rotation) {
  return base.map((player, i) => {
    const coord = (i + rotation - 1) % 6;
    return Object.assign(player, coordinates[coord]);
  });
}
