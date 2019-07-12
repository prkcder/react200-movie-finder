import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import App from './app';
// import reducers from './reducers'; --> will be reducer from search

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// update to include search reducer createStore(searchReducer, composeEnhancers...)
const store = createStore(composeEnhancers(applyMiddleware(promise)));

/* Update render method invoke */
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
