import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';

import { base } from './formations/base';

import {
  setRotationBase,
  setControlsLevel,
  setDefenseFormation,
  setServeFormation,
  setReceiveFormation,
  setRotationRoles,
  setAttackFormation,
  getFormationForRotation,
} from './actions';

describe('Controls and Court integration', () => {

  test('Seven initial Rotation buttons', () => {
    const { getByText, queryAllByText } = render(<App />);
    const rotationButtons = queryAllByText(/Rotation \d/i, { selector: 'button' });
    expect(rotationButtons).toHaveLength(7);
  });

  test('Six DOM players', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const domPlayers = container.querySelectorAll('.player');
    expect(domPlayers).toHaveLength(6);
  });

  // Rotation 1 and receiving
  // Right side is hitting outside

  test('M2 position in Rotation 3', () => {
    const players = [...base];
    let domPlayers;

    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // store.dispatch(setRotationBase(3));

    // 2 - Serve
    store.dispatch(setServeFormation(players, 3));
    domPlayers = container.querySelectorAll('.player');
    expect(domPlayers[4].innerHTML).toEqual('M2');

    // 3 - Receive
    store.dispatch(setReceiveFormation(players, 3));
    domPlayers = container.querySelectorAll('.player');
    expect(domPlayers[4].innerHTML).toEqual('L');

  });

});


