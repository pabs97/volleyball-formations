import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import HelpSection from './help';

import {
  setRotationBase,
  setControlsLevel,
  setDefenseFormation,
  setServeFormation,
  setReceiveFormation,
  setRotationRoles,
  setAttackFormation,
} from '../actions';

const headerText = ['', ' - Serve', ' - Receive'];

class Controls extends Component {
  render() {

    const { rotation, serveReceive, level } = this.props;
    // TODO: add toggles and grey them out instead

    return (
      <section className='controls'>


        <div className="description-box">
          <p><b>Base: </b>Rotation {rotation}{headerText[serveReceive]}</p>
          <HelpSection level={level} />
        </div>


        <button
          className='control-button'
          onClick={this.handleBase}
        >
          {`1 - Rotation ${rotation} Base`}
        </button>

        {/* {this.renderBaseButtons()} */}
        {this.renderRotateButtons()}
        {this.renderServeButton()}
        {this.renderReceiveButton()}

        {this.renderDefenseButtons()}
        {this.renderAttackButtons()}
      </section >
    );
  }

  renderRotateButtons() {
    if (this.props.level === 1) {
      return Array(6).fill().map((v, i) => {
        return (
          <button
            key={i}
            className='control-button --indent'
            onClick={() => this.props.setRotationBase(i + 1)}
          >
            {`Rotation ${i + 1}`}
          </button>
        );
      })
    }
  }

  renderServeButton() {
    const { level, serveReceive } = this.props;

    if (level === 1 || serveReceive === 1) {
      return (
        <button
          className="control-button"
          onClick={() => this.handleServeReceive(1)}
        >
          2 - Serve
        </button>
      );
    }
  }

  renderReceiveButton() {
    const { level, serveReceive } = this.props;

    if (level === 1 || serveReceive === 2) {
      return (
        <button
          className="control-button"
          onClick={() => this.handleServeReceive(2)}
        >
          3 - Receive
        </button>
      );
    }
  }

  renderDefenseButtons() {
    const { level } = this.props;
    const classes = 'control-button --indent';

    if (level === 2 || (level >= 4 && level <= 9)) {
      return (
        <>
          <button
            className='control-button'
            onClick={() => this.handleDefense(4)}
          >
            4 - Base Defense
          </button>
          <button className={classes} onClick={() => this.handleDefense(5)}>5 - Left</button>
          <button className={classes} onClick={() => this.handleDefense(6)}>6 - Middle</button>
          <button className={classes} onClick={() => this.handleDefense(7)}>7 - Right</button>
        </>
      );
    }
  }

  renderAttackButtons() {
    const { level } = this.props;

    if (level === 3 || (level >= 5 && level <= 9)) {
      return (
        <Fragment>
          <button
            className='control-button'
            onClick={() => this.handleAttack(8)}
          >
            8 - Prepare Attack
          </button>
          <button
            className='control-button'
            onClick={() => this.handleAttack(9)}
          >
            9 - Attack
          </button>
        </Fragment>
      );
    }
  }

  handleBase = () => {
    const { setRotationBase, rotation, setControlsLevel } = this.props;
    setControlsLevel(1);
    setRotationBase(rotation);
  }

  handleServeReceive = (serveReceive) => {
    const { players, rotation, setControlsLevel, setRotationRoles, setServeFormation, setReceiveFormation } = this.props;
    const setFormation = serveReceive === 1 ? setServeFormation : setReceiveFormation;

    // serve - 2, receive - 3
    setControlsLevel(serveReceive + 1);
    setRotationRoles(players, rotation, serveReceive);
    setFormation(players, rotation);
  }

  handleDefense = (level) => {
    const { setDefenseFormation, setControlsLevel, players } = this.props;
    const defenseTypes = ['base', 'left', 'middle', 'right'];

    setControlsLevel(level);
    setDefenseFormation(players, defenseTypes[level - 4]);
  }

  handleAttack = (level) => {
    const { players, rotation, setControlsLevel, setAttackFormation } = this.props;

    setControlsLevel(level);
    setAttackFormation(players, rotation, level === 8);
  }

}

const mapStateToProps = (state) => ({ ...state.controlsReducer, ...state.playersReducer });

export default connect(
  mapStateToProps,
  {
    setRotationBase,
    setControlsLevel,
    setDefenseFormation,
    setRotationRoles,
    setServeFormation,
    setReceiveFormation,
    setAttackFormation,
  }
)(Controls);