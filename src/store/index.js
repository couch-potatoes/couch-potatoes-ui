import {
  applyMiddleware,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = [ thunk ];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};
