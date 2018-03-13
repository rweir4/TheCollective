import { fetchItem, fetchItems } from '../../actions/item_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ItemShow from './item_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  item: state.entities.items[ownProps.match.params.itemId]
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  fetchItem: id => dispatch(fetchItem(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemShow));
