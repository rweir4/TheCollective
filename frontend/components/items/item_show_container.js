import { fetchItem, fetchItems } from '../../actions/item_actions';
import { connect } from 'react-redux';
import ItemShow from './item_show';

const mapStateToProps = (state, ownProps) => ({
  item: state.entities.items[ownProps.match.params.itemId]
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  fetchItem: id => dispatch(fetchItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);
