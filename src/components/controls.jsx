import React, { Component, Fragment } from 'react';
import { rotateBase } from '../actions/rotateBase';
import { setLevel } from '../actions/setLevel';
import { setDefense } from '../actions/defense';
import { setServeFormation } from '../actions/serve';
import { setReceiveFormation } from '../actions/receive';
import { defineRoles } from '../actions/defineRoles';
import { connect } from 'react-redux';
import { setAttackFormation } from '../actions/attack';

class Controls extends Component {
  render() {

    const { rotation } = this.props;
    // TODO input to set animation speed
    // TODO: add toggles and grey them out instead

    return (
      <section className='controls'>
        <h3>Rotation {rotation}</h3>
        <button onClick={this.handleBase}>1 - Rotation {rotation} Base</button>

        {this.renderBaseButtons()}
        {this.renderDefenseButtons()}
        {this.renderPrepareAttackButton()}
        {this.renderAttackButton()}
      </section >
    );
  }

  renderBaseButtons() {
    if (this.props.level !== 1) return;

    return (
      <Fragment>
        {this.rotateButtons()}
        <button onClick={this.handleServe}>2 - Serve</button>
        <button onClick={this.handleReceive}>3 - Receive</button>
      </Fragment>
    );
  }

  renderDefenseButtons() {
    const { level } = this.props;

    console.log('renderDefenseButtons', level);
    if (level === 2 || (level >= 4 && level <= 9)) {
      return (
        <Fragment>
          <button onClick={() => this.handleDefense(4)}>4 - Base Defense</button>
          <button onClick={() => this.handleDefense(5)}>5 - Left Defense</button>
          <button onClick={() => this.handleDefense(6)}>6 - Middle Defense</button>
          <button onClick={() => this.handleDefense(7)}>7 - Right Defense</button>
        </Fragment>
      );
    }
  }

  renderPrepareAttackButton() {
    const { level } = this.props;

    console.log('renderPrepareAttackButton', level);

    if (level === 3 || (level >= 5 && level <= 9)) {
      return (
        <Fragment>
          <button onClick={() => this.handleAttack(8)}>8 - Prepare Attack</button>
        </Fragment>
      );
    }
  }

  renderAttackButton() {
    const { level } = this.props;

    console.log('renderAttackButton', level);

    if (level === 3 || level >= 5 && level <= 9) {
      return (
        <Fragment>
          <button onClick={() => this.handleAttack(9)}>9 - Attack</button>
        </Fragment>
      );
    }
  }

  rotateButtons() {
    return Array(6).fill().map((v, i) => {
      return <button key={i} onClick={() => this.props.rotateBase(i + 1)}>Rotation {i + 1} Base</button>
    })
  }

  handleBase = () => {
    const { rotateBase, rotation, setLevel } = this.props;
    rotateBase(rotation);
    setLevel(1);
  }

  handleServe = () => {
    const { defineRoles, players, setLevel, rotation, setServeFormation } = this.props;

    setLevel(2);

    // Define roles of players
    defineRoles(players, rotation, false);

    // Set formation
    setServeFormation(players, rotation);
  }

  handleReceive = () => {
    const { defineRoles, players, setLevel, rotation, setReceiveFormation } = this.props;

    setLevel(3);
    // Define roles of players
    defineRoles(players, rotation, true);

    // Set formation
    setReceiveFormation(players, rotation);
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

const mapStateToProps = (state) => {
  return { ...state.controlsReducer, ...state.playersReducer };
};

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