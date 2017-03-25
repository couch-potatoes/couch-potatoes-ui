import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ResetPassword from './views/ResetPassword';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset" component={ResetPassword} />
      </Switch>
    );
  }
}

export default App;
