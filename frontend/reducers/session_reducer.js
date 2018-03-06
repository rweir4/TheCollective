import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [currentUser]: action.currentUser });
    case LOGOUT:
      return merge({}, state, {[currentUser]: _nullUser});
    default:
      return state;
  }
};

export default SessionReducer;
