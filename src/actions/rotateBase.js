import { SET_ROTATION_BASE } from './types';
import { base } from '../formations/base'

const coordinates = [
  // Back Row
  { left: 80, top: 60 },
  { left: 50, top: 60 },
  { left: 20, top: 60 },

  // Front Row
  { left: 20, top: 25 },
  { left: 50, top: 25 },
  { left: 80, top: 25 },
];

export const rotateBase = (rotation) => (dispatch) => {

  const players = base.map((player, i) => {
    const coord = (i + rotation - 1) % 6;
    return Object.assign(player, coordinates[coord]);
  });

  dispatch({
    type: SET_ROTATION_BASE,
    players,
    rotation,
  });

  // rotation 1: i + 0
  // rotation 2: i + 1 => 0 // 5 + 1 % 6 = 0
  // rotation 3: i + 2 //
  // rotation 4: i + 3
  // rotation 5: i + 4
  // rotation 6: i + 5

}