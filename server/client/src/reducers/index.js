import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

// Pieces of state produced by reducers
export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
