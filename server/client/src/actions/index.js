import axios from 'axios';
import { FETCH_USER } from './types';

// Whenever our action is called, it will return an action
// ReduxThunk will see the function and call it with the "dispatch"
// We will make a request, and only when we have a response, we sispatch the action with the payload
const fetchUser = () => {
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
