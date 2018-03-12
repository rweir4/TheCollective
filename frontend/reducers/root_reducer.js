import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: UIReducer
});

export default RootReducer;
