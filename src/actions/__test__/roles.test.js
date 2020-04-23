import { getFormationForRotation } from '../../actions/rotationBase';
import { _setRotationRoles } from '../roles';

describe('Test Defining Roles', () => {
  test('normal rotations have R on the right and H on the left', () => {
    let players = getFormationForRotation(1);
    players = _setRotationRoles(players, 1, 1);

    expect(players[3].role).toEqual('FR');
    expect(players[5].role).toEqual('FL');
  });

  test('rotation 1 on serve receive has R on the left and H on the right', () => {
    let players = getFormationForRotation(1);
    players = _setRotationRoles(players, 1, 2);

    expect(players[3].role).toEqual('FL');
    expect(players[5].role).toEqual('FR');
  });
});