import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = '', action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload;
  } else if (action.type === 'CLEAR_FEELING') {
    return '';
  }

  return state;
};

const understandingReducer = (state = '', action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    return action.payload;
  } else if (action.type === 'CLEAR_UNDERSTANDING') {
    return '';
  }

  return state;
};

const supportedReducer = (state = '', action) => {
  if (action.type === 'SET_SUPPORTED') {
    return action.payload;
  } else if (action.type === 'CLEAR_SUPPORTED') {
    return '';
  }

  return state;
};

const commentsReducer = (state = [], action) => {
  if (action.type === 'SET_COMMENTS') {
    return action.payload;
  } else if (action.type === 'CLEAR_COMMENTS') {
    return [];
  }

  return state;
};
const summaryReducer = (state = [], action) => {
  if (action.type === 'SET_SURVEY') {
    return action.payload;
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    summaryReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
