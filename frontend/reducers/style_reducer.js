import { MAKE_OPAQUE, REMOVE_OPAQUE } from '../actions/ui_actions';
import { merge } from 'lodash';

const styleReducer = (state = {loaded: 'false'}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case MAKE_OPAQUE:
      return merge({}, state, {loaded: 'true'});
    case REMOVE_OPAQUE:
      return merge({}, state, {loaded: 'false'});
    default:
      return state;
  }
};

export default styleReducer;
