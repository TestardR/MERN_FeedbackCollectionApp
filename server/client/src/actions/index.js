import axios from 'axios';
import { FETCH_USER } from './types';

// Whenever our action is called, it will return an action
// ReduxThunk will see the function and call it with the "dispatch"
// We will make a request, and only when we have a response, we sispatch the action with the payload

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  // answer from the server
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Before refactoring
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

// Handle Token received from payments
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  // answer from the server, we want the updated user model
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Submit survey
export const submitSurvey = values => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  dispatch({ type: FETCH_USER, payload: res.data });
};
