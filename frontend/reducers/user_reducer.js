import { RECEIVE_USER, RECEIVE_USERS, REMOVE_USER } from '../actions/user_actions';
import { RECEIVE_COLLECTION } from '../actions/collection_actions';
import { RECEIVE_ITEM } from '../actions/item_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follows_actions';
import { REMOVE_COLLECTION } from '../actions/collection_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let user;
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
    case RECEIVE_COLLECTION:
    case RECEIVE_ITEM:
      return merge({}, state, {[action.user.id]: action.user });
    case RECEIVE_FOLLOW:
      nextState[action.follower_id].follows.push(action.followee_id);
      nextState[action.followee_id].followers.push(action.follower_id);
      return nextState;
    case REMOVE_FOLLOW:
      const followers_follows = [];
      const followed_followers = [];
      nextState[action.follower_id].follows.forEach(id => {
        if (id !== action.followee_id) {
          followers_follows.push(id);
        }
      });
      nextState[action.followee_id].followers.forEach(id => {
        if (id !== action.follower_id) {
          followed_followers.push(id);
        }
      });
      nextState[action.follower_id].follows = followers_follows;
      nextState[action.followee_id].followers = followed_followers;
      return nextState;
    case REMOVE_COLLECTION:
      const collections = [];

      state[action.collectionId.user.id].collection_ids.forEach(id => {
        if (id !== action.collectionId.collection.id)
        {
          collections.push(id);
        }
      });

      nextState[action.collectionId.user.id].collection_ids = collections;
      return nextState;
    case REMOVE_USER:

      delete nextState[action.user];
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
