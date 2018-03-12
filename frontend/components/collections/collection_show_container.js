import { fetchCollection } from '../../actions/collection_actions';
import { selectCollectionItems } from '../../reducers/selectors';
import { connect } from 'react-redux';
import CollectionShow from './collection_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const collection = state.entities.collections[ownProps.match.params.collectionId];
  return {
    collection
    // items: selectCollectionItems(state, collection)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollection: id => dispatch(fetchCollection(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionShow));
