import React, { Component } from 'react';

class Controls extends Component {
  state = {}
  render() {

    const { handleServeReceiveTransition, handleDefenseTransition } = this.props;

    return (
      <section>
        <h3>Rotation 1</h3>
        <button onClick={() => handleServeReceiveTransition(1, 1)}>Serve Receive</button>
        <button onClick={() => handleServeReceiveTransition(1, 2)}>Transition</button>
        <button onClick={() => handleServeReceiveTransition(1, 2)}>Defense</button>

        <h3>Rotation 2</h3>
        <button onClick={() => handleServeReceiveTransition(2, 1)}>Serve Receive</button>
        <button onClick={() => handleServeReceiveTransition(2, 2)}>Transition</button>

        <h3>Defense Left</h3>
        <button onClick={() => handleDefenseTransition('left')}>Serve Receive</button>
      </section>

    );
  }
}

export default Controls;