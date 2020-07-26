import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

// Reducer for feeling input
// Resets reducer after survey submitted to db
const feelingReducer = (state = '', action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload;
  } else if (action.type === 'CLEAR_FEELING') {
    return '';
  }
  return state;
};

// Reducer for understanding input
// Resets reducer after survey submitted to db
const understandingReducer = (state = '', action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    return action.payload;
  } else if (action.type === 'CLEAR_UNDERSTANDING') {
    return '';
  }
  return state;
};

// Reducer for supported input
// Resets reducer after survey submitted to db
const supportedReducer = (state = '', action) => {
  if (action.type === 'SET_SUPPORTED') {
    return action.payload;
  } else if (action.type === 'CLEAR_SUPPORTED') {
    return '';
  }
  return state;
};

// Reducer for comments input
// Resets reducer after survey submitted to db
const commentsReducer = (state = [], action) => {
  if (action.type === 'SET_COMMENTS') {
    return action.payload;
  } else if (action.type === 'CLEAR_COMMENTS') {
    return [];
  }
  return state;
};

// Reducer for all surveys
const surveyReducer = (state = [], action) => {
  if (action.type === 'SET_SURVEYS') {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    commentsReducer,
    surveyReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
