import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import CouchPotatoAppBar from './components/CouchPotatoAppBar';
import NotificationSnackbar from './components/NotificationSnackbar';
import WithAuth from './components/WithAuth';

import About from './views/About';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import StatusLog from './views/StatusLog';
import ResetPassword from './views/ResetPassword';

const App = () => (
  <div>
    <CouchPotatoAppBar />
    <Switch>
      <Route exact path="/" render={() => <WithAuth><Home /></WithAuth>} />
      <Route path="/login" component={Login} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/register" component={Register} />
      <Route path="/profile" render={() => <WithAuth><Profile /></WithAuth>} />
      <Route path="/status" render={() => <WithAuth><StatusLog /></WithAuth>} />
      <Route path="/stat" component={StatusLog} />
      <Route path="/pass-res" render={() => <WithAuth><ResetPassword /></WithAuth>} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
    <NotificationSnackbar />
  </div>
);

export default App;
