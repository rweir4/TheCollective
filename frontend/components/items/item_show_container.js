import { fetchItem, fetchItems } from '../../actions/item_actions';
import { fetchCollection } from '../../actions/collection_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ItemShow from './item_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const item = state.entities.items[ownProps.match.params.itemId];
  // 
  return {
    item,
    currentUser: state.entities.users[state.session.currentUser],
    currentUserId: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchItems: () => dispatch(fetchItems()),
  fetchItem: id => dispatch(fetchItem(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemShow));
