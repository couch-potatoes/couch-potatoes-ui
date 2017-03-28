import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './store';

import App from './App';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
