import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import WithAuth from './components/WithAuth';

import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import StatusLog from './views/StatusLog';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <WithAuth><Home /></WithAuth>} />
        <Route exact path="/(home)" render={() => <WithAuth><Home/></WithAuth>} />
        <Route path="/login" component={Login} />
        <Route path="/profile" render={() => <WithAuth><Profile /></WithAuth>} />
        <Route path="/status" render={() => <WithAuth><StatusLog /></WithAuth>} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
