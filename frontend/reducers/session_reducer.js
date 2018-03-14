import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser.user;
      return { currentUser };
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
