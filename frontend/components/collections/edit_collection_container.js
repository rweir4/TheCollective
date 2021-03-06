import { updateCollection, fetchCollection } from '../../actions/collection_actions';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CollectionForm from './collection_form';
import React from 'react';

class CollectionEditForm extends React.Component {
  componentDidMount() {
    this.props.fetchCollection(this.props.collection.id);
  }

  render() {
    const {
      closeModal,
      collection,
      formType,
      submitAction,
    } = this.props;
    return (

      <CollectionForm
        closeModal={closeModal}
        collection={collection}
        formType={formType}
        submitAction={submitAction} />
    );
  }
}

const mapStateToProps = (state) => {
  // const collections = selectCollectionItems(state, state.session.currentUser);
  return {
    collection: state.ui.modal.item,
    formType: 'edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollection: id => dispatch(fetchCollection(id)),
    submitAction: collection => dispatch(updateCollection(collection)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionEditForm);
