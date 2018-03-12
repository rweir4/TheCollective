import { updateItem, fetchItem } from '../../actions/item_actions';
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
      fetchUser
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
        fetchUser={fetchUser} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const collections = selectUserCollections(state, state.session.currentUser);

  return {
    item: state.ui.modal.item,
    collections: collections,
    formType: 'edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollections: () => dispatch(fetchCollections()),
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(updateItem(item)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditForm);
