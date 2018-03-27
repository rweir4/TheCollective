import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchItems } from '../../actions/item_actions';
import { openModal } from '../../actions/modal_actions';
import { createFollow, deleteFollow } from '../../actions/follows_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';
import { selectUserCollections, selectUserItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const currentPageUser = state.entities.users[ownProps.match.params.userId] || {};
  return {
    currentUserId: state.session.currentUser,
    currentLoggedInUser: state.entities.users[state.session.currentUser],
    currentPageUser,
    collections: selectUserCollections(state, currentPageUser),
    items: selectUserItems(state, currentPageUser),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFollow: id => dispatch(createFollow(id)),
    deleteFollow: id => dispatch(deleteFollow(id)),
    fetchItems: () => dispatch(fetchItems()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
