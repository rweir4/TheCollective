import { signup, demoLogin } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    user: {email: '', password:''},
    formType: 'signup',
    loginButton: true,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: (user) => dispatch(signup(user)),
    demoLogin: () => dispatch(demoLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
