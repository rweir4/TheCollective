import { login, demoLogin } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: {email: '', password:''},
    formType: 'login',
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
