import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { rotateBase } from '../actions/rotateBase';
import { setLevel } from '../actions/setLevel';
import { setDefense } from '../actions/defense';
import { setServeFormation } from '../actions/serve';
import { setReceiveFormation } from '../actions/receive';
import { defineRoles } from '../actions/defineRoles';
import { setAttackFormation } from '../actions/attack';

class Controls extends Component {
  render() {

    const { rotation } = this.props;
    // TODO: add toggles and grey them out instead

    return (
      <section className='controls'>
        <h3>Rotation {rotation}</h3>
        <button onClick={this.handleBase}>1 - Rotation {rotation} Base</button>

        {this.renderBaseButtons()}
        {this.renderDefenseButtons()}
        {this.renderAttackButtons()}
      </section >
    );
  }

  renderBaseButtons() {
    if (this.props.level === 1) {
      return (
        <Fragment>
          {this.renderRotateButtons()}
          <button onClick={() => this.handleServeReceive(false)}>2 - Serve</button>
          <button onClick={() => this.handleServeReceive(true)}>3 - Receive</button>
        </Fragment>
      );
    }
  }

  renderDefenseButtons() {
    const { level } = this.props;

    if (level === 2 || (level >= 4 && level <= 9)) {
      return (
        <Fragment>
          <button onClick={() => this.handleDefense(4)}>4 - Base Defense</button>
          <button className='--indent' onClick={() => this.handleDefense(5)}>5 - Left</button>
          <button className='--indent' onClick={() => this.handleDefense(6)}>6 - Middle</button>
          <button className='--indent' onClick={() => this.handleDefense(7)}>7 - Right</button>
        </Fragment>
      );
    }
  }

  renderAttackButtons() {
    const { level } = this.props;

    if (level === 3 || (level >= 5 && level <= 9)) {
      return (
        <Fragment>
          <button onClick={() => this.handleAttack(8)}>8 - Prepare Attack</button>
          <button onClick={() => this.handleAttack(9)}>9 - Attack</button>
        </Fragment>
      );
    }
  }

  renderRotateButtons() {
    return Array(6).fill().map((v, i) => {
      return <button key={i} className='--indent' onClick={() => this.props.rotateBase(i + 1)}>Rotation {i + 1}</button>
    })
  }

  handleBase = () => {
    const { rotateBase, rotation, setLevel } = this.props;
    rotateBase(rotation);
    setLevel(1);
  }

  handleServeReceive = (receive) => {
    const { defineRoles, players, setLevel, rotation, setServeFormation, setReceiveFormation } = this.props;
    const level = receive ? 3 : 2;
    const setFormation = receive ? setReceiveFormation : setServeFormation;

    setLevel(level);
    defineRoles(players, rotation, receive);
    setFormation(players, rotation);
  }






  handleDefense = (level) => {
    const { setDefense, setLevel, players } = this.props;
    const defenseTypes = ['base', 'left', 'middle', 'right'];

    setLevel(level);
    setDefense(players, defenseTypes[level - 4]);
  }

  handleAttack = (level) => {
    const { setLevel, players, rotation, setAttackFormation } = this.props;

    setLevel(level);
    setAttackFormation(players, rotation, level === 8);
  }


}

const mapStateToProps = (state) => ({ ...state.controlsReducer, ...state.playersReducer });

export default connect(
  mapStateToProps,
  {
    rotateBase,
    setLevel,
    setDefense,
    defineRoles,
    setServeFormation,
    setReceiveFormation,
    setAttackFormation,
  }
)(Controls);