import React, { Component } from 'react';

class Controls extends Component {
  state = {}
  render() {

    const { handleAnimation } = this.props;

    return (
      <section>
        <h3>Rotation 1</h3>
        <button onClick={() => handleAnimation(1, 1)}>Serve Receive</button>
        <button onClick={() => handleAnimation(1, 2)}>Transition</button>

        <h3>Rotation 2</h3>
        <button onClick={() => handleAnimation(2, 1)}>Serve Receive</button>
        <button onClick={() => handleAnimation(2, 2)}>Transition</button>
      </section>
    );
  }
}

export default Controls;