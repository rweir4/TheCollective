import { fetchCollections } from '../../actions/collection_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectCollectionItems, selectUserCollections } from '../../reducers/selectors';
import { connect } from 'react-redux';
import CollectionIndex from './collection_index';

const mapStateToProps = state => ({
  collections: selectUserCollections(state, state.session.currentUser),
  // items: selectCollectionItems(state, collection)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  // fetchItems: () => dispatch(fetchItems()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIndex);
