import { openModal } from '../../actions/modal_actions';
import { fetchItems } from '../../actions/item_actions';
import { connect } from 'react-redux';
import ItemIndex from './item_index';

const mapStateToProps = state => ({
  items: Object.values(state.entities.items),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);
