import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxTkunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';
// temporary axios call to check our backend routes for survey
import axios from 'axios';
window.axios = axios;

// dummy reducer for now to get our store started () => {}, instead of reducers
const store = createStore(reducers, {}, applyMiddleware(reduxTkunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
// console.log('Environement is', process.env.NODE_ENV);
