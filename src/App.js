import React, { Component } from 'react';
import Court from './components/court';
import Controls from './components/controls';
import ResponsiveDrawer from './components/drawer';

import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const pages = [
  { name: '5-1 Offense', url: '/fiveOne' },
  { name: 'Coed', url: '/coed' },
  { name: 'Coed2', url: '/coed2' },
  { name: 'Coed3', url: '/coed3' },
];

function App() {
  return (
    <Provider store={store}>

      <Router>

        <ResponsiveDrawer pages={pages} >
          <Switch>

            <Route path='/fiveOne'>
              <Court />
              <Controls />
            </Route>

            <Route path='/coed'>
              <div>Coming soon!</div>
            </Route>

          </Switch>
        </ ResponsiveDrawer>
      </Router>


    </Provider >
  );
}

export default App;
