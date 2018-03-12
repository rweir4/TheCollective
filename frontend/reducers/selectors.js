export const selectUserCollections = (state, user) => {
  // debugger
  return user.collection_ids.map(collection_id => {
    return state.entities.collections[collection_id];
  });
};

export const selectUserItems = (state, user) => {
  return user.item_ids.map(item_id => {
    return state.entities.items[item_id];
  });
};
