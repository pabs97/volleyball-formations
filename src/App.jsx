import React, { Component } from 'react';
import Court from './components/court';
import Controls from './components/controls';
import rotations from './rotations';

class App extends Component {

  state = {
    players: rotations.rotation2.receive,
  }

  render() {
    return (
      <section>
        <Court
          players={[...this.state.players]}
        />
        <Controls
          handleServeReceiveTransition={this.updateFormation}
          handleDefenseTransition={this.transformRotationIntoDefense}
        />
      </section>
    );
  }

  updateFormation = (rotation, serveTransition) => {
    console.log(rotation, serveTransition, rotations);
    serveTransition = serveTransition === 1 ? 'receive' : 'transition';

    this.setState({
      players: rotations[`rotation${rotation}`][serveTransition]
    });
  }

  transformRotationIntoDefense = (defense) => {
    this.setState({
      players: rotations.defense[defense]
    })
  }
}

export default App;
