export const selectUserCollections = (state, user) => {
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
  if (collection.item_ids) {
    return collection.item_ids.map(item_id => {
      return state.entities.items[item_id];
    });
  } else {
    return [];
  }
};

export const selectUserFollowsItems = (state, currentUserId) => {
  if (state.entities.users[currentUserId] !== undefined) {
    // debugger
    const follows = state.entities.users[currentUserId].follows;
    return Object.values(state.entities.items).map(item => {
      if (follows.includes(item.author_id) || item.author_id === currentUserId) {
        return state.entities.items[item.id];
      }
    });
  } else {
    return [];
  }
};
