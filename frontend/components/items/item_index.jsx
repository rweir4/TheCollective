import React from 'react';
import ItemDetails from './item_details';
import NavBarContainer from '../navBar/nav_bar_container';
import { ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router-dom';

class ItemIndex extends React.Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {

    if (this.props.items) {
      const items = this.props.items.map(item => {
        return ( <ItemDetails key={item.id} item={ item } /> );
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
            onClick={() => this.props.openModal('CreateItem')}>
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
