import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Player from './player';
import arrow from '../images/arrow.svg';

class Court extends Component {

  render() {
    return (
      <section className="courtContainer" >
        <section className="court">
          <section className="court__attack-line"></section>
          {this.generatePlayers()}
          {this.generateAttackArrows()}
        </section>
      </section >
    );
  }

  generatePlayers() {
    const { players } = this.props;
    if (!players) return;

    let i = 0;
    return players.map((player) => {
      return (
        <Player
          key={i++}
          {...player}
        />
      )
    });
  }

  generateAttackArrows() {
    const { rotation, level } = this.props;
    const row = rotation <= 3 ? 'front' : 'back';
    const show = level === 8 ? 'arrow--show' : '';

    return (
      <Fragment>
        <img src={arrow} className={`arrow arrow__outside ${show}`} alt="outside attack" />
        <img src={arrow} className={`arrow arrow__middle ${show}`} alt="middle attack" />
        <img src={arrow} className={`arrow arrow__pipe ${show}`} alt="pipe attack" />
        <img src={arrow} className={`arrow arrow__opposite-${row} ${show}`} alt="opposite attack" />
      </Fragment>
    );

  }

}

const mapStateToProps = (state) => ({ ...state.playersReducer, ...state.controlsReducer });

export default connect(mapStateToProps, {})(Court);