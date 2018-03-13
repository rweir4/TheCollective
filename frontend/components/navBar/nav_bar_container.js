import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import navBar from './nav_bar';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser,
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  logout: id => dispatch(logout(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(navBar));
