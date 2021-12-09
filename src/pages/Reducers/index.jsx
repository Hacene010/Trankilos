import { combineReducers, createStore } from 'redux';
import userReducer from './userReducer';
import isLoggedReducer from './loginReducer';

const mainReducer = () => {
  return combineReducers({ userReducer, isLogged: isLoggedReducer });
};

const store = createStore(
  /* eslint-disable no-underscore-dangle */
  mainReducer(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
