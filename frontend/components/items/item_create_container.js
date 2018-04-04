import { createItem, fetchItem } from '../../actions/item_actions';
import { fetchCollections } from '../../actions/collection_actions';
import { fetchUser } from '../../actions/user_actions';
import { makeOpaque } from '../../actions/ui_actions';
import { selectUserCollections } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ItemForm from './item_form';


const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.currentUser] || {};
  const collections = selectUserCollections(state, currentUser);
  debugger
  return {
    item: {description: '', image: '', collection_id: ''},
    collections,
    formType: 'create',
    currentUserId: state.session.currentUser,
    currentUser,
    errors: state.errors.item,
    loaded: state.ui.style.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchCollections: () => dispatch(fetchCollections()),
    fetchItem: id => dispatch(fetchItem(id)),
    makeOpaque: () => dispatch(makeOpaque()),
    submitAction: item => dispatch(createItem(item)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
