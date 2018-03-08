import { fetchCollection } from '../../actions/collection_actions';
import { fetchItem } from '../../actions/collection_actions';
import { connect } from 'react-redux';
import CollectionShow from './collection_show';

const mapStateToProps = (state, ownProps) => ({
  collection: state.entities.collections[ownProps.match.params.collectionId],
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCollection: id => dispatch(fetchCollection(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionShow);
