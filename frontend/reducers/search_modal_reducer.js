import { OPEN_SEARCH, CLOSE_SEARCH } from '../actions/search_actions';

const searchModalsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_SEARCH:
      return { search: true };
    case CLOSE_SEARCH:
      return null;
    default:
      return state;
  }
};

export default searchModalsReducer;
