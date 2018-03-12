import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return { modal: action.modal, item: action.item };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalsReducer;
