import React, { Component } from 'react';
import { rotateBase } from '../actions/rotateBase';
import { connect } from 'react-redux';

class Controls extends Component {
  state = {}
  render() {

    const { rotateBase } = this.props;

    return (
      <section className='controls'>
        <button onClick={() => rotateBase(1)}>Rotation 1 Base</button>
        <button onClick={() => rotateBase(2)}>Rotation 2 Base</button>
        <button onClick={() => rotateBase(3)}>Rotation 3 Base</button>
        <button onClick={() => rotateBase(4)}>Rotation 4 Base</button>
        <button onClick={() => rotateBase(5)}>Rotation 5 Base</button>
        <button onClick={() => rotateBase(6)}>Rotation 6 Base</button>



        {/* <h3>Rotation 1</h3>
        <button onClick={() => handleServeReceiveTransition(1, 1)}>Serve Receive</button>
        <button onClick={() => handleServeReceiveTransition(1, 2)}>Transition</button>
        <button onClick={() => handleServeReceiveTransition(1, 2)}>Defense</button>

        <h3>Rotation 2</h3>
        <button onClick={() => handleServeReceiveTransition(2, 1)}>Serve Receive</button>
        <button onClick={() => handleServeReceiveTransition(2, 2)}>Transition</button>

        <h3>Defense Left</h3>
        <button onClick={() => handleDefenseTransition('left')}>Serve Receive</button> */}
      </section >

    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps, { rotateBase })(Controls);