import { createItem } from '../../actions/item_action';
import { connect } from 'react-redux';
import ItemForm from './item_form';

const mapStateToProps = state => {
  return {
    item: {descriptions: '', img_url: '', collection_id: ''},
    currentUserCollections: Object.values(state.users[session.currentUser].collections),
    formType: 'create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: item => dispatch(createItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
