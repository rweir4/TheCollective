import * as FollowsAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW =  'REMOVE_FOLLOW';

const receive_follow = ({followedUser, currentUser}) => {
  return {
    type: RECEIVE_FOLLOW,
    followedUser,
    currentUser
  };
};

const remove_follow = ({followedUser, currentUser}) => {
  return {
    type: REMOVE_FOLLOW,
    followedUser,
    currentUser
  };
};

export const createFollow = (id) => dispatch => {
  return FollowsAPIUtil.createFollow(id).then(payload => dispatch(receive_follow(payload)));
};

export const deleteFollow = (id) => dispatch => {
  return FollowsAPIUtil.deleteFollow(id).then(payload => dispatch(remove_follow(payload)));
};
