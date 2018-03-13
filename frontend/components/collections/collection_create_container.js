import { createCollection, fetchCollection } from '../../actions/collection_actions';
import { fetchCollections } from '../../actions/collection_actions';
import { selectCollectionItems } from '../../reducers/selectors';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import CollectionForm from './collection_form';


const mapStateToProps = (state) => {
  const collections = selectCollectionItems(state, state.session.currentUser);
  return {
    collection: {description: '', image: '', collection_id: ''},
    formType: 'create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollections: () => dispatch(fetchCollections()),
    fetchCollection: id => dispatch(fetchCollection(id)),
    submitAction: collection => dispatch(createCollection(collection)),
    closeModal: () => dispatch(closeModal())
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(CollectionForm);
