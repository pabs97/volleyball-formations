import React, { Component } from 'react';
import Player from './player';

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
    let i = 0;
    return this.props.players.map((player) => {
      return <Player
        key={i++}
        {...player}
      />
    });
  }
}

export default Court;