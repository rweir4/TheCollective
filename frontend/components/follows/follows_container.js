import { connect } from 'react-redux';
// import Follows from './follows';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUser,
    currentUser: state.entities.users[currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),

  };
};
