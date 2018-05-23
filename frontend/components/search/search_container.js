import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchQuery, openResults, closeResults } from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';
import Search from './search';

const mapStateToProps = state => {

  return {
    results: state.entities.search.results,
    showResults: state.ui.search.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuery: (query) => dispatch(fetchQuery(query)),
    openResults: () => dispatch(openResults()),
    closeResults: () => dispatch(closeResults()),
    fetchUser: (user) => dispatch(fetchUser(user)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
