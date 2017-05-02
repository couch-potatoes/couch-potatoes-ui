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
    //use middlewear
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

    //export initial state
export default (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};
