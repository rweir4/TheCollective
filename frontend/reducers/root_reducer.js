import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './session_errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
