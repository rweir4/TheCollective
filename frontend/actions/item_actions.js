import * as ItemAPIUtil from '../util/item_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';


const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  item
});

const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId
});

export const fetchItems = () => dispatch => {
  return ItemAPIUtil.fetchItems().then(items => dispatch(receiveItems(items)));
};

export const fetchItem = id => dispatch => {
  return ItemAPIUtil.fetchItem(id).then(item => dispatch(receiveItem(item)));
};

export const createItem = item => dispatch => {
  return ItemAPIUtil.createItem(item).then(item => dispatch(receiveItem(item)));
};

export const updateItem = item => dispatch => {
  return ItemAPIUtil.updateItem(item).then(item => dispatch(receiveItem(item)));
};

export const deleteItem = itemId => dispatch => {
  return ItemAPIUtil.deleteItem(itemId).then(item => dispatch(removeItem(itemId)));
};
