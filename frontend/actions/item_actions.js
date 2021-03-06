import * as ItemAPIUtil from '../util/item_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';


const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items
  };
};

export const receiveItem = ({item, user, collection}) => {
  return {
    type: RECEIVE_ITEM,
    item,
    user,
    collection
  };
};

const removeItem = ({item, collection}) => {
  return {
    type: REMOVE_ITEM,
    itemId: item.id,
    collectionId: collection.id
  };
};

const receiveItemErrors = itemErrors => {

  return {
    type: RECEIVE_ITEM_ERRORS,
    itemErrors
  };
};

export const fetchItems = () => dispatch => {
  return ItemAPIUtil.fetchItems().then(items => dispatch(receiveItems(items)));
};

export const fetchItem = id => dispatch => {
  return ItemAPIUtil.fetchItem(id).then(payload => dispatch(receiveItem(payload)));
};

export const fetchProfileItems = (id) => dispatch => {
  return ItemAPIUtil.fetchProfileItems(id).then(items => dispatch(receiveItems(items)),
  err => dispatch(receiveItemErrors(err.responseJSON)));
};

export const createItem = item => dispatch => {
  return ItemAPIUtil.createItem(item).then(item => dispatch(receiveItem(item)),
  err => dispatch(receiveItemErrors(err.responseJSON)));
};

export const updateItem = item => dispatch => {
  return ItemAPIUtil.updateItem(item).then(item => {
    dispatch(removeItem(item));
    dispatch(receiveItem(item));
  },err => dispatch(receiveItemErrors(err.responseJSON)));
};

export const deleteItem = itemId => dispatch => {
  return ItemAPIUtil.deleteItem(itemId).then(payload => {
    dispatch(removeItem(payload));
  });
};
