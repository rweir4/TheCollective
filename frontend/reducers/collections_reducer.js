import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION, REMOVE_COLLECTION } from '../actions/collection_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ITEM } from '../actions/item_actions';
import { merge } from 'lodash';

const collectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
    case RECEIVE_USER:
      return merge({}, state, action.collections);
    case RECEIVE_COLLECTION:
      return merge({}, state, {[action.collection.id]: action.collection});
    case REMOVE_COLLECTION:
      const nextState = merge({}, state);
      delete nextState[action.collectionId];
      return nextState;
    case RECEIVE_ITEM:
      return merge({}, state, {[action.collection.id]: action.collection});
    default:
      return state;
  }
};

export default collectionsReducer;
