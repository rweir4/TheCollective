import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  sessionErrors: errors
});

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(user => dispatch(receiveUser(user)),
  err => dispatch(receiveSessionErrors(err)))
);
export const login = (user) => dispatch => (
  SessionAPIUtil.login(user).then(user => dispatch(receiveUser(user)),
  err => dispatch(receiveSessionErrors(err)))
);
export const logout = (id) => dispatch  => (
  SessionAPIUtil.logout(id).then(user => dispatch(receiveUser(null)),
  err => dispatch(receiveSessionErrors(err)))
);
