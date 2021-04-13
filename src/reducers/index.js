// We'll bring any other reducers we have
import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({  // It takes an Object with all reducers
  log: logReducer
});