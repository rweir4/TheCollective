import { createItem, fetchItem } from '../../actions/item_action';
import { connect } from 'react-redux';
import ItemForm from './item_form';

class ItemRepostForm extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId);
  }

  render() {
    return (
      const { submitAction, item, formType } = this.props;

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
    formType: 'repost'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(createItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItemForm);
