import * as SearchUtil from '../util/search_api_util';

export const RECEIVE_QUERY = "RECEIVE_QUERY";

const receiveQuery = (query) => {
  return {
    type: RECEIVE_QUERY,
    query
  };
};

export const fetchQuery = (query) => dispatch => {
  return SearchUtil.fetchQuery(query).then(query => dispatch(receiveQuery(query)),
  err => dispatch(receiveItemErrors(err.responseJSON)));
};
