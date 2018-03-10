import { connect } from 'react-redux';
import React from 'react';
import CreateItemContainer from '../items/item_create_container';
import { closeModal } from '../../actions/modal_actions';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'CreateItem':
      component = ( <CreateItemContainer /> );
      break;
    default:
      return null;
  }


  return (
    <div className="outer-modal" onClick={closeModal}>
      <div className="inner-modal" onClick={e => e.stopPropegation()}>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
