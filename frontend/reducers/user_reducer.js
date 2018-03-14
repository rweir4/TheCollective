import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
