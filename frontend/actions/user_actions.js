import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REMOVE_USER = 'REMOVE_USER';


const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = ({ user, collections, items }) => {
  return {
    type: RECEIVE_USER,
    user,
    collections,
    items
  };
};

const removeUser = (userId) => {
  return {
    type: REMOVE_USER,
    userId
  };
};

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(payload => dispatch(receiveUser(payload)));
};

export const updateUser = user => dispatch => {
  return UserAPIUtil.updateUser(user).then(payload => {
    return dispatch(receiveUser(payload));
  });
};

export const deleteUser = id => dispatch => {
  return UserAPIUtil.deleteUser(id).then(userId => dispatch(removeUser(userId)));
};
