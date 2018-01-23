import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  // whatever keys we provide to this object are going to represent the keys that exist in our state object.
  // auth piece of state is being provided by the authReducer.
  auth: authReducer
});
