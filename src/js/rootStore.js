import { createStore, compose } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const applyMiddleware = require('redux').applyMiddleware;

const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promise))
);

export default rootStore;
