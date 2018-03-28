import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_COLLECTION } from '../actions/collection_actions';
import { RECEIVE_ITEM } from '../actions/item_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follows_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let user;
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
    case RECEIVE_COLLECTION:
    case RECEIVE_ITEM:
    return merge({}, state, {[action.user.id]: action.user });
    case RECEIVE_FOLLOW:
      return merge({}, state,
        {[action.follower_id.follows]:
         state[action.follower_id].follows.push(action.followee_id)
        },
        {[action.followee_id.followers]:
          state[action.followee_id].followers.push(action.follower_id)
        });
    case REMOVE_FOLLOW:
      const nextState = merge({}, state);
      delete nextState[action.follower_id].follows.followee_id;
      delete nextState[action.followee_id].followers.follower_id;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
