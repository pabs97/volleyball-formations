import React from 'react';
import { render } from '@testing-library/react';
import Player from '../player';

// TODO: tear down dom after each test

describe('Player Tests', () => {

  test('player class names', () => {
    const player = { left: 0, top: 0, position: 'P' };
    const { container } = render(<Player {...player} />);
    const domPlayer = container.querySelector('.player');
    const domLibero = container.querySelector('.player--libero');

    expect(domPlayer).toBeDefined();
    expect(domLibero).toBeNull();
  });

  test('libero class name', () => {
    const libero = { left: 0, top: 0, position: 'L' };
    const { container } = render(<Player {...libero} />);
    const domPlayer = container.querySelector('.player');
    const domLibero = container.querySelector('.player--libero');

    expect(domPlayer).toBeDefined();
    expect(domLibero).toBeDefined();
  });

});