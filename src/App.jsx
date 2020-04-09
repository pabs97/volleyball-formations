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
          handleAnimation={this.updateFormation}
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
}

export default App;
