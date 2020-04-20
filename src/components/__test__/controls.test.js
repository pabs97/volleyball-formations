import React from 'react';
// import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from '@testing-library/react';
import Controls from '../controls';
import { act } from "react-dom/test-utils";

import { Provider } from 'react-redux';
import store from '../../store';


import {
  setRotationBase,
  setControlsLevel,
  setDefenseFormation,
  setServeFormation,
  setReceiveFormation,
  setRotationRoles,
  setAttackFormation,
} from '../../actions';

import { isTSAnyKeyword } from '@babel/types';

// TODO: before each mount at div and then unmount after
// https://testing-library.com/docs/dom-testing-library/api-queries
// https://jestjs.io/docs/en/expect

// https://redux.js.org/recipes/writing-tests

// beforeEach(() => {
//   document.defaultView.Cypress = null
// })

// Click a button and then validate the header reads a certain text

// Click a button and make sure another certain button appears
describe('Controls Tests', () => {
  const buttonSelector = { selector: 'button' };



  test('renders 7 rotation buttons', () => {

    const { queryAllByText } = render(
      <Provider store={store}>
        <Controls rotation={1} serveReceive={1} />
      </Provider>
    );

    const buttons = queryAllByText(/rotation \d/i, buttonSelector);
    expect(buttons).toHaveLength(7);
  });

  test('buttons shown at state 2 - Serve', () => {
    const { queryByText } = render(
      <Provider store={store}>
        {/* <Controls rotation={1} serveReceive={2} /> */}
        <Controls />
      </Provider>
    );

    // create a normal store
    // store.dispatch(actions.action(()))
    store.dispatch(setControlsLevel(2));


    const button2 = queryByText(/serve/i, buttonSelector);
    const button3 = queryByText(/receive/i, buttonSelector);
    expect(button2).toBeDefined();
    expect(button3).toBeNull();

    /*
    TODO:
    test the action
    test the reducer

    test the action output itself
    test the state after the action
    test the ui after the action
    */
  });

  test('buttons shown at state 3 - Receive', () => {
    const { queryByText } = render(
      <Provider store={store}>
        <Controls />
      </Provider>
    );

    store.dispatch(setControlsLevel(3));
    const button2 = queryByText(/serve/i, buttonSelector);
    const button3 = queryByText(/receive/i, buttonSelector);
    expect(button2).toBeNull();
    expect(button3).toBeDefined();
  });




});





// test('renders controls heading', () => {
//   const div = document.createElement('div');
//   render(
//     <Provider store={store}>
//       <Controls rotation={1} serveReceive={1} />
//     </Provider>
//     , div);

//   unmountComponentAtNode(div);
// });

// describe.each([
//   [1, 1, 2],
//   [1, 2, 3],
//   [2, 1, 3],
// ])('.add(%i, %i)', (a, b, expected) => {
//   test(`returns ${expected}`, () => {
//     expect(a + b).toBe(expected);
//   });

//   test(`returned value not be greater than ${expected}`, () => {
//     expect(a + b).not.toBeGreaterThan(expected);
//   });

//   test(`returned value not be less than ${expected}`, () => {
//     expect(a + b).not.toBeLessThan(expected);
//   });
// });


// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   // container *must* be attached to document so events work correctly.
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });