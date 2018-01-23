import axios from 'axios';
import { FETCH_USER } from './types';

// we want to dispatch the action after the axios request has been completed.
// Redux thunk means we can dispatch the action. We do not need to return an action like normal.
// redux thunk will see that it is a function and will call the dispatch. Using redux in the function below

// our action creator v3 - refactored.
// we are now passing res.data since that is the only thing we care about.
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  //axios returns a promise.
  dispatch({type: FETCH_USER, payload: res.data});

};



// our action creator v1
// export const fetchUser = () => {
//   return function(dispatch) {
//   axios.get('/api/current_user')
//   //axios returns a promise.
//   .then(res => dispatch({type: FETCH_USER, payload: res}))
//   }
// };

// our action creator v2
// export const fetchUser = () => dispatch => {
//   axios.get('/api/current_user')
//   //axios returns a promise.
//   .then(res => dispatch({type: FETCH_USER, payload: res}))
//
// };
