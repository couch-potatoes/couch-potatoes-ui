import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './store';

import App from './App';

const store = createStore({ auth: { isLoggedIn: true, email: 'foo', }});

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
