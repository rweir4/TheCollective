import { RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM } from '../actions/item_actions';
import { RECEIVE_COLLECTION } from '../actions/collection_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { REMOVE_FOLLOW } from '../actions/follows_actions';
import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  //
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ITEMS:
    case RECEIVE_COLLECTION:
    case RECEIVE_USER:
      return merge({}, state, action.items);
    case RECEIVE_ITEM:
      return merge({}, state, {[action.item.id]: action.item});
    case REMOVE_ITEM:
      nextState = merge({}, state);
      delete nextState[action.itemId];
      return nextState;
    case REMOVE_FOLLOW:
      nextState = merge({}, state);
      const itemsToDelete = [];
      Object.values(nextState).forEach(item => {
        if (item.author_id === action.followee_id) {
          itemsToDelete.push(item.id);
        }
      });

      itemsToDelete.forEach(itemId => {
        delete nextState[itemId];
      });
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
