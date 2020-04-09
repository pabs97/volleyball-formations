import React, { Component } from 'react';
import Court from './components/court';
import Controls from './components/controls';
import rotations from './rotations';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Court />
        <Controls />
      </Provider>
    );
  }

}

export default App;
