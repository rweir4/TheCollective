import { RECEIVE_QUERY } from '../actions/search_actions';
import { merge } from 'lodash';

const queryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUERY:
      return merge({}, state, {results: action.results});
    default:
      return state;
  }
};

export default queryReducer;
