import { fetchCollections } from '../../actions/collection_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectCollectionItems, selectUserCollections } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionIndex from './collection_index';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  const collections = selectUserCollections(state, user);
  console.log(collections)
  return {
    collections: selectUserCollections(state, user)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionIndex));
