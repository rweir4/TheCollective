import * as FollowsAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW =  'REMOVE_FOLLOW';

const receive_follow = ({followee_id, follower_id}) => {
  return {
    type: RECEIVE_FOLLOW,
    followee_id,
    follower_id
  };
};

const remove_follow = ({followee_id, follower_id}) => {
  // debugger
  return {
    type: REMOVE_FOLLOW,
    followee_id,
    follower_id
  };
};

export const createFollow = (id) => dispatch => {
  return FollowsAPIUtil.createFollow(id).then(payload => {
    dispatch(receive_follow(payload));
  });
};

export const deleteFollow = (id, user_id) => dispatch => {
  return FollowsAPIUtil.deleteFollow(id, user_id).then(payload => {
    debugger
    return dispatch(remove_follow(payload));
  });
};
