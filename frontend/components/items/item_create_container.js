import { createItem } from '../../actions/item_action';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import ItemForm from './item_form';


const mapStateToProps = state => {
  return {
    item: {descriptions: '', img_url: '', collection_id: ''},
    formType: 'create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    submitAction: item => dispatch(createItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
