/* eslint-disable */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';

const initialState = {};

// const middlewares = [loggerMiddleware, thunkMiddleware];
const middlewares = [thunkMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
