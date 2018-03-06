import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';

const ErrorsReducers = combineReducers({
  session: SessionErrorsReducer
});

export default ErrorsReducers;
