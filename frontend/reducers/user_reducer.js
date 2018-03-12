import { RECEIVE_USER, RECEIVE_USERS } from '../actions/session_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
    
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default userReducer;
