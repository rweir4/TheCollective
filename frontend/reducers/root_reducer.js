import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './session_errors_reducer';
import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
