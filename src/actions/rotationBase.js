import { SET_ROTATION_BASE } from './types';
import { base, coordinates } from '../formations/base'

export const setRotationBase = (rotation, serveReceive) => (dispatch) => {

  dispatch({
    type: SET_ROTATION_BASE,
    players: getFormationForRotation(rotation),
    rotation,
    serveReceive,
  });
}

export function getFormationForRotation(rotation) {

  return base
    .map((player, i) => {
      const coord = (i + rotation - 1) % 6;

      // Deep copy base to get original positions on rotation
      return Object.assign({}, player, coordinates[coord]);
    });
}
