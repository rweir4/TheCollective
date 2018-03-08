import { updateItem, fetchItem } from '../../actions/item_action';
import { connect } from 'react-redux';
import ItemForm from './item_form';

class ItemEditForm extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId);
  }

  render() {
    const { submitAction, item, formType } = this.props;
    return (

      <ItemForm
        submitAction={submitAction}
        item={item}
        formType={formType} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items[ownProps.match.params.itemId],
    currentUserCollections: Object.values(state.users[session.currentUser].collections),
    formType: 'edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(updateItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItemForm);
