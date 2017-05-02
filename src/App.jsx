import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import CouchPotatoAppBar from './components/CouchPotatoAppBar';
import NotificationSnackbar from './components/NotificationSnackbar';
import ResearcherOnly from './components/ResearcherOnly';
import WithAuth from './components/WithAuth';

import About from './views/About';
import ChartsView from './views/ChartsView';
import ForgotPassword from './views/ForgotPassword';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import Register from './views/Register';
import ResearchCreation from './views/ResearcherCreation';
import ResetPassword from './views/ResetPassword';
import StatusLog from './views/StatusLog';

    //attach the links with their respective components
const App = () => (
  <div>
    <CouchPotatoAppBar />
    <Switch>
      <Route exact path="/" render={() => <WithAuth><Home /></WithAuth>} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/register" component={Register} />
      <Route path="/register-researcher" render={() => <ResearcherOnly><ResearchCreation /></ResearcherOnly>} />
      <Route path="/charts" render={() => <ResearcherOnly><ChartsView /></ResearcherOnly>} />
      <Route path="/profile" render={() => <WithAuth><Profile /></WithAuth>} />
      <Route path="/status" render={() => <WithAuth><StatusLog /></WithAuth>} />
      <Route path="/reset-password" render={() => <WithAuth><ResetPassword /></WithAuth>} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
    <NotificationSnackbar />
  </div>
);

export default App;
