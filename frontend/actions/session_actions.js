import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveSessionErrors(err.responseJSON)))
);
export const login = (user) => dispatch => (
  SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveSessionErrors(err.responseJSON)))
);
export const demoLogin = () => dispatch => (
  SessionAPIUtil.login({ email: 'rweir11', password: 'starwars11' }).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveSessionErrors(err.responseJSON)))
);
export const logout = (id) => dispatch  => (
  SessionAPIUtil.logout(id).then(user => dispatch(receiveCurrentUser(null)),
  err => dispatch(receiveSessionErrors(err.responseJSON)))
);
