import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducers = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducers;
