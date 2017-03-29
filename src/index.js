import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import createStore from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore();
// const store = createStore({ auth: { isLoggedIn: true, email: 'foo', }});

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router basename="/">
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
