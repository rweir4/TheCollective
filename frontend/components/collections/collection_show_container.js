import { fetchCollection, deleteCollection } from '../../actions/collection_actions';
import { selectCollectionItems } from '../../reducers/selectors';
import { connect } from 'react-redux';
import CollectionShow from './collection_show';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const collection = state.entities.collections[ownProps.match.params.collectionId] || {};
  let isCurrentUser;
  let items;
  let author;
  if (collection) {
    isCurrentUser = state.session.currentUser === collection.author_id;
    author = state.entities.users[collection.author_id];
    items = selectCollectionItems(state, collection);
  }

  return {
    collection,
    items,
    author,
    isCurrentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollection: id => dispatch(fetchCollection(id)),
    openModal: modal => dispatch(openModal(modal)),
    deleteCollection: id => dispatch(deleteCollection(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionShow));
