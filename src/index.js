import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/rootReducer';
const logger = createLogger({
  collapsed: true
});

const store = createStore(rootReducer, applyMiddleware(logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
