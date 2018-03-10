import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';

const UIReducer = combineReducers({
  modal: modalsReducer
});

export default UIReducer;
