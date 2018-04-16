import { connect } from 'react-redux';
import { fetchUser, deleteUser, updateUser } from '../../actions/user_actions';
import SettingsForm from './settings_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.currentUser],
    currentUserId: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    deleteUser: userId => dispatch(deleteUser(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingsForm));
