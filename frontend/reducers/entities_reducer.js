import { combineReducers } from 'redux';
import UserReducer from './user_reducer';

const EntitiesReducer = combineReducers({
  user: UserReducer
});

export default EntitiesReducer;
