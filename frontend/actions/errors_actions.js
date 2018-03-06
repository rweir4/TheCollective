export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = (errors) => dispatch ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => dispatch ({
  type: CLEAR_ERRORS,
  errors: null
});
