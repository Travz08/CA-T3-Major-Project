import { FETCH_USER } from '../actions/types'

// determining whether the user is logged in our not.
export default function(state = null, action) {
  // console.log(action)
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}


// situation - make request to backend to get current user
//           - auth reducer returns null
//           - null indicares we really don't know whats up right now

// situation - Request comlete, user is logged in
//           - Auth reducer returns User model
//           - Object containing user ID

// situation - Request done, user *is not* logged in
//           - Auth reducer returns false
//           - null indicares we really don't know whats up right now



// this is to handle the sign out. The payload when you logout is an empty string.
// since an empty string is a false value this works.
// case FETCH_USER:
//   return action.payload || false;
