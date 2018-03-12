export const selectUserCollections = (state, user) => {
  // const newArr = [];
  // const keys = Object.keys(state.entities.collections)
  // if (!keys) return null;
  //
  // for (let i = 0; i < keys.length; i++) {
  //   for (let j = 0; j < user.collection_ids.length; j++) {
  //     if (state.entities.collections[i].id === user.collection_ids[j]) {
  //       newArr.push(state.entities.collections[i]);
  //     }
  //   }
  // }

  return user.collection_ids.map(collection_id => {
    return state.entities.collections[collection_id];
  });
};

export const selectUserItems = (state, user) => {
  return user.item_ids.map(item_id => {
    return state.entities.items[item_id];
  });
};
//
// return Object.values(user.collection_ids).map(collection_id => {
//   return state.entities.collections[collection_id];
// });
