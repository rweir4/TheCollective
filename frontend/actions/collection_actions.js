import * as CollectionAPIUtil from '../util/collection_api_util';

export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';
export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS';
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';


const receiveCollections = (collections) => ({
  type: RECEIVE_COLLECTIONS,
  collections
});

const receiveCollection = (collection) => ({
  type: RECEIVE_COLLECTION,
  collection
});

const removeCollection = (collectionId) => ({
  type: REMOVE_COLLECTION,
  collectionId
});

export const fetchCollections = () => dispatch => {
  return CollectionAPIUtil.fetchCollections().then(collections => dispatch(receiveCollections(collections)));
};

export const fetchCollection = id => dispatch => {
  return CollectionAPIUtil.fetchCollection(id).then(collection => dispatch(receiveCollection(collection)));
};

export const createCollection = collection => dispatch => {
  return CollectionAPIUtil.createCollection(collection).then(collection => dispatch(receiveCollection(collection)));
};

export const updateCollection = collection => dispatch => {
  return CollectionAPIUtil.updateCollection(collection).then(collection => dispatch(receiveCollection(collection)));
};

export const deleteCollection = id => dispatch => {
  return CollectionAPIUtil.deleteCollection(id).then(collection => dispatch(removeCollection(collection)));
};
