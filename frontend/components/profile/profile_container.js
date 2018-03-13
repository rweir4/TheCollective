import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser,
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
