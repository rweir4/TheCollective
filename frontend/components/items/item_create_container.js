import { createItem, fetchItem } from '../../actions/item_actions';
import { fetchCollections } from '../../actions/collection_actions';
import { selectUserCollections } from '../../reducers/selectors';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ItemForm from './item_form';


const mapStateToProps = (state) => {
  debugger
  return {
    item: {description: '', image: '', collection_id: ''},
    collections: selectUserCollections(state, state.session.currentUser),
    formType: 'create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(createItem(item)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
