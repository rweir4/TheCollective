import { fetchCollections } from '../../actions/collection_actions';
import { connect } from 'react-redux';
import CollectionIndex from './collection_index';

const mapStateToProps = state => ({
  collections: Object.values(state.entities.collections)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIndex);
