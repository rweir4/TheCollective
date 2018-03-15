import { createItem, fetchItem } from '../../actions/item_actions';
import { fetchCollections } from '../../actions/collection_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUserCollections } from '../../reducers/selectors';
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
      fetchCollections,
      closeModal,
      item,
      currentUser,
      collections,
      formType,
      submitAction,
      fetchUser,
      errors
    } = this.props;
    return (

      <ItemForm
        fetchCollections={fetchCollections}
        closeModal={closeModal}
        item={item}
        currentUser={currentUser}
        collections={collections}
        formType={formType}
        submitAction={submitAction}
        fetchUser={fetchUser}
        errors={errors} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.currentUser] || {};
  const collections = selectUserCollections(state, currentUser);

  return {
    item: state.ui.modal.item,
    collections: collections,
    formType: 'collect',
    currentUserId: state.session.currentUser,
    currentUser,
    errors: state.errors.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchCollections: () => dispatch(fetchCollections()),
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(createItem(item)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditForm);
