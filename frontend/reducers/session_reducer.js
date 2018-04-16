import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import { REMOVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser.user.id;
      return { currentUser };
    case LOGOUT:
      return _nullUser;
    case REMOVE_USER:
      const nextState = merge({}, state);
      debugger
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
