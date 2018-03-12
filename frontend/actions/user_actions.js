import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = ({ user, collection_ids }) => ({
  type: RECEIVE_USER,
  user,
  collection_ids
});

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(payload => dispatch(receiveUser(payload)));
};
