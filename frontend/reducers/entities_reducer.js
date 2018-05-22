import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import collectionsReducer from './collections_reducer';
import itemsReducer from './items_reducer';
import queryReducer from './query_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  collections: collectionsReducer,
  items: itemsReducer,
  query: queryReducer
});

export default entitiesReducer;
