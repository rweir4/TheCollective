import { RECEIVE_USER, LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default UserReducer;
