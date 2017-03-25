import React, { Component } from 'react';
import {
  Route,
} from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ResetPassword from './views/ResetPassword';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset" component={ResetPassword} />
      </div>
    );
  }
}

export default App;
