import React, { Component } from 'react';
import Court from './components/court';
import Controls from './components/controls';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Court />
      <Controls />
    </Provider>
  );
}

export default App;
