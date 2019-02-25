import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// Pieces of state produced by reducers
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  survey: surveysReducer
});
