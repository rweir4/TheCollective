import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const LOGOUT = 'LOGOUT';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    sessionErrors: errors
  };
};

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  };
};

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const demoLogin = () => dispatch => (
  SessionAPIUtil.demoLogin().then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const logout = (id) => dispatch  => (
  SessionAPIUtil.logout(id).then(user => dispatch({ type: LOGOUT }),
  err => dispatch(receiveSessionErrors(err.responseJSON)))
);
