import { updateItem, fetchItem } from '../../actions/item_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import ItemForm from './item_form';
import React from 'react';

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
    currentUser: state.session.currentUser,
    formType: 'edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchItem: id => dispatch(fetchItem(id)),
    submitAction: item => dispatch(updateItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditForm);
