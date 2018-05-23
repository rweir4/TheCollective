import * as SearchUtil from '../util/search_api_util';

export const RECEIVE_QUERY = "RECEIVE_QUERY";
export const RECEIVE_QUERY_ERRORS = "RECEIVE_QUERY_ERRORS";

const receiveQuery = ({ results }) => {
  return {
    type: RECEIVE_QUERY,
    results
  };
};

const receiveQueryErrors = errors => {
  return {
    type: RECEIVE_QUERY_ERRORS,
    errors
  };
};

export const fetchQuery = (query) => dispatch => {
  return SearchUtil.fetchQuery(query).then(query => dispatch(receiveQuery(query)),
  err => dispatch(receiveQueryErrors(err.responseJSON)));
};
