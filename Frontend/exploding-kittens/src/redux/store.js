import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState = {};

const middleware = [thunk];

const store = legacy_createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
