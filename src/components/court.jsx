import React, { Component } from 'react';
import Player from './player';

import { connect } from 'react-redux';

class Court extends Component {

  render() {
    return (
      <section className="courtContainer" >
        <section className="court">
          <section className="court--attack-line"></section>
          {this.generatePlayers()}
        </section>
      </section >
    );
  }

  generatePlayers() {
    if (!this.props.players) return;

    let i = 0;
    return this.props.players.map((player) => {
      return (
        <Player
          key={i++}
          {...player}
        />
      )
    });
  }
}

const mapStateToProps = (state) => {
  return { ...state.playersReducer };
};

export default connect(mapStateToProps, {})(Court);