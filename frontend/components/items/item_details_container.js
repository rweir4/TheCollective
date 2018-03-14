import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import ItemDetails from './item_details';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
