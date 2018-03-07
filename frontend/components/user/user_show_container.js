import { fetchUser } from '../../actions/user_actions';
import { merge } from 'lodash';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
