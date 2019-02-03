import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Pieces of state produced by reducers
export default combineReducers({
  auth: authReducer
});
