import { closeModal } from '../../actions/modal_actions';
import { createItem, fetchItem } from '../../actions/item_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import ItemForm from './item_form';


const mapStateToProps = (state, ownProps) => {

  return {
    item: {description: '', image: '', collection_id: ''},
    currentUser: state.session.currentUser,
    collections: state.entities.collections,
    formType: 'create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(createItem(item)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
