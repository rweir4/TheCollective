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
    const {
      item,
      currentUser,
      collections,
      formType,
      submitAction,
      fetchUser
    } = this.props;
    return (

      <ItemForm
        item={item}
        currentUser={currentUser}
        collections={collections}
        formType={formType}
        submitAction={submitAction}
        fetchUser={fetchUser} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    item: state.entities.items[ownProps.match.params.itemId] || {description: '', collection_id: ''},
    currentUser: state.session.currentUser,
    collections: state.entities.collections,
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
