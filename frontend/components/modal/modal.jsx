import { connect } from 'react-redux';
import React from 'react';
import CreateItemContainer from '../items/item_create_container';
import { closeModal } from '../../actions/modal_actions';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(e) {
    // if (e.currentTarget === this) {
    // } else {
    //   return null;
    // }
    this.props.closeModal();
  }

  render() {
    if (!this.props.modal) {
      return null;
    }

    let component;
    switch (this.props.modal) {
      case 'CreateItem':
        component = ( <CreateItemContainer /> );
        break;
      default:
        return null;
    }

    return (
      <div className="outer-modal" onClick={this.handleModal}>
        <div className="inner-modal" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
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
