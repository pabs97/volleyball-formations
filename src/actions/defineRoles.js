import { DEFINE_ROLES } from './types';

export const defineRolesAction = (players, rotation) => (dispatch) => {
  players = [...players];
  // which rotation are we in?

  // assign the following roles
  // H, M, BR, FR, L, BS, FS, P

  // Setter - player 0
  // rotation 1,2,3   4,5,6
  players[0].role = (rotation + 5) % 6 < 3 ?
    'BS' : 'FS';

  // Middle 1 - player 1
  // rotation 6,1,2    3,4,5
  players[1].role = (rotation + 0) % 6 < 3 ?
    'L' : 'M';

  // Outside 2 - player 2
  // rotation 1,5,6   2,3,4
  players[2].role = (rotation + 1) % 6 < 3 ?
    'P' : 'H';

  // Opposite - player 3
  // rotation 4,5,6   1,2,3
  players[3].role = (rotation + 2) % 6 < 3 ?
    'BR' : 'FR';

  // Middle 2 - player 4
  // rotation 3,4,5   6,1,2
  players[4].role = (rotation + 3) % 6 < 3 ?
    'L' : 'M';

  // Outside 1 - player 5
  // rotation 2,3,4   5,6,1
  players[4].role = (rotation + 4) % 6 < 3 ?
    'H' : 'P';


  dispatch({
    type: DEFINE_ROLES,
    players: players,
  });

};
