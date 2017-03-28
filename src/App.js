import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import WithAuth from './components/WithAuth';

import Home from './views/Home';
import Login from './views/Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={() => <WithAuth><Home/></WithAuth>} />
      </Switch>
    );
  }
}

export default App;
