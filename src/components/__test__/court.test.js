import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import store from '../../store';

import Court from '../court';
// https://reactjs.org/docs/test-renderer.html#testinstancefind


// import { mount } from 'react-dom';

// import {
//   setRotationBase,
//   setControlsLevel,
//   setDefenseFormation,
//   setServeFormation,
//   setReceiveFormation,
//   setRotationRoles,
//   setAttackFormation,
// } from '../../actions';

describe('Court Tests', () => {
  test('Six DOM players', () => {
    const testRenderer = create(
      <Provider store={store}>
        <Court />
      </Provider>
    );
    const testInstance = testRenderer.root;
    const players = testInstance.findAllByProps({ className: 'player' });
    expect(players).toHaveLength(6);
  });


  xtest('Six DOM players 2', () => {
    const testRenderer = create(
      <Provider store={store}>
        <Court />
      </Provider>
    );
    const testInstance = testRenderer.root;

    // const court = testInstance.findByProps({ className: 'courtContainer' });

    const players = testInstance.findAllByProps({ className: 'player' });
    expect(players).toHaveLength(6);
  });
});

