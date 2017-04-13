import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import CouchPotatoAppBar from './components/CouchPotatoAppBar';
import WithAuth from './components/WithAuth';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import StatusLog from './views/StatusLog';
import ResetPassword from './views/ResetPassword';
import ForgotPassword from './views/ForgotPassword';

const App = () => (
  <div>
    <CouchPotatoAppBar />
    <Switch>
      <Route exact path="/" render={() => <WithAuth><Home /></WithAuth>} />
      <Route exact path="/(home)" render={() => <WithAuth><Home /></WithAuth>} />
      <Route path="/login" component={Login} />
      <Route path="/pass-forgot" component={ForgotPassword} />
      <Route path="/register" component={Register} />
      <Route path="/profile" render={() => <WithAuth><Profile /></WithAuth>} />
      <Route path="/status" render={() => <WithAuth><StatusLog /></WithAuth>} />
      <Route path="/pass-res" render={() => <WithAuth><ResetPassword /></WithAuth>} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
