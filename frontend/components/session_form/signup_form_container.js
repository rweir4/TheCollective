import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    user: {email: '', password:''},
    formType: 'signup',
    loginButton: true,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
