export const selectUserCollections = (state, user) => {
  debugger
  if (user.collection_ids) {
      return user.collection_ids.map(collection_id => {
      return state.entities.collections[collection_id];
    });
  } else {
    return [];
  }
};

export const selectUserItems = (state, user) => {
  if (user.item_ids) {
    return user.item_ids.map(item_id => {
      return state.entities.items[item_id];
    });
  } else {
    return [];
  }
};

export const selectCollectionItems = (state, collection) => {
  return collection.item_ids.map(item_id => {
    return state.entities.items[item_id];
  });
};
