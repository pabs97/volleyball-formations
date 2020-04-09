import React, { Component } from 'react';
import Player from './player';

import { connect } from 'react-redux';

class Court extends Component {

  render() {
    return (
      <section className="court">
        <section className="court--attack-line"></section>
        {this.generatePlayers()}
      </section>
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
  return {
    players: state.playersReducer.players,
  };
};

export default connect(mapStateToProps, {})(Court);