import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
