import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import Search from './search';

const mapStateToProps = state => {
  const users = state.entities.users;
  
  return {
    queried: selectQueried(users)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
