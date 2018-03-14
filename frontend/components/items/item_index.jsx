import React from 'react';
import ItemDetailsContainer from './item_details_container';
import NavBarContainer from '../navBar/nav_bar_container';
import { ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router-dom';

class ItemIndex extends React.Component {

  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchUser(this.props.currentUserId);
  }

  render() {

    if (this.props.items[0] && this.props.currentUser) {

      const items = this.props.items.map(item => {
        return ( <ItemDetailsContainer
          currentUser={this.props.currentUser}
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
          <p>Loading</p>
        </div>
      );
    }
  }
};

export default ItemIndex;
