import React, { Component, Fragment } from 'react';
import { rotateBase } from '../actions/rotateBase';
import { setLevel } from '../actions/setLevel';
import { setDefense } from '../actions/defense';
import { defineRolesServingAction } from '../actions/defineRoles';
import { connect } from 'react-redux';

class Controls extends Component {
  state = {}
  render() {

    const { rotateBase, setLevel, level, rotation } = this.props;
    // TODO input to set animation speed

    return (
      <section className='controls'>
        <h4>Rotation {rotation}</h4>
        <button onClick={this.handleBase}>1 - Base</button>


        {this.renderBaseButtons()}
        {this.renderDefenseButtons()}

      </section >
    );
  }

  renderBaseButtons() {
    if (this.props.level !== 1) return;

    return (
      <Fragment>
        {this.rotateButtons()}
        <button onClick={this.handleServe}>2 - Serve</button>
        <button onClick={() => this.props.setLevel(3)}>3 - Receive</button>
      </Fragment>
    );
  }

  renderDefenseButtons() {
    const { level } = this.props;

    if (level === 2 || level >= 4 && level <= 7) {
      return (
        <Fragment>
          <button onClick={() => this.handleDefense(4)}>4 - Base Defense</button>
          <button onClick={() => this.handleDefense(5)}>5 - Left Defense</button>
          <button onClick={() => this.handleDefense(6)}>6 - Middle Defense</button>
          <button onClick={() => this.handleDefense(7)}>7 - Right Defense</button>
        </Fragment>
      )
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
    const { defineRolesServingAction, players, setLevel, rotation } = this.props;

    // set level to 2
    setLevel(2);

    // define roles of players
    defineRolesServingAction(players, rotation);

    // give players new coordinates based on these roles
  }

  handleReceive() {
    // set level to 3
    // define roles of players
    // give players new coordinates based on these roles
  }

  handleDefense = (level) => {

    const { setDefense, setLevel, players } = this.props;
    const defenseTypes = ['base', 'left', 'middle', 'right'];

    setLevel(level);
    setDefense(players, defenseTypes[level - 4]);
  }




}

const mapStateToProps = (state) => {
  return { ...state.controlsReducer, ...state.playersReducer };
};

export default connect(mapStateToProps, { rotateBase, setLevel, setDefense, defineRolesServingAction })(Controls);