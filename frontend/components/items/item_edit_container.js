import { updateItem, fetchItem, deleteItem } from '../../actions/item_actions';
import { fetchCollections } from '../../actions/collection_actions';
import { fetchUser } from '../../actions/user_actions';
import { makeOpaque } from '../../actions/ui_actions';
import { selectUserCollections } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
      deleteItem,
      closeModal,
      item,
      currentUserId,
      currentUser,
      collections,
      formType,
      submitAction,
      fetchUser,
      makeOpaque,
      errors,
      loaded
    } = this.props;
    return (

      <ItemForm
        deleteItem={deleteItem}
        fetchCollections={fetchCollections}
        closeModal={closeModal}
        item={item}
        currentUser={currentUser}
        collections={collections}
        formType={formType}
        submitAction={submitAction}
        fetchUser={fetchUser}
        makeOpaque={makeOpaque}
        errors={errors}
        loaded={loaded} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.currentUser] || {};
  const collections = selectUserCollections(state, currentUser);

  return {
    item: state.ui.modal.item,
    collections: collections,
    formType: 'edit',
    currentUserId: state.session.currentUser,
    currentUser,
    errors: state.errors.item,
    loaded: state.ui.style.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchCollections: () => dispatch(fetchCollections()),
    fetchItem: id => dispatch(fetchItem(id)),
    makeOpaque: () => dispatch(makeOpaque()),
    submitAction: item => dispatch(updateItem(item)),
    closeModal: () => dispatch(closeModal()),
    deleteItem: id => dispatch(deleteItem(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemEditForm));
