import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.sessionErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
