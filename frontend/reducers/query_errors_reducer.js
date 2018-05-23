import { RECEIVE_QUERY_ERRORS } from '../actions/search_actions';

const queryErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUERY_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default queryErrorsReducer;
