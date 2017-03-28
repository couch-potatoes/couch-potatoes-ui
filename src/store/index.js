import {
  applyMiddleware,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger,
)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};
