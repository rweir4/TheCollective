import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchItem } from '../../actions/item_actions';
import { fetchCollection } from '../../actions/collection_actions';
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
    fetchItem: (item) => dispatch(fetchItem(item)),
    fetchCollection: (collection) => dispatch(fetchCollection(collection)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
