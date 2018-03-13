import { fetchCollection, fetchCollections } from '../../actions/collection_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectCollectionItems } from '../../reducers/selectors';
import { connect } from 'react-redux';
import CollectionShow from './collection_show';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const collection = state.entities.collections[ownProps.match.params.collectionId];
  return {
    collection,
    currentUser: state.entities.users[state.session.currentUser],
    currentUserId: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchCollection: id => dispatch(fetchCollection(id)),
    fetchCollections: () => dispatch(fetchCollections()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionShow));
