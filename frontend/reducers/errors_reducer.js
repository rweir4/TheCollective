import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import itemErrorsReducer from './item_errors_reducer';
import queryErrorsReducer from './query_errors_reducer';


const errorsReducers = combineReducers({
  session: sessionErrorsReducer,
  item: itemErrorsReducer,
  query: queryErrorsReducer
});

export default errorsReducers;
