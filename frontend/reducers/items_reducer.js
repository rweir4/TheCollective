import { RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM } from '../actions/item_actions';
import { RECEIVE_COLLECTION } from '../actions/collection_actions';
import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  //
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEMS:
    case RECEIVE_COLLECTION:
      return merge({}, state, action.items);
    case RECEIVE_ITEM:
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
