import { DEFINE_ROTATION_ROLES } from './types';

export const defineRolesServingAction = (players, rotation) => (dispatch) => {
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




  // Set Player Coordinates
  switch (rotation) {
    case 1:
      players[0].left = 80;
      players[0].top = 107;
      players[1].left = 40;
      players[1].top = 55;
      players[2].left = 30;
      players[2].top = 80;

      players[3].left = 45;
      players[3].top = 10;
      players[4].left = 50;
      players[4].top = 5;
      players[5].left = 55;
      players[5].top = 15;
      break;

    case 2:
      players[0].left = 90;
      players[0].top = 60;
      players[1].left = 10;
      players[1].top = 60;
      players[2].left = 30;
      players[2].top = 5;

      players[3].left = 45;
      players[3].top = 10;
      players[4].left = 50;
      players[4].top = 5;
      players[5].left = 50;
      players[5].top = 107;
      break;
  }



  dispatch({
    type: DEFINE_ROTATION_ROLES,
    players: players,
    serving: true,
  });

};
