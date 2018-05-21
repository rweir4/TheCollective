import React from 'react';
import ItemDetails from './item_details';
import NavBarContainer from '../navBar/nav_bar_container';
import { ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router-dom';
import ErrorsList from '../errors/errors_list';
import Loading from '../loading';

class ItemIndex extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId).then(() => {
      this.props.fetchItems();
    });
  }

  render() {

    if (this.props.items[0] !== undefined) {
      let isCurrentUser;
      debugger

      const items = this.props.items.map(item => {
        isCurrentUser = item.author_id === this.props.currentUserId;
        return ( <ItemDetails
          isCurrentUser={isCurrentUser}
          openModal={this.props.openModal}
          key={item.id}
          item={ item }/>
        );
      });

      return (
        <div className="parent-index">
          <div>
            <ProtectedRoute path="/" component={ NavBarContainer } />
            <ul className="item-list">
              { items }
            </ul>
          </div>
          <button
            className="addItem"
            onClick={() => this.props.openModal({modal:'CreateItem', item: undefined})}>
            <img src={window.white_item_btn} />
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <ProtectedRoute path="/" component={ NavBarContainer } />
          <Loading />
        </div>
      );
    }
  }
}

export default ItemIndex;
