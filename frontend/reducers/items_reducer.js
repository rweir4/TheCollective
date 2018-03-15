import { RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM } from '../actions/item_actions';
import { RECEIVE_COLLECTION } from '../actions/collection_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  //
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEMS:
    case RECEIVE_COLLECTION:
    case RECEIVE_USER:
      return merge({}, state, action.items);
    case RECEIVE_ITEM:
    case RECEIVE_USER:
      return merge({}, state, {[action.item.id]: action.item});
    case REMOVE_ITEM:
      const nextState = merge({}, state);
      delete nextState[action.itemId];
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
