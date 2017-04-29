import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import CouchPotatoAppBar from './components/CouchPotatoAppBar';
import NotificationSnackbar from './components/NotificationSnackbar';
import WithAuth from './components/WithAuth';

import About from './views/About';
import ForgotPassword from './views/ForgotPassword';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import StatusLog from './views/StatusLog';
import NutritionCharts from './views/NutritionCharts.jsx';
import SECharts from './views/SECharts.jsx';
import Register from './views/Register';
import ResearchCreation from './views/ResearcherCreation';
import ResetPassword from './views/ResetPassword';

const App = () => (
  <div>
    <CouchPotatoAppBar />
    <Switch>
      <Route exact path="/" render={() => <WithAuth><Home /></WithAuth>} />
      <Route path="/login" component={Login} />
      <Route path="/n-charts" component={NutritionCharts} />
      <Route path="/se-charts" render={() => <WithAuth><SECharts /></WithAuth>} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/register" component={Register} />
      <Route path="/register-researcher" render={() => <WithAuth requiredUserType="researcher"><ResearchCreation /></WithAuth>} />
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
