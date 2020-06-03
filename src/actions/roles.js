import { DEFINE_ROTATION_ROLES } from './types';

const _setRotationRoles = (players, rotation, serveReceive) => {
  players = [...players];

  // Set Player Roles

  // Setter - player 0
  // rotation 1,2,3   4,5,6
  players[0].role = (rotation + 5) % 6 < 3 ?
    'BR' : 'FR';

  // Middle 1 - player 1
  // rotation 6,1,2    3,4,5
  players[1].role = (rotation + 0) % 6 < 3 ?
    'BL' : 'FM';

  // Outside 2 - player 2
  // rotation 1,5,6   2,3,4
  players[2].role = (rotation + 1) % 6 < 3 ?
    'BM' : 'FL';

  // Opposite - player 3
  // rotation 4,5,6   1,2,3
  players[3].role = (rotation + 2) % 6 < 3 ?
    'BR' : 'FR';

  // Middle 2 - player 4
  // rotation 3,4,5   6,1,2
  players[4].role = (rotation + 3) % 6 < 3 ?
    'BL' : 'FM';

  // Outside 1 - player 5
  // rotation 2,3,4   5,6,1
  players[5].role = (rotation + 4) % 6 < 3 ?
    'BM' : 'FL';

  // Special case if serve receive and Rotation 1
  // R stays as FL and H1 stays as FR
  if (serveReceive === 2 && rotation === 1) {
    players[3].role = 'FL';
    players[5].role = 'FR';
  }

  return players;
}

const setRotationRoles = (players, rotation, serveReceive) => (dispatch) => {
  dispatch({
    type: DEFINE_ROTATION_ROLES,
    players: _setRotationRoles(players, rotation, serveReceive),
    serveReceive,
  });
};

export default setRotationRoles;
export { _setRotationRoles };