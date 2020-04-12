import React, { Component } from 'react';
import { connect } from 'react-redux';

import Player from './player';

class Court extends Component {

  render() {
    return (
      <section className="courtContainer" >
        <section className="court">
          <section className="court__attack-line"></section>
          {this.generatePlayers()}
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
}

const mapStateToProps = (state) => ({ ...state.playersReducer });

export default connect(mapStateToProps, {})(Court);