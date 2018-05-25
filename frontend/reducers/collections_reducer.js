import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION, REMOVE_COLLECTION } from '../actions/collection_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ITEM, REMOVE_ITEM } from '../actions/item_actions';
import { merge } from 'lodash';

const collectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
    case RECEIVE_USER:
      return merge({}, state, action.collections);
    case RECEIVE_COLLECTION:
      return merge({}, state, {[action.collection.id]: action.collection});
    case REMOVE_COLLECTION:
      debugger
      delete nextState[action.collectionId.collection.id];
      return nextState;
    case RECEIVE_ITEM:
      return merge({}, state, {[action.collection.id]: action.collection});
    case REMOVE_ITEM:
      const currCol = Object.values(nextState).find(col => {
      	return col.item_ids.includes(action.itemId);
      });

      const currItems = currCol.item_ids.filter(itemId => itemId !== action.itemId);
      nextState[currCol.id].item_ids = currItems;

      return nextState;
    default:
      return state;
  }
};

export default collectionsReducer;
