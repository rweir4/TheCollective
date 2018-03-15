import { openModal } from '../../actions/modal_actions';
import { fetchItems } from '../../actions/item_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import ItemIndex from './item_index';

const mapStateToProps = state => ({
  items: Object.values(state.entities.items),
  currentUserId: state.session.currentUser,
  errors: state.errors.item
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchItems: () => dispatch(fetchItems()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);
