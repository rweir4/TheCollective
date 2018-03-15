import { connect } from 'react-redux';
import ErrorsList from './errors_list';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mapDispatchToProps)(ErrorsList);
