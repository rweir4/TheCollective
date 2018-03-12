import { updateItem, fetchItem } from '../../actions/item_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ItemForm from './item_form';
import React from 'react';

class ItemEditForm extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.item.id);
  }

  render() {
    const {
      closeModal,
      item,
      currentUser,
      collections,
      formType,
      submitAction,
      fetchUser
    } = this.props;
    return (

      <ItemForm
        closeModal={closeModal}
        item={item}
        currentUser={currentUser}
        collections={collections}
        formType={formType}
        submitAction={submitAction}
        fetchUser={fetchUser} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    item: state.ui.modal.item,
    currentUser: state.session.currentUser,
    collections: state.entities.collections,
    formType: 'edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(updateItem(item)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditForm);
