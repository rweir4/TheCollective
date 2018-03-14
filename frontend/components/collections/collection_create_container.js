import { createCollection, fetchCollection } from '../../actions/collection_actions';
import { fetchCollections } from '../../actions/collection_actions';
import { selectCollectionItems } from '../../reducers/selectors';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CollectionForm from './collection_form';


const mapStateToProps = (state) => {
  return {
    collection: {title: '', description: ''},
    formType: 'create',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollection: id => dispatch(fetchCollection(id)),
    submitAction: collection => dispatch(createCollection(collection)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionForm));
