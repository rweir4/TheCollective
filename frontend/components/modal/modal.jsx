import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateItemContainer from '../items/item_create_container';
import EditItemContainer from '../items/item_edit_container';
import CreateCollectionContainer from '../collections/collection_create_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(e) {
    this.props.closeModal();
  }

  render() {
    if (!this.props.modal) {
      return null;
    }

    let component;
    switch (this.props.modal.modal) {
      case 'CreateItem':
        component = ( <CreateItemContainer /> );
        break;
      case 'EditItem':
        component = ( <EditItemContainer item={this.props.modal.item}/> );
        break;
      case 'CreateBoard':
        component = ( <CreateCollectionContainer />)
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
