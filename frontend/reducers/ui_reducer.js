import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';
import styleReducer from './style_reducer';

const UIReducer = combineReducers({
  modal: modalsReducer,
  style: styleReducer
});

export default UIReducer;
