import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchItems } from '../../actions/item_actions';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUser,
    currentLoggedInUser: state.entities.users[state.session.currentUser],
    currentPageUser: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
