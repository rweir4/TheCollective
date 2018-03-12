import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    user: {email: '', password:''},
    formType: 'login',
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
