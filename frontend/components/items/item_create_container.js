import { createItem, fetchItem } from '../../actions/item_actions';
import { fetchCollections } from '../../actions/collection_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUserCollections } from '../../reducers/selectors';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ItemForm from './item_form';


const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.currentUser] || {};
  const collections = selectUserCollections(state, currentUser);
  return {
    item: {description: '', image: '', collection_id: ''},
    collections,
    formType: 'create',
    currentUserId: state.session.currentUser,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchCollections: () => dispatch(fetchCollections()),
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(createItem(item)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
